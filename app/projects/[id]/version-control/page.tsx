"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, GitCompare, FileText, AlertCircle, Download, Eye, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

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

export default function VersionControlPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const [project, setProject] = useState<Project | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [sheets, setSheets] = useState<Sheet[]>([])
  const [sheetComparisons, setSheetComparisons] = useState<SheetComparison[]>([])
  const [diffResults, setDiffResults] = useState<DiffResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [processingDiffs, setProcessingDiffs] = useState(false)
  const [activeSheetTab, setActiveSheetTab] = useState<string>("")

  // Fetch project, documents, and sheets data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        
        // Fetch project details
        const projectResponse = await fetch(`/api/projects/${projectId}`)
        if (!projectResponse.ok) {
          throw new Error('Failed to fetch project')
        }
        const projectData = await projectResponse.json()
        setProject(projectData)

        // Fetch documents
        const documentsResponse = await fetch(`/api/documents?projectId=${projectId}`)
        if (!documentsResponse.ok) {
          throw new Error('Failed to fetch documents')
        }
        const documentsData = await documentsResponse.json()
        const fetchedDocuments = documentsData.documents || []
        setDocuments(fetchedDocuments)

        // Fetch sheets
        const sheetsResponse = await fetch(`/api/sheets?projectId=${projectId}`)
        if (!sheetsResponse.ok) {
          throw new Error('Failed to fetch sheets')
        }
        const sheetsData = await sheetsResponse.json()
        const fetchedSheets = sheetsData.sheets || []
        setSheets(fetchedSheets)

        // Analyze sheets for comparisons
        analyzeSheetComparisons(fetchedSheets, fetchedDocuments)

        setError(null)
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load version control data')
      } finally {
        setIsLoading(false)
      }
    }

    if (projectId) {
      fetchData()
    }
  }, [projectId])

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

  const processDifferences = async () => {
    if (sheetComparisons.length === 0) return

    setProcessingDiffs(true)
    const results: DiffResult[] = []

    try {
      for (const comparison of sheetComparisons) {
        // For each comparison, process all possible pairs
        for (let i = 0; i < comparison.documents.length; i++) {
          for (let j = i + 1; j < comparison.documents.length; j++) {
            const doc1 = comparison.documents[i]
            const doc2 = comparison.documents[j]

            // Call the backend API to process diff
            const diffResponse = await fetch('http://localhost:8080/api/sheet-diff', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                projectId,
                sheetCode: comparison.sheetCode,
                sheet1Id: doc1.sheet.id,
                sheet2Id: doc2.sheet.id,
                document1Id: doc1.documentId,
                document2Id: doc2.documentId
              })
            })

            if (diffResponse.ok) {
              const diffData = await diffResponse.json()
              results.push({
                sheetCode: comparison.sheetCode,
                document1: { id: doc1.documentId, title: doc1.documentTitle },
                document2: { id: doc2.documentId, title: doc2.documentTitle },
                adds: diffData.adds || 0,
                deletes: diffData.deletes || 0,
                moves: diffData.moves || 0,
                diffImagePath: diffData.diffImagePath,
                processed: true
              })
            } else {
              results.push({
                sheetCode: comparison.sheetCode,
                document1: { id: doc1.documentId, title: doc1.documentTitle },
                document2: { id: doc2.documentId, title: doc2.documentTitle },
                adds: 0,
                deletes: 0,
                moves: 0,
                processed: false
              })
            }
          }
        }
      }

      setDiffResults(results)
    } catch (error) {
      console.error('Error processing differences:', error)
      setError('Failed to process sheet differences')
    } finally {
      setProcessingDiffs(false)
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
            <Button onClick={() => router.push(`/projects/${projectId}`)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Project
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
          <Link href={`/projects/${projectId}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
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
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{documents.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Sheets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sheets.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Comparable Sheets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{sheetComparisons.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* No Comparisons Available */}
        {sheetComparisons.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <GitCompare className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">No Version Comparisons Available</h3>
            <p className="text-muted-foreground text-center max-w-md">
              Version comparison requires sheets with the same code across different documents. 
              Upload multiple document versions to see comparisons here.
            </p>
          </div>
        ) : (
          <>
            {/* Tabbed Sheet Comparisons */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Sheet Comparisons</h2>
                <p className="text-sm text-gray-600">
                  {sheetComparisons.length} sheet{sheetComparisons.length !== 1 ? 's' : ''} with differences
                </p>
              </div>

              <Tabs value={activeSheetTab} onValueChange={setActiveSheetTab} className="w-full">
                <div className="relative">
                  <div className="overflow-x-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
                    <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground w-max">
                      {sheetComparisons.map((comparison) => (
                        <TabsTrigger 
                          key={comparison.sheetCode} 
                          value={comparison.sheetCode} 
                          className="flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm rounded-sm"
                        >
                          <FileText className="h-4 w-4 flex-shrink-0" />
                          <span className="flex-shrink-0">{comparison.sheetCode}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  {/* Scroll indicators */}
                  <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none opacity-50"></div>
                </div>
                
                {sheetComparisons.map((comparison) => (
                  <TabsContent key={comparison.sheetCode} value={comparison.sheetCode} className="space-y-6">
                    {/* Sheet Info Header */}
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Sheet: {comparison.sheetCode} - {comparison.documents[0]?.sheet.title || 'No title'}
                          </CardTitle>
                        </div>
                      </CardHeader>
                    </Card>

                    {/* Side-by-Side Document Comparison */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <GitCompare className="h-5 w-5" />
                          Visual Comparison
                        </CardTitle>
                        <CardDescription>
                          Side-by-side view of sheet differences
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 h-[70vh]">
                          {/* Left Document */}
                          <div className="border rounded-lg bg-white overflow-hidden">
                            <div className="h-12 border-b bg-red-50 flex items-center justify-between px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <span className="font-medium text-red-700">Original</span>
                                <span className="text-sm text-red-600">{comparison.documents[0]?.documentTitle}</span>
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
                            <div className="h-[calc(100%-3rem)] bg-gray-100 flex items-center justify-center">
                              <div className="text-center text-gray-500">
                                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Sheet Preview</p>
                                <p className="text-xs">{comparison.sheetCode} - {comparison.documents[0]?.sheet.title}</p>
                              </div>
                            </div>
                          </div>

                          {/* Right Document */}
                          <div className="border rounded-lg bg-white overflow-hidden">
                            <div className="h-12 border-b bg-green-50 flex items-center justify-between px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="font-medium text-green-700">Current</span>
                                <span className="text-sm text-green-600">{comparison.documents[1]?.documentTitle}</span>
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
                            <div className="h-[calc(100%-3rem)] bg-gray-100 flex items-center justify-center">
                              <div className="text-center text-gray-500">
                                <FileText className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Sheet Preview</p>
                                <p className="text-xs">{comparison.sheetCode} - {comparison.documents[1]?.sheet.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Differences Summary */}
                    {diffResults.filter(result => result.sheetCode === comparison.sheetCode).map((result, idx) => (
                      <Card key={idx}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Detected Differences</CardTitle>
                            {result.processed && result.diffImagePath && (
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => window.open(`http://localhost:8080${result.diffImagePath}`, '_blank')}>
                                  <Eye className="h-3 w-3 mr-1" />
                                  View Overlay
                                </Button>
                                <Button size="sm" variant="outline" asChild>
                                  <a href={`http://localhost:8080${result.diffImagePath}`} download={`${result.sheetCode}_diff.svg`}>
                                    <Download className="h-3 w-3 mr-1" />
                                    Download
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                          <CardDescription>
                            {result.document1.title} → {result.document2.title}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {result.processed ? (
                            <div className="space-y-4">
                              <div className="grid grid-cols-3 gap-4">
                                <Card className="border-green-200">
                                  <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-green-600">{result.adds}</div>
                                    <div className="text-sm text-green-700">Additions</div>
                                  </CardContent>
                                </Card>
                                <Card className="border-red-200">
                                  <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-red-600">{result.deletes}</div>
                                    <div className="text-sm text-red-700">Deletions</div>
                                  </CardContent>
                                </Card>
                                <Card className="border-blue-200">
                                  <CardContent className="p-4 text-center">
                                    <div className="text-2xl font-bold text-blue-600">{result.moves}</div>
                                    <div className="text-sm text-blue-700">Moves</div>
                                  </CardContent>
                                </Card>
                              </div>
                              
                              {/* Visual diff overlay preview */}
                              {result.diffImagePath && (
                                <div className="space-y-2">
                                  <div className="text-sm font-medium">Difference Overlay:</div>
                                  <div 
                                    className="border rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-md transition-shadow"
                                    onClick={() => window.open(`http://localhost:8080${result.diffImagePath}`, '_blank')}
                                  >
                                    <div className="aspect-[3/2] max-h-60 bg-gray-100 flex items-center justify-center relative">
                                      <iframe
                                        src={`http://localhost:8080${result.diffImagePath}`}
                                        className="w-full h-full border-none"
                                        style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: '250%', height: '250%' }}
                                      />
                                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-5 transition-colors flex items-center justify-center">
                                        <div className="bg-white bg-opacity-90 px-3 py-2 rounded text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
                                          Click to view full size
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Legend */}
                                  <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded border">
                                    <strong>Legend:</strong> 
                                    <span className="text-green-600 ml-3">🟢 Added elements</span>
                                    <span className="text-red-600 ml-3">🔴 Deleted elements</span>
                                    <span className="text-blue-600 ml-3">🔵 Moved elements</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <AlertCircle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <div className="text-sm text-gray-500">
                                Differences analysis not yet processed
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}

                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </>
        )}
      </div>
    </SidebarInset>
  )
}