import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

const { initializeDatabase } = require('../../../scripts/init-db')

export async function GET(request: NextRequest) {
  try {
    // Initialize database if empty
    const projectCount = await prisma.project.count()
    if (projectCount === 0) {
      await initializeDatabase()
    }
    
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
