import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const documentId = params.id
    const { category } = await request.json()
    
    // This is a mock implementation
    // In a real app, you would update the database here
    console.log(`Updating document ${documentId} category to: ${category}`)
    
    // For now, just return success
    return NextResponse.json({ 
      success: true, 
      documentId, 
      category 
    })
    
  } catch (error) {
    console.error('Error updating document category:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
