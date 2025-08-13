"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { GitCompare, FileText, AlertCircle, Download, Eye, ZoomIn, ZoomOut, Maximize2, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

// Type definitions
interface Sheet {
  id: number;
  code: string;
  title: string;
  type: string;
  page: number;
  status: 'not started' | 'in progress' | 'completed';
  documentId: number;
  svgPath?: string;
}

interface Document {
  id: number;
  type?: string;
  path: string;
  title?: string;
  projectId: number;
}

interface Project {
  id: number;
  name: string;
  date: string;
}

interface SheetComparison {
  sheetCode: string;
  documents: {
    documentId: number;
    documentTitle: string;
    sheet: Sheet;
  }[];
}

interface DiffResult {
  sheetCode: string;
  document1: { id: number; title: string; };
  document2: { id: number; title: string; };
  adds: number;
  deletes: number;
  moves: number;
  diffImagePath?: string;
  processed: boolean;
}

interface ComparisonDiff {
  id: number;
  title: string;
  description: string;
  status: string;
  hasAdditions: boolean;
  hasDeletions: boolean;
  originalSheet?: Sheet;
  currentSheet: Sheet;
  subcontractorsToNotify?: { trade: string; reason: string; }[];
}

interface VisualComparison {
  id: string;
  oldImage: string;
  newImage: string;
  description: string;
}

