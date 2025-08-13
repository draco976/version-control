import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: NextRequest) {
  try {
    const projects = await prisma.project.findMany({
      include: {
        documents: {
          include: {
            sheets: true
          }
        }
      }
    })
    
    return NextResponse.json({ 
      projects: projects.map(project => ({
        id: project.id,
        name: project.name,
        date: project.date.toISOString().split('T')[0],
        documentCount: project.documents.length,
        sheetCount: project.documents.reduce((total, doc) => total + doc.sheets.length, 0)
      }))
    })
    
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const project = await prisma.project.create({
      data: {
        name: data.name,
        date: new Date()
      }
    })
    
    return NextResponse.json({ project })
    
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}