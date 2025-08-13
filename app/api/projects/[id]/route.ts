import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

const { initializeDatabase } = require('../../../../scripts/init-db')

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Initialize database if empty
    const projectCount = await prisma.project.count()
    if (projectCount === 0) {
      await initializeDatabase()
    }
    
    const projectId = parseInt(params.id)
    
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        documents: true
      }
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }
    
    return NextResponse.json({
      id: project.id,
      name: project.name,
      date: project.date.toISOString().split('T')[0],
      documents: project.documents
    })
    
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
