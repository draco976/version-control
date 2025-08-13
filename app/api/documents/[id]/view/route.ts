import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const documentId = params.id
    
    // This is a mock implementation - you'll need to replace this with your actual database query
    // For now, let's map document IDs to actual files in the documents folder
    const documentMap: { [key: string]: string } = {
      '6': '1754595816630-23-0741-West-Julia-Martin-Construction-Drawings.pdf',
      '7': '1754595866429-23-0741-Julia-Martin-West-Repairs-Addendum.pdf',
      // Add more mappings as needed
    }
    
    const filename = documentMap[documentId]
    if (!filename) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }
    
    const documentsPath = path.join(process.cwd(), 'documents')
    const filePath = path.join(documentsPath, filename)
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
    
    const fileBuffer = fs.readFileSync(filePath)
    const fileExtension = path.extname(filename).toLowerCase()
    
    let contentType = 'application/octet-stream'
    if (fileExtension === '.pdf') {
      contentType = 'application/pdf'
    } else if (fileExtension === '.png') {
      contentType = 'image/png'
    } else if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
      contentType = 'image/jpeg'
    }
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': 'inline',
      },
    })
    
  } catch (error) {
    console.error('Error serving document:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
