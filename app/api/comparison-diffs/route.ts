import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get('projectId')
    const status = searchParams.get('status') || 'review'
    
    let diffs
    
    if (projectId) {
      // Get diffs for a specific project
      diffs = await prisma.comparisonDiff.findMany({
        where: {
          status: status,
          originalSheet: {
            document: {
              projectId: parseInt(projectId)
            }
          }
        },
        include: {
          originalSheet: {
            include: {
              document: true
            }
          },
          currentSheet: {
            include: {
              document: true
            }
          },
          subContractor: true
        }
      })
    } else {
      // Get all diffs
      diffs = await prisma.comparisonDiff.findMany({
        where: {
          status: status
        },
        include: {
          originalSheet: {
            include: {
              document: true
            }
          },
          currentSheet: {
            include: {
              document: true
            }
          },
          subContractor: true
        }
      })
    }
    
    return NextResponse.json({ diffs })
    
  } catch (error) {
    console.error('Error fetching comparison diffs:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const diff = await prisma.comparisonDiff.create({
      data: {
        originalSheetId: data.originalSheetId,
        currentSheetId: data.currentSheetId,
        hasAdditions: data.hasAdditions || false,
        hasDeletions: data.hasDeletions || false,
        originalBbox: data.originalBbox,
        currentBbox: data.currentBbox,
        title: data.title,
        description: data.description,
        status: data.status || 'review',
        subContractorId: data.subContractorId
      },
      include: {
        originalSheet: {
          include: {
            document: true
          }
        },
        currentSheet: {
          include: {
            document: true
          }
        },
        subContractor: true
      }
    })
    
    return NextResponse.json({ diff })
    
  } catch (error) {
    console.error('Error creating comparison diff:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}