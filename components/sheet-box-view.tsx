'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Building2, FileText, Search, X } from 'lucide-react'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

const PDFSVGEditor = dynamic(() => import('./pdf-viewer-component/pdf-svg-editor'), {
  ssr: false,
  loading: () => null
})

interface Sheet {
  index: number
  code: string
  name: string
  section: string
}

interface ZoomConfig {
  scale: number;
  x: number;
  y: number;
}

export default function SheetBoxView({ projectId }: { projectId: string }) {
  const [sheets, setSheets] = useState<Sheet[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSheets, setFilteredSheets] = useState<Sheet[]>([])
  const [selectedSheetIndex, setSelectedSheetIndex] = useState<number | null>(null)
  const [isSVGEditorOpen, setIsSVGEditorOpen] = useState(false)
  const [navigationStack, setNavigationStack] = useState<Array<{index: number, code: string, zoomConfig?: ZoomConfig | undefined}>>([])
  const [targetBoundingBox, setTargetBoundingBox] = useState<any>(null)
  const [restoreZoomConfig, setRestoreZoomConfig] = useState<ZoomConfig | undefined>(undefined)
  const [currentZoomConfig, setCurrentZoomConfig] = useState<ZoomConfig | undefined>(undefined)

  // Load sheets data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('/sheet.json')
        
        if (!response.ok) {
          throw new Error('Failed to load data')
        }
        
        const sheetsData = await response.json()
        setSheets(sheetsData)
      } catch (error) {
        console.error('Error loading data:', error)
        toast.error('Failed to load sheet data')
      } finally {
        setIsLoading(false)
      }
    }
    
    loadData()
  }, [])

  // Filter sheets based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSheets(sheets)
      return
    }
    
    const filtered = sheets.filter(sheet => 
      sheet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sheet.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredSheets(filtered)
  }, [searchTerm, sheets])

  // Initially set filtered sheets to all sheets
  useEffect(() => {
    setFilteredSheets(sheets)
  }, [sheets])

  // Handle zoom configuration change
  const handleZoomConfigChange = useCallback((zoomConfig: ZoomConfig) => {
    setCurrentZoomConfig(zoomConfig)
  }, [])

  // Handle navigation to another sheet
  const handleNavigateToSheet = (sheetIndex: number, boundingBox?: any) => {
    // Find current and target sheet data
    const currentSheet = sheets.find(s => s.index === selectedSheetIndex)
    const targetSheet = sheets.find(s => s.index === sheetIndex)
    
    // Store the target bounding box for zoom
    setTargetBoundingBox(boundingBox || null)
    setRestoreZoomConfig(undefined) // Clear any pending zoom restore
    
    // Add current sheet to navigation stack with code and current zoom config
    if (currentSheet && selectedSheetIndex !== null) {
      setNavigationStack(prev => [...prev, { 
        index: selectedSheetIndex, 
        code: currentSheet.code,
        zoomConfig: currentZoomConfig 
      }])
    }
    
    // Reset current zoom config for new sheet
    setCurrentZoomConfig(undefined)
    
    // Navigate to new sheet
    setSelectedSheetIndex(sheetIndex)
  }

  // Handle going back in navigation
  const handleGoBack = () => {
    if (navigationStack.length > 0) {
      const previousSheet = navigationStack[navigationStack.length - 1]
      setNavigationStack(prev => prev.slice(0, -1))
      setSelectedSheetIndex(previousSheet.index)
      setTargetBoundingBox(null) // Clear target bounding box when going back
      
      // Restore the previous zoom config if available
      if (previousSheet.zoomConfig) {
        setRestoreZoomConfig(previousSheet.zoomConfig)
      } else {
        setRestoreZoomConfig(undefined)
      }
    } else {
      setIsSVGEditorOpen(false)
    }
  }

  // Handle breadcrumb navigation
  const handleNavigateToBreadcrumb = (targetIndex: number) => {
    // Find the position in the navigation stack
    const stackIndex = navigationStack.findIndex(item => item.index === targetIndex)
    
    if (stackIndex >= 0) {
      const targetSheet = navigationStack[stackIndex]
      
      // Remove everything after this position
      setNavigationStack(prev => prev.slice(0, stackIndex))
      setSelectedSheetIndex(targetIndex)
      setTargetBoundingBox(null) // Clear target bounding box when navigating via breadcrumb
      
      // Restore the zoom config for the target sheet if available
      if (targetSheet.zoomConfig) {
        setRestoreZoomConfig(targetSheet.zoomConfig)
      } else {
        setRestoreZoomConfig(undefined)
      }
    }
  }

  // Generate sheet data based on selected sheet index
  const getSelectedSheetData = () => {
    if (selectedSheetIndex === null) return undefined
    
    const sheet = sheets.find(s => s.index === selectedSheetIndex)
    return {
      index: selectedSheetIndex,
      title: sheet ? `${sheet.code} - ${sheet.name}` : `Sheet ${String(selectedSheetIndex).padStart(3, '0')}`
    }
  }

  // Get section color for badges
  const getSectionColor = (section: string) => {
    switch (section.toLowerCase()) {
      case 'architectural':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'structural':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'kitchen':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case '0':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Get section icon
  const getSectionIcon = (section: string) => {
    switch (section.toLowerCase()) {
      case 'architectural':
        return <Building2 className="h-4 w-4" />
      case 'structural':
        return <Building2 className="h-4 w-4" />
      case 'kitchen':
        return <Building2 className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  // Handle sheet click
  const handleSheetClick = (sheet: Sheet) => {
    setSelectedSheetIndex(sheet.index)
    setNavigationStack([]) // Reset navigation stack when opening a new sheet
    setIsSVGEditorOpen(true)
  }

  if (isLoading) {
    return (
      <Card className="w-full h-96">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading sheets...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search sheets by name or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-sm"
          />
          {searchTerm && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSearchTerm('')}
              className="p-1 h-6 w-6"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Sheet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSheets.map((sheet) => (
          <Card 
            key={sheet.index}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg"
            onClick={() => handleSheetClick(sheet)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">
                  {sheet.code}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className={`text-xs px-2 py-1 ${getSectionColor(sheet.section)}`}
                >
                  <span className="flex items-center gap-1">
                    {getSectionIcon(sheet.section)}
                    {sheet.section === '0' ? 'Title' : sheet.section}
                  </span>
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <h3 className="font-semibold text-sm text-gray-800 mb-1">
                {sheet.name}
              </h3>
              <p className="text-xs text-gray-600">
                Index: {sheet.index}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredSheets.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">No sheets found matching "{searchTerm}"</p>
        </div>
      )}

      {/* PDF SVG Editor */}
      {selectedSheetIndex !== null && (
        <PDFSVGEditor
          key={selectedSheetIndex}
          isOpen={isSVGEditorOpen}
          onClose={() => setIsSVGEditorOpen(false)}
          pdfPath={`/sheets/page_${selectedSheetIndex.toString().padStart(3, '0')}.pdf`}
          sheetData={getSelectedSheetData()}
          onNavigateToSheet={handleNavigateToSheet}
          navigationStack={navigationStack}
          onNavigateToBreadcrumb={handleNavigateToBreadcrumb}
          onGoBack={handleGoBack}
          targetBoundingBox={targetBoundingBox}
          restoreZoomConfig={restoreZoomConfig}
          onZoomConfigChange={handleZoomConfigChange}
        />
      )}
    </div>
  )
}
