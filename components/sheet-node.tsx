'use client'

import React, { memo, useState } from 'react'
import { Handle, Position, NodeProps } from 'reactflow'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Users, Building2, X, Plus, Search } from 'lucide-react'
import dynamic from 'next/dynamic'

const PDFSVGEditor = dynamic(() => import('./pdf-viewer-component/pdf-svg-editor'), {
  ssr: false,
  loading: () => null
})

interface SheetNodeData {
  index: number
  code: string
  name: string
  section: string
  childrenCount: number
  level: number
  sheets?: Array<{
    index: number
    code: string
    name: string
    section: string
  }>
}

interface ZoomConfig {
  scale: number;
  x: number;
  y: number;
}

export const SheetNode = memo(({ data, selected }: NodeProps<SheetNodeData>) => {
  const [isSVGEditorOpen, setIsSVGEditorOpen] = useState(false)
  const [currentSheetIndex, setCurrentSheetIndex] = useState(data.index)
  const [navigationStack, setNavigationStack] = useState<Array<{index: number, code: string, zoomConfig?: ZoomConfig}>>([]) // Track navigation history with codes and zoom
  const [allSheets, setAllSheets] = useState<any[]>([]) // Store all sheet data
  const [targetBoundingBox, setTargetBoundingBox] = useState<any>(null) // Store target bounding box for zoom
  const [restoreZoomConfig, setRestoreZoomConfig] = useState<ZoomConfig | null>(null) // Zoom config to restore

  // Load all sheets data on component mount
  React.useEffect(() => {
    const loadSheets = async () => {
      try {
        const response = await fetch('/sheet.json')
        if (response.ok) {
          const sheets = await response.json()
          setAllSheets(sheets)
        }
      } catch (error) {
        console.error('Error loading sheets:', error)
      }
    }
    loadSheets()
  }, [])

  // Clear target bounding box after it's been used for initial zoom
  React.useEffect(() => {
    if (targetBoundingBox) {
      // Clear the target bounding box after a short delay to allow the PDF editor to use it
      const timeout = setTimeout(() => {
        setTargetBoundingBox(null)
      }, 2000) // 2 second delay - increased to give more time
      
      return () => clearTimeout(timeout)
    }
  }, [targetBoundingBox])

  // Clear restore zoom config after it's been used
  React.useEffect(() => {
    if (restoreZoomConfig) {
      const timeout = setTimeout(() => {
        setRestoreZoomConfig(null)
      }, 1000) // 1 second delay
      
      return () => clearTimeout(timeout)
    }
  }, [restoreZoomConfig])
  
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

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentSheetIndex(data.index) // Reset to original sheet
    setNavigationStack([]) // Reset navigation stack when opening
    setIsSVGEditorOpen(true)
  }

  // Store current zoom config for the current sheet
  const [currentZoomConfig, setCurrentZoomConfig] = React.useState<ZoomConfig | null>(null)

  // Function to receive current zoom config from PDFSVGEditor
  const handleZoomConfigChange = React.useCallback((zoomConfig: ZoomConfig) => {
    setCurrentZoomConfig(zoomConfig)
  }, [])

  const handleNavigateToSheet = (sheetIndex: number, boundingBox?: any) => {
    // Find current and target sheet data
    const currentSheet = allSheets.find(s => s.index === currentSheetIndex)
    const targetSheet = allSheets.find(s => s.index === sheetIndex)
    
    // Store the target bounding box for zoom
    setTargetBoundingBox(boundingBox || null)
    setRestoreZoomConfig(null) // Clear any pending zoom restore
    
    // Add current sheet to navigation stack with code and current zoom config
    if (currentSheet) {
      setNavigationStack(prev => [...prev, { 
        index: currentSheetIndex, 
        code: currentSheet.code,
        zoomConfig: currentZoomConfig || undefined 
      }])
    }
    
    // Reset current zoom config for new sheet
    setCurrentZoomConfig(null)
    
    // Navigate to new sheet
    setCurrentSheetIndex(sheetIndex)
  }

  const handleGoBack = () => {
    if (navigationStack.length > 0) {
      const previousSheet = navigationStack[navigationStack.length - 1]
      setNavigationStack(prev => prev.slice(0, -1))
      setCurrentSheetIndex(previousSheet.index)
      setTargetBoundingBox(null) // Clear target bounding box when going back
      
      // Restore the previous zoom config if available
      if (previousSheet.zoomConfig) {
        setRestoreZoomConfig(previousSheet.zoomConfig)
      } else {
        setRestoreZoomConfig(null)
      }
    } else {
      setIsSVGEditorOpen(false)
    }
  }

  const handleNavigateToBreadcrumb = (targetIndex: number) => {
    // Find the position in the navigation stack
    const stackIndex = navigationStack.findIndex(item => item.index === targetIndex)
    
    if (stackIndex >= 0) {
      const targetSheet = navigationStack[stackIndex]
      
      // Remove everything after this position
      setNavigationStack(prev => prev.slice(0, stackIndex))
      setCurrentSheetIndex(targetIndex)
      setTargetBoundingBox(null) // Clear target bounding box when navigating via breadcrumb
      
      // Restore the zoom config for the target sheet if available
      if (targetSheet.zoomConfig) {
        setRestoreZoomConfig(targetSheet.zoomConfig)
      } else {
        setRestoreZoomConfig(null)
      }
    }
  }

  // Generate sheet data based on current sheet index
  const getCurrentSheetData = () => {
    const sheet = allSheets.find(s => s.index === currentSheetIndex)
    return {
      index: currentSheetIndex,
      title: sheet ? `${sheet.code} - ${sheet.name}` : `Sheet ${String(currentSheetIndex).padStart(3, '0')}`
    }
  }
  return (
    <>
      <Card 
        className={`w-80 shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer ${
          selected ? 'ring-2 ring-blue-500 ring-offset-2' : ''
        }`}
        onClick={handleCardClick}
      >
        <Handle
          type="target"
          position={Position.Top}
          className="w-3 h-3 bg-blue-500 border-2 border-white"
        />
        
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-900">
              {data.code}
            </CardTitle>
            <Badge 
              variant="secondary" 
              className={`text-xs px-2 py-1 ${getSectionColor(data.section)}`}
            >
              <span className="flex items-center gap-1">
                {getSectionIcon(data.section)}
                {data.section === '0' ? 'Title' : data.section}
              </span>
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Sheet Name */}
          <div>
            <h3 className="font-semibold text-sm text-gray-800 mb-1">
              {data.name}
            </h3>
            <p className="text-xs text-gray-600">
              Index: {data.index}
            </p>
          </div>
          
          {/* Children Count */}
          {data.childrenCount > 0 && (
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Users className="h-3 w-3" />
              <span>{data.childrenCount} child sheet{data.childrenCount !== 1 ? 's' : ''}</span>
            </div>
          )}
        </CardContent>
        
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-3 h-3 bg-green-500 border-2 border-white"
        />
      </Card>

      {/* SVG Editor with Bounding Boxes */}
      <PDFSVGEditor
        key={currentSheetIndex} // Only re-render when sheet changes, not when targetBoundingBox changes
        isOpen={isSVGEditorOpen}
        onClose={() => setIsSVGEditorOpen(false)}
        pdfPath={`/sheets/page_${currentSheetIndex.toString().padStart(3, '0')}.pdf`}
        sheetData={getCurrentSheetData()}
        onNavigateToSheet={handleNavigateToSheet}
        navigationStack={navigationStack}
        onNavigateToBreadcrumb={handleNavigateToBreadcrumb}
        onGoBack={handleGoBack}
        targetBoundingBox={targetBoundingBox}
        restoreZoomConfig={restoreZoomConfig}
        onZoomConfigChange={handleZoomConfigChange}
      />
    </>
  )
})

SheetNode.displayName = 'SheetNode'