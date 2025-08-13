"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Download, Eye, Calendar, Upload, File as FileIcon, GitCompare, AlertTriangle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

interface Document {
  id: number
  filename: string
  originalFilename: string
  uploadedAt: string
  fileSize: number
  projectId: number
  category?: string
  subcategory?: string
  title?: string
}

interface Project {
  id: number
  name: string
  date: string
}

export default function DocumentsPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  
  const [documents, setDocuments] = useState<Document[]>([])
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (projectId) {
      fetchDocuments()
      fetchProject()
    }
  }, [projectId])

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/projects?id=${projectId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch project')
      }
      const data = await response.json()
      setProject(data[0]) // API returns array
    } catch (err) {
      console.error('Error fetching project:', err)
    }
  }

  const fetchDocuments = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`/api/documents?projectId=${projectId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch documents')
      }
      
      const data = await response.json()
      setDocuments(data.documents || [])
    } catch (err) {
      console.error('Error fetching documents:', err)
      setError('Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (document: Document) => {
    // Open the document in a new tab for download
    window.open(`/api/documents/${document.filename}`, '_blank')
  }

  const handleView = (document: Document) => {
    // Navigate to the document viewer
    router.push(`/projects/${projectId}/documents/${document.id}`)
  }

  const handleCategoryUpdate = async (documentId: number, category: string) => {
    try {
      const response = await fetch(`/api/documents/${documentId}/category`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      })

      if (!response.ok) {
        throw new Error('Failed to update category')
      }

      // Refresh the documents list to show the updated category
      await fetchDocuments()
    } catch (error) {
      console.error('Error updating document category:', error)
      setError('Failed to update document category')
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Group documents by category
  const groupDocumentsByCategory = () => {
    const grouped: { [key: string]: Document[] } = {}
    
    documents.forEach(doc => {
      const category = doc.category || 'Uncategorized'
      
      if (!grouped[category]) {
        grouped[category] = []
      }
      
      grouped[category].push(doc)
    })
    
    return grouped
  }

  const groupedDocuments = groupDocumentsByCategory()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
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
              Back to Project
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold flex items-center gap-2">
              <FileIcon className="h-5 w-5" />
              Documents
            </h1>
            <p className="text-sm text-muted-foreground">
              {project ? `${project.name} - ` : ''}Uploaded Files
            </p>
          </div>
        </div>
        <Link href="/projects">
          <Button variant="outline" size="sm">
            All Projects
          </Button>
        </Link>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Error Loading Documents</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={fetchDocuments} variant="outline">
              Try Again
            </Button>
          </div>
        ) : documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">No Documents Found</h3>
            <p className="text-muted-foreground mb-4">
              This project doesn't have any uploaded documents yet.
            </p>
            <Link href={`/projects/${projectId}`}>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Documents
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Documents ({documents.length})
              </h2>
              <Link href={`/projects/${projectId}`}>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload More
                </Button>
              </Link>
            </div>

            {/* Categorized Documents */}
            {Object.keys(groupedDocuments).map(category => (
              <div key={category} className="space-y-4">
                <div className="border-b pb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-600">{category}</h3>
                  <div className="flex gap-2">
                    {category === 'Addendum' && (
                      <Link href={`/projects/${projectId}/addendum-diff`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <GitCompare className="h-4 w-4" />
                          See Diff
                        </Button>
                      </Link>
                    )}
                    {(category === 'Bulletins #1' || category === 'Bulletins #2') && (
                      <Link href={`/projects/${projectId}/bulletin-diff/${category.replace('Bulletins #', '')}`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <GitCompare className="h-4 w-4" />
                          View Diff
                        </Button>
                      </Link>
                    )}
                    {category === 'Bulletins #2' && (
                      <Link href={`/projects/${projectId}/bulletin-problems`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 ml-2">
                          <AlertTriangle className="h-4 w-4" />
                          View Problems
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groupedDocuments[category].map((document) => (
                    <Card key={document.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-base font-medium truncate" title={document.title || document.originalFilename}>
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-red-500 flex-shrink-0" />
                                    <span className="truncate">{document.title || document.originalFilename}</span>
                                  </div>
                                </CardTitle>
                                <CardDescription className="mt-1">
                                  <div className="flex items-center gap-1 text-xs">
                                    <Calendar className="h-3 w-3" />
                                    {formatDate(document.uploadedAt)}
                                  </div>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="pt-0">
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">File Size:</span>
                                <Badge variant="secondary" className="text-xs">
                                  {formatFileSize(document.fileSize)}
                                </Badge>
                              </div>
                              
                              <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Category:</label>
                                <Select
                                  value={document.category || "Uncategorized"}
                                  onValueChange={(value) => handleCategoryUpdate(document.id, value)}
                                >
                                  <SelectTrigger className="w-full h-8 text-xs">
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Uncategorized">Uncategorized</SelectItem>
                                    <SelectItem value="IFC">IFC</SelectItem>
                                    <SelectItem value="Bulletin/ASI/CCD">Bulletin/ASI/CCD</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleView(document)}
                                  className="flex-1"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  View
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDownload(document)}
                                  className="flex-1"
                                >
                                  <Download className="h-3 w-3 mr-1" />
                                  Download
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </SidebarInset>
  )
}
