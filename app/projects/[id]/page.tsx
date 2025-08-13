"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, FileText, Clock, CheckCircle, PlayCircle, AlertCircle, Building, GitCompare, Upload, ChevronLeft, ChevronRight, AlertTriangle, Download, Eye, ZoomIn, ZoomOut, Maximize2, X } from "lucide-react"
import Link from "next/link"
import { TermsPrivacyDialog } from "@/components/terms-privacy-dialog"

// Type definitions
interface Sheet {
  id: number;
  code: string;
  title: string;
  type: string;
  page: number;
  status: 'not started' | 'in progress' | 'completed';
  documentId: number;
}

interface Document {
  id: number;
  type?: string;
  path: string;
  title?: string;
  originalFilename?: string;
  category?: string;
  projectId: number;
  sheets?: Sheet[];
}

interface Project {
  id: number;
  name: string;
  date: string;
  documents?: Document[];
}

interface GroupedSheets {
  [key: string]: Sheet[];
}

interface CategoryCard {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: any;
  hasFiles: boolean;
  fileCount: number;
  actions: string[];
}

export default function ProjectDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const [project, setProject] = useState<Project | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(null)
  const [sheets, setSheets] = useState<Sheet[]>([])
  const [filteredSheets, setFilteredSheets] = useState<Sheet[]>([])
  const [groupedSheets, setGroupedSheets] = useState<GroupedSheets>({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // New states for file management
  const [selectedDocumentCardId, setSelectedDocumentCardId] = useState<number | null>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  // Version control states
  const [comparisonDiffs, setComparisonDiffs] = useState<ComparisonDiff[]>([])
  const [activeTab, setActiveTab] = useState<'review' | 'accepted' | 'removed'>('review')
  const [subcontractors, setSubcontractors] = useState<SubContractor[]>([])
  const [processingDiffs, setProcessingDiffs] = useState<{[sheetId: number]: boolean}>({})
  const [selectedChangeLog, setSelectedChangeLog] = useState<ComparisonDiff | null>(null)

  // Types for new comparison diff system
  interface ComparisonDiff {
    id: number;
    originalSheetId: number | null; // Allow null for new sheets
    currentSheetId: number;
    hasAdditions: boolean;
    hasDeletions: boolean;
    originalBbox?: string; // JSON string
    currentBbox?: string; // JSON string
    title?: string;
    description?: string;
    subContractorId?: number | null;
    status: 'review' | 'accepted' | 'removed';
    originalSheet: (Sheet & { document: Document }) | null; // Allow null for new sheets
    currentSheet: Sheet & { document: Document };
    subContractor?: SubContractor;
    subcontractorsToNotify?: Array<{
      trade: string;
      reason: string;
    }>;
  }

  interface SubContractor {
    id: number;
    name: string;
    tradeName: string;
  }

  // Document cards configuration - showing actual documents
  const documentCards: CategoryCard[] = documents.map((document) => {
    const documentSheets = sheets.filter(s => s.documentId === document.id)
    return {
      id: document.id.toString(),
      title: document.title || document.originalFilename || `Document ${document.id}`,
      description: `${documentSheets.length} sheets`,
      color: 'border-blue-200 bg-blue-50',
      icon: FileText,
      hasFiles: documentSheets.length > 0,
      fileCount: documentSheets.length,
      actions: []
    }
  })

  // Filter sheets by selected document
  const getFilteredSheetsByDocument = () => {
    return filteredSheets // filteredSheets is already filtered by selectedDocumentCardId in useEffect
  }

  // Handle category update
  const handleCategoryUpdate = async (documentId: number, category: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/documents/${documentId}/category`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      })
      
      if (response.ok) {
        // Update local state
        setDocuments(prev => prev.map(doc => 
          doc.id === documentId ? { ...doc, category } : doc
        ))
      }
    } catch (error) {
      console.error('Error updating category:', error)
    }
  }

  // Process all comparisons for the project
  const processProjectComparisons = async () => {
    setProcessingDiffs(prev => ({ ...prev, [0]: true })) // Use 0 as general processing flag
    try {
      const response = await fetch('http://localhost:8080/api/process-comparisons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectId: parseInt(projectId) })
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Processing completed:', result)
        // Refresh comparison diffs after processing
        fetchComparisonDiffs()
        alert('Comparison processing completed successfully!')
      } else {
        const error = await response.json()
        console.error('Processing failed:', error)
        alert('Processing failed: ' + error.error)
      }
    } catch (error) {
      console.error('Error processing comparisons:', error)
      alert('Error processing comparisons')
    } finally {
      setProcessingDiffs(prev => ({ ...prev, [0]: false }))
    }
  }

  // Find the "original" document (usually the first/main construction drawings)
  const getOriginalDocument = () => {
    if (!selectedDocumentCardId) return null
    
    // Don't compare first document with itself
    const sortedDocs = documents.sort((a, b) => a.id - b.id) // Sort by ID (creation order)
    const selectedDoc = documents.find(d => d.id === selectedDocumentCardId)
    const selectedIndex = sortedDocs.findIndex(d => d.id === selectedDocumentCardId)
    
    // If this is the first document, no comparison possible
    if (selectedIndex === 0) return null
    
    // Look for IFC or main construction document first
    const ifcDoc = sortedDocs.slice(0, selectedIndex).find(doc => 
      doc.category === 'IFC' || doc.title?.toLowerCase().includes('construction')
    )
    if (ifcDoc) return ifcDoc
    
    // Otherwise return the document just before this one
    return sortedDocs[selectedIndex - 1]
  }

  // Process diff for a specific sheet
  const processDiffForSheet = async (currentSheet: Sheet) => {
    const originalDoc = getOriginalDocument()
    if (!originalDoc) return

    // Find corresponding sheet in original document with same code
    const originalSheet = sheets.find(sheet => 
      sheet.documentId === originalDoc.id && sheet.code === currentSheet.code
    )

    if (!originalSheet) {
      console.log(`No corresponding sheet found for ${currentSheet.code} in original document`)
      return
    }

    setProcessingDiffs(prev => ({ ...prev, [currentSheet.id]: true }))

    try {
      const response = await fetch('http://localhost:8080/api/sheet-diff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId,
          sheetCode: currentSheet.code,
          sheet1Id: originalSheet.id,
          sheet2Id: currentSheet.id,
          document1Id: originalDoc.id,
          document2Id: selectedDocumentCardId
        })
      })

      if (response.ok) {
        const diffData = await response.json()
        
        // Generate intelligent title and description
        let title = `Changes in ${currentSheet.code}`
        let description = `${diffData.adds} additions, ${diffData.deletes} deletions, ${diffData.moves} moves`
        
        // If we have bounding box information, generate intelligent description
        if (diffData.processing_info && diffData.processing_info.originalBbox && diffData.processing_info.currentBbox) {
          try {
            const descriptionResponse = await fetch('http://localhost:8080/api/generate-change-description', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                originalSheetId: originalSheet.id,
                currentSheetId: currentSheet.id,
                originalBbox: diffData.processing_info.originalBbox,
                currentBbox: diffData.processing_info.currentBbox,
                sheetCode: currentSheet.code
              })
            })
            
            if (descriptionResponse.ok) {
              const descriptionData = await descriptionResponse.json()
              if (descriptionData.success) {
                title = descriptionData.title
                description = descriptionData.description
              }
            }
          } catch (descError) {
            console.warn('Failed to generate intelligent description, using fallback:', descError)
          }
        }
        
        // Create comparison diff record
        await fetch('http://localhost:8080/api/comparison-diffs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            originalSheetId: originalSheet.id,
            currentSheetId: currentSheet.id,
            hasAdditions: diffData.adds > 0,
            hasDeletions: diffData.deletes > 0,
            title: title,
            description: description,
            status: 'review'
          })
        })

        // Refresh comparison diffs
        fetchComparisonDiffs()
      }
    } catch (error) {
      console.error('Error processing diff:', error)
    } finally {
      setProcessingDiffs(prev => ({ ...prev, [currentSheet.id]: false }))
    }
  }

  // Fetch comparison diffs
  const fetchComparisonDiffs = async () => {
    if (!projectId) return
    
    try {
      const response = await fetch(`/api/comparison-diffs?projectId=${projectId}&status=${activeTab}`)
      if (response.ok) {
        const data = await response.json()
        let diffs = data.diffs || []
        
        // Add the mock comparison entries to the review tab
        if (activeTab === 'review') {
          diffs = [newSheetAddition, bedroomDimensionChange, calloutChange, windowWallDetails, ...diffs]
        }
        
        setComparisonDiffs(diffs)
      }
    } catch (error) {
      console.error('Error fetching comparison diffs:', error)
      // If API fails, still show the mock entries for review tab
      if (activeTab === 'review') {
        setComparisonDiffs([newSheetAddition, bedroomDimensionChange, calloutChange, windowWallDetails])
      }
    }
  }

  // Fetch subcontractors
  const fetchSubcontractors = async () => {
    try {
      const response = await fetch('/api/subcontractors')
      if (response.ok) {
        const data = await response.json()
        setSubcontractors(data.subcontractors || [])
      }
    } catch (error) {
      console.error('Error fetching subcontractors:', error)
    }
  }

  // Fetch project and documents data
  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        setIsLoading(true)
        
        // Fetch project details
        const projectResponse = await fetch(`/api/projects/${projectId}`)
        if (!projectResponse.ok) {
          throw new Error('Failed to fetch project')
        }
        const projectData = await projectResponse.json()
        setProject(projectData)

        // Fetch documents for this project
        const documentsResponse = await fetch(`/api/documents?projectId=${projectId}`)
        if (!documentsResponse.ok) {
          throw new Error('Failed to fetch documents')
        }
        const documentsData = await documentsResponse.json()
        const fetchedDocuments = documentsData.documents || []
        setDocuments(fetchedDocuments)
        
        // Set the first document as selected by default if any exist
        if (fetchedDocuments.length > 0) {
          setSelectedDocumentId(fetchedDocuments[0].id)
          setSelectedDocumentCardId(fetchedDocuments[0].id)
        }

        // Fetch sheets for this project
        const sheetsResponse = await fetch(`/api/sheets?projectId=${projectId}`)
        if (!sheetsResponse.ok) {
          throw new Error('Failed to fetch sheets')
        }
        const sheetsData = await sheetsResponse.json()
        setSheets(sheetsData.sheets || [])

        // Fetch subcontractors
        fetchSubcontractors()

        setError(null)
      } catch (err) {
        console.error('Error fetching project data:', err)
        setError('Failed to load project data')
      } finally {
        setIsLoading(false)
      }
    }

    if (projectId) {
      fetchProjectData()
    }
  }, [projectId])

  // Fetch comparison diffs when tab changes
  useEffect(() => {
    fetchComparisonDiffs()
  }, [activeTab, projectId])

  // Filter and group sheets when selectedDocumentCardId or sheets change
  useEffect(() => {
    let filteredSheetsData: Sheet[] = []
    
    if (selectedDocumentCardId && sheets.length > 0) {
      filteredSheetsData = sheets.filter(sheet => sheet.documentId === selectedDocumentCardId)
    } else {
      filteredSheetsData = sheets
    }
    
    setFilteredSheets(filteredSheetsData)

    // Group filtered sheets by type
    const grouped = filteredSheetsData.reduce((acc: GroupedSheets, sheet: Sheet) => {
      const type = sheet.type || 'Other'
      if (!acc[type]) {
        acc[type] = []
      }
      acc[type].push(sheet)
      return acc
    }, {})
    setGroupedSheets(grouped)
  }, [selectedDocumentCardId, sheets])

  // Auto-process diffs when document is selected and we have multiple documents
  useEffect(() => {
    if (selectedDocumentCardId && documents.length > 1 && filteredSheets.length > 0) {
      const originalDoc = getOriginalDocument()
      if (originalDoc) {
        // Process diffs for sheets that have corresponding sheets in original document
        filteredSheets.forEach(sheet => {
          const hasOriginalSheet = sheets.some(s => 
            s.documentId === originalDoc.id && s.code === sheet.code
          )
          const existingDiff = comparisonDiffs.find(d => d.currentSheetId === sheet.id)
          if (hasOriginalSheet && !existingDiff && !processingDiffs[sheet.id]) {
            processDiffForSheet(sheet)
          }
        })
      }
    }
  }, [selectedDocumentCardId, filteredSheets, documents, sheets, comparisonDiffs])

  // Get status color and icon
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return { color: 'text-green-600', bgColor: 'bg-green-100', icon: CheckCircle, progress: 100 }
      case 'in progress':
        return { color: 'text-blue-600', bgColor: 'bg-blue-100', icon: PlayCircle, progress: 50 }
      default:
        return { color: 'text-gray-500', bgColor: 'bg-gray-100', icon: Clock, progress: 0 }
    }
  }

  // Get type color for grouping
  const getTypeColor = (type: string) => {
    const colors = {
      'Architectural': 'border-blue-200 bg-blue-50',
      'Structural': 'border-green-200 bg-green-50',
      'Mechanical': 'border-orange-200 bg-orange-50',
      'Electrical': 'border-yellow-200 bg-yellow-50',
      'Plumbing': 'border-purple-200 bg-purple-50',
      'Other': 'border-gray-200 bg-gray-50'
    }
    return colors[type as keyof typeof colors] || colors['Other']
  }

  // Mock data for new sheet addition - Level 1 Reflected Ceiling Plan
  const newSheetAddition = {
    id: 999, // Mock ID
    originalSheetId: null,
    currentSheetId: 999,
    hasAdditions: true,
    hasDeletions: false,
    title: "Addendum — New Sheet: Level 1 Reflected Ceiling Plan (Sheet 5; 14/A2.2 \"Add Alternate 2\")",
    description: "Entire Level-1 RCP added (CEIL-1, fixtures/devices). Confirm ceiling heights, soffits, and all device locations before rough-in.",
    status: 'review' as const,
    originalSheet: null,
    currentSheet: {
      id: 999,
      code: "A2.2",
      title: "Level 1 Reflected Ceiling Plan",
      type: "RCP",
      page: 1,
      status: "completed" as const,
      documentId: selectedDocumentCardId || 1,
      document: {
        id: selectedDocumentCardId || 1,
        title: "Addendum",
        path: "/public/removed_ceil.png",
        projectId: parseInt(projectId),
        type: "Addendum"
      }
    },
    subContractor: undefined,
    subContractorId: null,
    subcontractorsToNotify: [
      {
        trade: "Electrical",
        reason: "lighting/controls per RCP."
      },
      {
        trade: "Ceilings/Framing",
        reason: "CEIL-1, soffits, access panels."
      },
      {
        trade: "Mechanical",
        reason: "diffuser/return locations vs ceiling."
      },
      {
        trade: "Fire Sprinkler",
        reason: "head layout/spacing."
      },
      {
        trade: "Low-Voltage/FA",
        reason: "device locations in ceiling."
      }
    ]
  }

  // Mock data for bedroom dimension change
  const bedroomDimensionChange = {
    id: 998, // Mock ID
    originalSheetId: 997,
    currentSheetId: 998,
    hasAdditions: true,
    hasDeletions: false,
    title: "Addendum — New Dimension: Bedroom 1 (G06) = 11′-0 5/8″ (finish-to-finish)",
    description: "Locks room width; shift partitions if needed. Re-check door/window centering and any casework.",
    status: 'review' as const,
    originalSheet: {
      id: 997,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Original)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: 1, // Original document
      document: {
        id: 1,
        title: "Construction Drawings",
        path: "/public/old_1.png",
        projectId: parseInt(projectId),
        type: "Construction"
      }
    },
    currentSheet: {
      id: 998,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Revised)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: selectedDocumentCardId || 2,
      document: {
        id: selectedDocumentCardId || 2,
        title: "Addendum",
        path: "/public/new_1.png",
        projectId: parseInt(projectId),
        type: "Addendum"
      }
    },
    subContractor: undefined,
    subContractorId: null,
    subcontractorsToNotify: [
      {
        trade: "Framing/Drywall",
        reason: "set wall to 11′-0 5/8″."
      },
      {
        trade: "Electrical",
        reason: "device spacing on revised walls."
      },
      {
        trade: "HVAC",
        reason: "diffuser/grille alignment."
      },
      {
        trade: "Fire Sprinkler",
        reason: "head spacing/coverage."
      },
      {
        trade: "Casework",
        reason: "adjust closet/built-ins if affected."
      }
    ]
  }

  // Mock data for callout change at hallway
  const calloutChange = {
    id: 996, // Mock ID
    originalSheetId: 995,
    currentSheetId: 996,
    hasAdditions: false,
    hasDeletions: false,
    title: "Callout Change at Hallway E04/E04.1: \"AE-2\" → \"A-2\"",
    description: "Callout on the angled wall revised to A-2. Use the A-2 keynote/wall type for materials, rating, and finish. Update takeoffs and any shops that referenced AE-2.",
    status: 'review' as const,
    originalSheet: {
      id: 995,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Original)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: 1, // Original document
      document: {
        id: 1,
        title: "Construction Drawings",
        path: "/public/old_2.png",
        projectId: parseInt(projectId),
        type: "Construction"
      }
    },
    currentSheet: {
      id: 996,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Revised)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: selectedDocumentCardId || 2,
      document: {
        id: selectedDocumentCardId || 2,
        title: "Addendum",
        path: "/public/new_2.png",
        projectId: parseInt(projectId),
        type: "Addendum"
      }
    },
    subContractor: undefined,
    subContractorId: null,
    subcontractorsToNotify: [
      {
        trade: "Framing/Drywall",
        reason: "build per A-2."
      },
      {
        trade: "Electrical",
        reason: "box/putty pad requirements per A-2."
      },
      {
        trade: "Paint/Finishes",
        reason: "finish spec per A-2."
      }
    ]
  }

  // Mock data for window wall detail and finish tags
  const windowWallDetails = {
    id: 994, // Mock ID
    originalSheetId: 993,
    currentSheetId: 994,
    hasAdditions: true,
    hasDeletions: false,
    title: "Addendum — New Detail & Finish Tags at Window Wall: \"6/A6.2\" and \"09-04\"",
    description: "Added callouts at the long window band. Use Detail 6 on A6.2 for head/jamb/sill and flashing. Apply finish 09-04 at adjacent wall/base per schedule.",
    status: 'review' as const,
    originalSheet: {
      id: 993,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Original)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: 1, // Original document
      document: {
        id: 1,
        title: "Construction Drawings",
        path: "/public/old_3.png",
        projectId: parseInt(projectId),
        type: "Construction"
      }
    },
    currentSheet: {
      id: 994,
      code: "A1.1",
      title: "Floor Plan - Level 1 (Revised)",
      type: "Floor Plan",
      page: 1,
      status: "completed" as const,
      documentId: selectedDocumentCardId || 2,
      document: {
        id: selectedDocumentCardId || 2,
        title: "Addendum",
        path: "/public/new_3.png",
        projectId: parseInt(projectId),
        type: "Addendum"
      }
    },
    subContractor: undefined,
    subContractorId: null,
    subcontractorsToNotify: [
      {
        trade: "Glazing/Windows",
        reason: "fabricate/install per 6/A6.2."
      },
      {
        trade: "Framing/Envelope/Waterproofing",
        reason: "RO, blocking, and flashing per detail."
      },
      {
        trade: "Drywall/Paint",
        reason: "interior returns/finishes per 09-04."
      }
    ]
  }

  if (isLoading) {
    return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div>
            <h1 className="font-semibold">Project Details</h1>
            <p className="text-sm text-muted-foreground">Loading project information...</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    )
  }

  if (error || !project) {
    return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div>
            <h1 className="font-semibold">Project Details</h1>
            <p className="text-sm text-muted-foreground">Error loading project</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Failed to load project</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => router.push('/projects')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Button>
          </div>
        </div>
      </SidebarInset>
    )
  }

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex items-center gap-4 flex-1">
          <Link href="/projects">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold flex items-center gap-2">
              <Building className="h-5 w-5" />
              {project.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              Created {project.date} • {filteredSheets.length} sheets {documents.length > 1 ? `(${sheets.length} total)` : ''}
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6">
        {/* Category Cards Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Project Documents</h2>
            {documents.length > 1 && (
              <Link href={`/projects/${projectId}/version-control`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <GitCompare className="h-4 w-4" />
                  Compare Versions
                </Button>
              </Link>
            )}
          </div>

          {/* Card Navigation */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentCardIndex(Math.max(0, currentCardIndex - 1))}
              disabled={currentCardIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out gap-4"
                style={{ transform: `translateX(-${currentCardIndex * 320}px)` }}
              >
                {documentCards.map((card) => {
                  const IconComponent = card.icon
                  const isSelected = selectedDocumentCardId === parseInt(card.id)
                  return (
                    <Card 
                      key={card.id} 
                      className={`min-w-[300px] cursor-pointer hover:shadow-md transition-all ${
                        isSelected 
                          ? 'bg-gray-100 border-gray-400 shadow-md' 
                          : card.color
                      }`}
                      onClick={() => setSelectedDocumentCardId(parseInt(card.id))}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5" />
                            <CardTitle className="text-base">{card.title}</CardTitle>
                          </div>
                          <Badge variant={isSelected ? "default" : "secondary"}>
                            {card.fileCount} sheets
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">
                          {card.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  )
                })}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentCardIndex(Math.min(documentCards.length - 2, currentCardIndex + 1))}
              disabled={currentCardIndex >= documentCards.length - 2}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Upload Button */}
            <Link href={`/projects/${projectId}`}>
              <Button className="ml-4">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </Link>
          </div>
        </div>

        {/* File Management Actions */}
        {selectedDocumentCardId && documents.find(d => d.id === selectedDocumentCardId) && (
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">
              {documents.find(d => d.id === selectedDocumentCardId)?.title || documents.find(d => d.id === selectedDocumentCardId)?.originalFilename}
            </h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  const document = documents.find(d => d.id === selectedDocumentCardId)
                  if (document) {
                    window.open(`http://localhost:8080/api/documents/${document.originalFilename || document.title}/view`, '_blank')
                  }
                }}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                View File
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const document = documents.find(d => d.id === selectedDocumentCardId)
                  if (document) {
                    window.open(`http://localhost:8080/api/documents/${document.originalFilename || document.title}`, '_blank')
                  }
                }}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download File
              </Button>
              <Select
                value={documents.find(d => d.id === selectedDocumentCardId)?.category || "Uncategorized"}
                onValueChange={(value) => {
                  if (selectedDocumentCardId) {
                    handleCategoryUpdate(selectedDocumentCardId, value)
                  }
                }}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Choose Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Uncategorized">Uncategorized</SelectItem>
                  <SelectItem value="IFC">IFC</SelectItem>
                  <SelectItem value="Addendum">Addendum</SelectItem>
                  <SelectItem value="Bulletins">Bulletins</SelectItem>
                  <SelectItem value="ASI">ASI</SelectItem>
                  <SelectItem value="CCD">CCD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}


        {/* Sheets Display */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {documents.find(d => d.id === selectedDocumentCardId)?.title || 'All Sheets'} 
              ({filteredSheets.length} sheets)
            </h3>
          </div>

          {filteredSheets.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No sheets found</h3>
              <p className="text-muted-foreground">
                {!selectedDocumentCardId ? 'No sheets have been uploaded to this project' : 'This document has no sheets'}
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredSheets.map((sheet) => {
                const getStatusInfo = (status: string) => {
                  switch (status) {
                    case 'completed':
                      return { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100', progress: 100 }
                    case 'in progress':
                      return { icon: PlayCircle, color: 'text-blue-600', bgColor: 'bg-blue-100', progress: 60 }
                    default:
                      return { icon: Clock, color: 'text-gray-400', bgColor: 'bg-gray-100', progress: 0 }
                  }
                }
                
                const getTypeColor = (type: string) => {
                  const colors: {[key: string]: string} = {
                    'Floor Plan': 'border-blue-200 bg-blue-50',
                    'RCP': 'border-purple-200 bg-purple-50',
                    'Elevation': 'border-green-200 bg-green-50',
                    'Section': 'border-orange-200 bg-orange-50',
                    'Detail': 'border-red-200 bg-red-50',
                    'Other': 'border-gray-200 bg-gray-50'
                  }
                  return colors[type] || colors['Other']
                }

                const statusInfo = getStatusInfo(sheet.status)
                const StatusIcon = statusInfo.icon
                
                return (
                  <Link key={sheet.id} href={`/projects/${projectId}/sheets/${sheet.id}`}>
                    <Card className={`h-full hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] ${getTypeColor(sheet.type || 'Other')}`}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium truncate">
                            {sheet.code}
                          </CardTitle>
                          <div className={`p-1 rounded-full ${statusInfo.bgColor}`}>
                            <StatusIcon className={`h-3 w-3 ${statusInfo.color}`} />
                          </div>
                        </div>
                        <CardDescription className="text-xs truncate">
                          {sheet.title || 'No title'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Page {sheet.page}</span>
                            <span className="capitalize">{sheet.status}</span>
                          </div>
                          <Progress value={statusInfo.progress} className="h-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>All uploaded data is deleted after 1 hour.</p>
            <div className="flex items-center justify-center gap-2">
              <span>© ContextFort INCORPORATED</span>
              <span>|</span>
              <TermsPrivacyDialog>
                <button className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Terms and Privacy
                </button>
              </TermsPrivacyDialog>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}