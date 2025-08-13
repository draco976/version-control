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
    
    let sheets
    
    if (projectId) {
      // Get sheets for a specific project
      sheets = await prisma.sheet.findMany({
        where: {
          document: {
            projectId: parseInt(projectId)
          }
        },
        include: {
          document: true
        }
      })
    } else {
      // Get all sheets
      sheets = await prisma.sheet.findMany({
        include: {
          document: true
        }
      })
    }
    
    return NextResponse.json({ 
      sheets: sheets.map(sheet => ({
        id: sheet.id,
        code: sheet.code,
        title: sheet.title,
        type: sheet.type,
        page: sheet.page,
        status: sheet.status,
        documentId: sheet.documentId,
        svgPath: sheet.svgPath
      }))
    })
    
  } catch (error) {
    console.error('Error fetching sheets:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
