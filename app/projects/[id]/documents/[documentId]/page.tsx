"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, FileText, AlertCircle } from "lucide-react"
import Link from "next/link"

interface Document {
  id: number
  filename: string
  originalFilename: string
  uploadedAt: string
  fileSize: number
  projectId: number
}

export default function DocumentViewerPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const documentId = params.documentId as string
  
  const [document, setDocument] = useState<Document | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  useEffect(() => {
    if (projectId && documentId) {
      fetchDocument()
    }
  }, [projectId, documentId])

  const fetchDocument = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch document details
      const response = await fetch(`/api/documents?projectId=${projectId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch documents')
      }
      
      const data = await response.json()
      const doc = data.documents.find((d: Document) => d.id === parseInt(documentId))
      
      if (!doc) {
        throw new Error('Document not found')
      }
      
      setDocument(doc)
      // Set the PDF URL to serve from backend
      setPdfUrl(`/api/documents/${doc.filename}/view`)
      
    } catch (err) {
      console.error('Error fetching document:', err)
      setError(err instanceof Error ? err.message : 'Failed to load document')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (document) {
      window.open(`/api/documents/${document.filename}`, '_blank')
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

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
          <Link href={`/projects/${projectId}/documents`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Documents
            </Button>
          </Link>
          <div>
            <h1 className="font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {document ? document.originalFilename : 'Document Viewer'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {document && `${formatFileSize(document.fileSize)} • Uploaded ${formatDate(document.uploadedAt)}`}
            </p>
          </div>
        </div>
        {document && (
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        )}
      </header>

      <div className="flex flex-1 flex-col">
        {loading ? (
          <div className="flex items-center justify-center flex-1">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-medium mb-2">Error Loading Document</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={fetchDocument} variant="outline">
              Try Again
            </Button>
          </div>
        ) : pdfUrl ? (
          <div className="flex-1 w-full h-full">
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title={document?.originalFilename || 'Document'}
              style={{ minHeight: 'calc(100vh - 64px)' }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <FileText className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">No Document Found</h3>
            <p className="text-muted-foreground">
              The requested document could not be loaded.
            </p>
          </div>
        )}
      </div>
    </SidebarInset>
  )
}
