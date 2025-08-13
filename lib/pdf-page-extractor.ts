import { PDFDocument } from 'pdf-lib'

export async function extractSelectedPages(fileData: string, selectedPages: number[]): Promise<Buffer> {
  try {
    const base64Data = fileData.replace(/^data:application\/pdf;base64,/, '')
    const originalPdfBuffer = Buffer.from(base64Data, 'base64')
    
    const originalPdf = await PDFDocument.load(originalPdfBuffer)
    const newPdf = await PDFDocument.create()
    
    for (const pageIndex of selectedPages) {
      if (pageIndex >= 0 && pageIndex < originalPdf.getPageCount()) {
        const [copiedPage] = await newPdf.copyPages(originalPdf, [pageIndex])
        newPdf.addPage(copiedPage)
      }
    }
    
    const newPdfBytes = await newPdf.save()
    return Buffer.from(newPdfBytes)
  } catch (error) {
    console.error('Error extracting PDF pages:', error)
    throw error
  }
}

// Utility function to validate page numbers
export function validatePageNumbers(pageNumbers: number[], totalPages: number): number[] {
  return pageNumbers.filter(pageNum => pageNum >= 0 && pageNum < totalPages)
}

// Utility function to convert 1-based page numbers to 0-based
export function convertToZeroBased(pageNumbers: number[]): number[] {
  return pageNumbers.map(pageNum => pageNum - 1)
}

// Utility function to convert 0-based page numbers to 1-based
export function convertToOneBased(pageNumbers: number[]): number[] {
  return pageNumbers.map(pageNum => pageNum + 1)
}
