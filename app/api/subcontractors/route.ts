import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET(request: NextRequest) {
  try {
    const subcontractors = await prisma.subContractor.findMany({
      include: {
        comparisonDiffs: true
      }
    })
    
    return NextResponse.json({ subcontractors })
    
  } catch (error) {
    console.error('Error fetching subcontractors:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const subcontractor = await prisma.subContractor.create({
      data: {
        name: data.name,
        tradeName: data.tradeName
      }
    })
    
    return NextResponse.json({ subcontractor })
    
  } catch (error) {
    console.error('Error creating subcontractor:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}