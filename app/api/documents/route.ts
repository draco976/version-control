import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')
    
    const whereClause = projectId ? { projectId: parseInt(projectId) } : {}
    
    const documents = await prisma.document.findMany({
      where: whereClause,
      include: {
        sheets: true
      }
    })
    
    return NextResponse.json({ 
      documents: documents.map(doc => ({
        id: doc.id,
        title: doc.title,
        originalFilename: doc.title, // Use title as filename fallback
        path: doc.path,
        projectId: doc.projectId,
        category: doc.category,
        type: doc.type
      }))
    })
    
  } catch (error) {
    console.error('Error fetching documents:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