// Component to display visual comparisons for a sheet
function VisualComparisons({ sheetCode }: { sheetCode: string }) {
  // Define known comparisons based on available images
  const getAvailableComparisons = (code: string): VisualComparison[] => {
    const comparisons: { [key: string]: VisualComparison[] } = {
      'A2.1': [
        {
          id: 'A2.1-a',
          oldImage: '/images/A2.1-a-old.png',
          newImage: '/images/A2.1-a-new.png',
          description: 'Comparison A - Floor plan layout changes and room modifications'
        },
        {
          id: 'A2.1-b',
          oldImage: '/images/A2.1-b-old.png',
          newImage: '/images/A2.1-b-new.png',
          description: 'Comparison B - Structural elements and fixture updates'
        }
      ],
      'A6.2': [
        {
          id: 'A6.2-a',
          oldImage: '/images/A6.2-a-old.png',
          newImage: '/images/A6.2-a-new.png',
          description: 'Comparison A - Casework details and cabinet modifications'
        }
      ],
      'A9.1': [
        {
          id: 'A9.1-a',
          oldImage: '/images/A9.1-a-old.png',
          newImage: '/images/A9.1-a-new.png',
          description: 'Comparison A - Schedule updates and specification changes'
        }
      ],
      'D2.1': [
        {
          id: 'D2.1-a',
          oldImage: '/images/D2.1-a-old.png',
          newImage: '/images/D2.1-a-new.png',
          description: 'Comparison A - Demolition plan changes and removal scope updates'
        }
      ],
      'G0.1': [
        {
          id: 'G0.1-a',
          oldImage: '/images/G0.1-a-old.png',
          newImage: '/images/G0.1-a-new.png',
          description: 'Comparison A - General information updates and project notes'
        }
      ]
    }
    
    return comparisons[code] || []
  }

  const comparisons = getAvailableComparisons(sheetCode)

  if (comparisons.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium mb-2">No Visual Comparisons Available</h3>
        <p className="text-muted-foreground">
          No comparison images found for sheet {sheetCode}. Visual comparisons are available for sheets with uploaded comparison images.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {comparisons.map((comparison) => (
        <div key={comparison.id} className="space-y-4">
          <div className="flex items-center justify-between">
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Old Version */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-medium text-red-700">Original Version</span>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[4/3] min-h-[300px]">
                  <Image
                    src={comparison.oldImage}
                    alt={`${sheetCode} - Original Version`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* New Version */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-700">Updated Version</span>
              </div>
              <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="relative aspect-[4/3] min-h-[300px]">
                  <Image
                    src={comparison.newImage}
                    alt={`${sheetCode} - Updated Version`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function VersionControlPage() {
  const params = useParams()
  const projectId = params.id as string

  const [project] = useState<Project>({ id: parseInt(projectId), name: "JULIA MARTIN", date: "2025-08-07" })
  const [documents] = useState<Document[]>([
    { id: 6, type: "document", path: "/documents/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings.pdf", title: "Construction Drawings", projectId: parseInt(projectId) },
    { id: 7, type: "document", path: "/documents/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum.pdf", title: "Repairs Addendum", projectId: parseInt(projectId) }
  ])
  const [sheets] = useState<Sheet[]>([
    // Document 1 sheets
    { id: 978, code: "G0.0", title: "COVER SHEET", type: "G", page: 1, status: "completed", documentId: 6 },
    { id: 979, code: "G0.1", title: "GENERAL INFORMATION", type: "G", page: 2, status: "completed", documentId: 6 },
    { id: 980, code: "G1.0", title: "CODE SUMMARY", type: "G", page: 3, status: "completed", documentId: 6 },
    { id: 981, code: "G2.1", title: "LEVEL 1 CODE PLAN", type: "G", page: 4, status: "completed", documentId: 6 },
    { id: 982, code: "D2.1", title: "AA2 DEMOLITION PLAN", type: "D", page: 5, status: "completed", documentId: 6 },
    { id: 983, code: "A2.1", title: "LEVEL 1 FLOOR PLAN", type: "A", page: 6, status: "completed", documentId: 6 },
    { id: 984, code: "A6.1", title: "INTERIOR ELEVATIONS", type: "A", page: 7, status: "completed", documentId: 6 },
    { id: 985, code: "A6.2", title: "CASEWORK DETAILS", type: "A", page: 8, status: "completed", documentId: 6 },
    { id: 986, code: "A9.1", title: "SCHEDULES", type: "A", page: 9, status: "completed", documentId: 6 },
    { id: 987, code: "A9.2", title: "DETAILS", type: "A", page: 10, status: "completed", documentId: 6 },
    // Document 2 sheets
    { id: 988, code: "A2.1", title: "LEVEL 1 FLOOR PLAN", type: "A", page: 13, status: "completed", documentId: 7 },
    { id: 989, code: "A2.2", title: "ADD ALTERNATE 2", type: "A", page: 14, status: "completed", documentId: 7 },
    { id: 990, code: "A6.2", title: "CASEWORK DETAILS", type: "A", page: 15, status: "completed", documentId: 7 },
    { id: 991, code: "A9.1", title: "SCHEDULES", type: "A", page: 16, status: "completed", documentId: 7 },
    { id: 992, code: "D2.1", title: "LEVEL 1 DEMOLITION PLAN", type: "D", page: 12, status: "completed", documentId: 7 },
    { id: 993, code: "G0.1", title: "GENERAL INFORMATION", type: "G", page: 11, status: "completed", documentId: 7 }
  ])
  const [sheetComparisons, setSheetComparisons] = useState<SheetComparison[]>([])
  const [diffResults] = useState<DiffResult[]>([])
  const [comparisonDiffs, setComparisonDiffs] = useState<ComparisonDiff[]>([])
  const [selectedChangeLog, setSelectedChangeLog] = useState<ComparisonDiff | null>(null)
  const [selectedDocumentCardId] = useState<number>(7)
  const [isLoading, setIsLoading] = useState(true)
  const [error] = useState<string | null>(null)
  const [activeSheetTab, setActiveSheetTab] = useState<string>("")

  // Initialize static data
  useEffect(() => {
    // Analyze sheets for comparisons using static data
    analyzeSheetComparisons(sheets, documents)
    
    // Initialize comparison diffs data
    const mockDiffs: ComparisonDiff[] = [
      {
        id: 999,
        title: "Level 1 Reflected Ceiling Plan",
        description: "Removed ceiling elements in main corridor and updated lighting layout. Added new fixture types and modified accessibility compliance features.",
        status: "review",
        hasAdditions: false,
        hasDeletions: true,
        currentSheet: sheets.find(s => s.code === "A2.2")!,
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
      },
      {
        id: 998,
        title: "Bedroom 1 Layout Modification",
        description: "Updated bedroom layout with new closet configuration and modified door swing. Window placement adjusted for better natural light distribution.",
        status: "review",
        hasAdditions: true,
        hasDeletions: true,
        originalSheet: sheets.find(s => s.code === "A2.1" && s.documentId === 6)!,
        currentSheet: sheets.find(s => s.code === "A2.1" && s.documentId === 7)!,
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
      },
      {
        id: 996,
        title: "Callout Change - Window Detail",
        description: "Updated window detail callouts with new specifications. Changed glazing requirements and frame materials to meet energy efficiency standards.",
        status: "review",
        hasAdditions: true,
        hasDeletions: false,
        originalSheet: sheets.find(s => s.code === "A6.2" && s.documentId === 6)!,
        currentSheet: sheets.find(s => s.code === "A6.2" && s.documentId === 7)!,
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
      },
      {
        id: 994,
        title: "Window Wall Assembly Update",
        description: "Revised window wall assembly details to include enhanced thermal performance requirements. Updated sealant specifications and installation methods.",
        status: "review",
        hasAdditions: true,
        hasDeletions: true,
        originalSheet: sheets.find(s => s.code === "A9.1" && s.documentId === 6)!,
        currentSheet: sheets.find(s => s.code === "A9.1" && s.documentId === 7)!,
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
    ];
    
    setComparisonDiffs(mockDiffs)
    setSelectedChangeLog(mockDiffs[0])
    setIsLoading(false)
  }, [])

  // Helper function to get original document
  const getOriginalDocument = () => {
    return documents.find(d => d.id === 6);
  };

  const analyzeSheetComparisons = (allSheets: Sheet[], allDocuments: Document[]) => {
    // Group sheets by sheet code
    const sheetsByCode: { [code: string]: Sheet[] } = {}
    
    allSheets.forEach(sheet => {
      if (!sheetsByCode[sheet.code]) {
        sheetsByCode[sheet.code] = []
      }
      sheetsByCode[sheet.code].push(sheet)
    })

    // Find sheet codes that appear in multiple documents
    const comparisons: SheetComparison[] = []
    
    Object.entries(sheetsByCode).forEach(([sheetCode, sheets]) => {
      if (sheets.length > 1) {
        // Check if sheets are from different documents
        const uniqueDocuments = [...new Set(sheets.map(s => s.documentId))]
        
        if (uniqueDocuments.length > 1) {
          const comparison: SheetComparison = {
            sheetCode,
            documents: uniqueDocuments.map(docId => {
              const sheet = sheets.find(s => s.documentId === docId)!
              const document = allDocuments.find(d => d.id === docId)!
              return {
                documentId: docId,
                documentTitle: document?.title || `Document ${docId}`,
                sheet
              }
            })
          }
          comparisons.push(comparison)
        }
      }
    })

    setSheetComparisons(comparisons)
    
    // Set default active tab to first sheet if available
    if (comparisons.length > 0 && !activeSheetTab) {
      setActiveSheetTab(comparisons[0].sheetCode)
    }
  }


  if (isLoading) {
    return (
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div>
            <h1 className="font-semibold">Version Control</h1>
            <p className="text-sm text-muted-foreground">Loading version comparison data...</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map(i => (
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
            <h1 className="font-semibold">Version Control</h1>
            <p className="text-sm text-muted-foreground">Error loading data</p>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Failed to load version control</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Retry
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
          <div>
            <h1 className="font-semibold flex items-center gap-2">
              <GitCompare className="h-5 w-5" />
              Version Control
            </h1>
            <p className="text-sm text-muted-foreground">
              Compare sheets across different document versions
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 p-6">
        {/* Document Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {documents.map((document) => (
            <Card key={document.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      {document.id === 6 ? 'West-Julia-Martin-Construction-Drawings.pdf' : 'Julia-Martin-West-Repairs-Addendum.pdf'}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {document.id === 6 ? 'Original construction drawings' : 'Updated repairs addendum'}
                    </CardDescription>
                  </div>
                  <Button 
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      const pdfPath = document.id === 6 
                        ? '/1754595816630-23-0741-West-Julia-Martin-Construction-Drawings.pdf'
                        : '/1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum.pdf'
                      window.open(pdfPath, '_blank')
                    }}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Side-by-Side PDF Viewer */}
        <div className="h-[70vh] border rounded-lg bg-gray-50">
          <div className="grid grid-cols-2 h-full">
            {/* Left PDF - Original */}
            <div className="border-r bg-white">
              <div className="h-12 border-b bg-red-50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-red-700">Original</span>
                  <span className="text-sm text-red-600">{getOriginalDocument()?.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div 
                className="h-[calc(100%-3rem)] bg-gray-100 flex items-center justify-center relative overflow-hidden"
                style={{ cursor: 'grab' }}
                onMouseDown={(e) => {
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
              >
                <img 
                  src={selectedChangeLog ? 
                    selectedChangeLog.id === 999 ? "/display_centre_1.png" :  // Ceiling plan uses centre view
                    selectedChangeLog.id === 998 ? "/display_left_2.png" :     // Bedroom uses display_left_2
                    selectedChangeLog.id === 996 ? "/display_left_3.png" :     // Callout uses display_left_3  
                    selectedChangeLog.id === 994 ? "/display_left_4.png" :     // Window uses display_left_4
                    "/OLD_1.png" 
                    : "/OLD_1.png"}
                  alt="Original PDF" 
                  className="max-w-full max-h-full object-contain cursor-move"
                  draggable={false}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/OLD_1.png";
                  }}
                />
              </div>
            </div>

            {/* Right PDF - Current */}
            <div className="bg-white">
              <div className="h-12 border-b bg-green-50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-green-700">Current</span>
                  <span className="text-sm text-green-600">{documents.find(d => d.id === selectedDocumentCardId)?.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div 
                className="h-[calc(100%-3rem)] bg-gray-100 flex items-center justify-center relative overflow-hidden"
                style={{ cursor: 'grab' }}
                onMouseDown={(e) => {
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
              >
                <img 
                  src={selectedChangeLog ? 
                    selectedChangeLog.id === 999 ? "/display_centre_1.png" :  // Ceiling plan uses centre view
                    selectedChangeLog.id === 998 ? "/display_right_2.png" :    // Bedroom uses display_right_2
                    selectedChangeLog.id === 996 ? "/display_right_3.png" :    // Callout uses display_right_3
                    selectedChangeLog.id === 994 ? "/display_right_4.png" :    // Window uses display_right_4
                    "/NEW_1.png" 
                    : "/NEW_1.png"}
                  alt="Current PDF" 
                  className="max-w-full max-h-full object-contain cursor-move"
                  draggable={false}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/NEW_1.png";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Change Logs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Change Logs</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {comparisonDiffs.filter(diff => diff.status === 'review').length} changes pending review
              </span>
            </div>
          </div>
          
          {/* Horizontal scrolling container */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {comparisonDiffs.filter(diff => diff.status === 'review').map((diff) => (
                <div 
                  key={diff.id}
                  className={`flex-shrink-0 w-80 border rounded-lg bg-white cursor-pointer transition-all hover:shadow-md ${
                    selectedChangeLog?.id === diff.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedChangeLog(diff)}
                >
                  {/* Log Header */}
                  <div className="p-4 border-b">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4" />
                          <span className="font-medium text-sm">
                            {diff.originalSheet ? 
                              `${diff.originalSheet.code} → ${diff.currentSheet.code}` : 
                              `NEW: ${diff.currentSheet.code}`
                            }
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {!diff.originalSheet && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                              NEW ADDITION
                            </Badge>
                          )}
                          {diff.hasAdditions && (
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              Additions
                            </Badge>
                          )}
                          {diff.hasDeletions && (
                            <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                              Deletions
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-medium text-sm mb-1 line-clamp-2">{diff.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-3">{diff.description}</p>
                  </div>

                  {/* Preview Image */}
                  <div className="p-4 pt-3">
                    {/* Ceiling Plan Preview */}
                    {diff.currentSheet.code === "A2.2" && (
                      <div className="aspect-[3/2] bg-gray-100 rounded overflow-hidden">
                        <img 
                          src="/removed_ceil.png" 
                          alt="Level 1 Reflected Ceiling Plan" 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    {/* Before/After Comparisons */}
                    {diff.originalSheet && (
                      <div className="grid grid-cols-2 gap-2 aspect-[3/1]">
                        <div className="bg-red-50 rounded overflow-hidden">
                          <div className="text-xs text-red-700 px-2 py-1 bg-red-100">Before</div>
                          <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <img 
                              src={diff.title?.includes("Bedroom 1") ? "/OLD_1.png" : 
                                   diff.title?.includes("Callout Change") ? "/old_2.png" :
                                   diff.title?.includes("Window Wall") ? "/old_3.png" : "/OLD_1.png"}
                              alt="Before" 
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        <div className="bg-green-50 rounded overflow-hidden">
                          <div className="text-xs text-green-700 px-2 py-1 bg-green-100">After</div>
                          <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            <img 
                              src={diff.title?.includes("Bedroom 1") ? "/NEW_1.png" : 
                                   diff.title?.includes("Callout Change") ? "/new_2.png" :
                                   diff.title?.includes("Window Wall") ? "/new_3.png" : "/NEW_1.png"}
                              alt="After" 
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Subcontractors */}
                  {diff.subcontractorsToNotify && diff.subcontractorsToNotify.length > 0 && (
                    <div className="px-4 pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-medium text-orange-700">Notify Contractors:</div>
                        <select 
                          className="text-xs border rounded px-2 py-1 bg-white"
                          onChange={(e) => {
                            if (e.target.value && !diff.subcontractorsToNotify?.some(s => s.trade === e.target.value)) {
                              const updatedDiffs = comparisonDiffs.map(d => 
                                d.id === diff.id ? { 
                                  ...d, 
                                  subcontractorsToNotify: [
                                    ...(d.subcontractorsToNotify || []),
                                    { trade: e.target.value, reason: "Review changes and update work accordingly." }
                                  ]
                                } : d
                              )
                              setComparisonDiffs(updatedDiffs)
                              e.target.value = ""
                            }
                          }}
                          defaultValue=""
                        >
                          <option value="">+ Add Contractor</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Framing/Drywall">Framing/Drywall</option>
                          <option value="Mechanical/HVAC">Mechanical/HVAC</option>
                          <option value="Fire Sprinkler">Fire Sprinkler</option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Glazing/Windows">Glazing/Windows</option>
                          <option value="Roofing">Roofing</option>
                          <option value="Casework">Casework</option>
                          <option value="Paint/Finishes">Paint/Finishes</option>
                          <option value="Low-Voltage/FA">Low-Voltage/FA</option>
                          <option value="Ceilings/Framing">Ceilings/Framing</option>
                          <option value="Envelope/Waterproofing">Envelope/Waterproofing</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        {diff.subcontractorsToNotify.map((notify, idx) => (
                          <div key={idx} className="group">
                            <div className="flex items-start gap-2 bg-orange-50 rounded border border-orange-200 p-2">
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium text-orange-800">{notify.trade}</span>
                                  <button
                                    onClick={() => {
                                      const updatedDiffs = comparisonDiffs.map(d => 
                                        d.id === diff.id ? { 
                                          ...d, 
                                          subcontractorsToNotify: d.subcontractorsToNotify?.filter((_, index) => index !== idx) || []
                                        } : d
                                      )
                                      setComparisonDiffs(updatedDiffs)
                                    }}
                                    className="text-orange-400 hover:text-red-600 transition-colors p-1 hover:bg-red-50 rounded"
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </div>
                                <div className="text-xs text-orange-700 mt-1">{notify.reason}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add contractors section if none exist */}
                  {(!diff.subcontractorsToNotify || diff.subcontractorsToNotify.length === 0) && (
                    <div className="px-4 pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-medium text-gray-600">Notify Contractors:</div>
                        <select 
                          className="text-xs border rounded px-2 py-1 bg-white"
                          onChange={(e) => {
                            if (e.target.value) {
                              const updatedDiffs = comparisonDiffs.map(d => 
                                d.id === diff.id ? { 
                                  ...d, 
                                  subcontractorsToNotify: [
                                    { trade: e.target.value, reason: "Review changes and update work accordingly." }
                                  ]
                                } : d
                              )
                              setComparisonDiffs(updatedDiffs)
                              e.target.value = ""
                            }
                          }}
                          defaultValue=""
                        >
                          <option value="">+ Add Contractor</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Framing/Drywall">Framing/Drywall</option>
                          <option value="Mechanical/HVAC">Mechanical/HVAC</option>
                          <option value="Fire Sprinkler">Fire Sprinkler</option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Glazing/Windows">Glazing/Windows</option>
                          <option value="Roofing">Roofing</option>
                          <option value="Casework">Casework</option>
                          <option value="Paint/Finishes">Paint/Finishes</option>
                          <option value="Low-Voltage/FA">Low-Voltage/FA</option>
                          <option value="Ceilings/Framing">Ceilings/Framing</option>
                          <option value="Envelope/Waterproofing">Envelope/Waterproofing</option>
                        </select>
                      </div>
                      <div className="text-xs text-gray-500 italic">No contractors assigned yet</div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {/* <div className="p-4 pt-0 flex gap-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-xs">
                      ✅ Accept
                    </Button>
                    <Button size="sm" variant="destructive" className="flex-1 text-xs">
                      ❌ Remove
                    </Button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}