'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Building2, FileText, Loader2, Search, X } from 'lucide-react'
import { toast } from 'sonner'
import dynamic from 'next/dynamic'

const PDFSVGEditor = dynamic(() => import('./pdf-viewer-component/pdf-svg-editor'), {
  ssr: false,
  loading: () => null
})

interface BoundingBox {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  code: string;
  title: string;
  content: string;
  type: string;
  shape: string;
  color: string;
  category: string;
}

interface DrawingIndexSheet {
  pageNumber: number;
  title: string;
  code: string;
  status: 'processing' | 'complete';
  category: string;
  boundingBoxes?: BoundingBox[];
}

interface ZoomConfig {
  scale: number;
  x: number;
  y: number;
}

export default function DrawingIndexView({ projectId }: { projectId: string }) {
  const [sheets, setSheets] = useState<DrawingIndexSheet[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSheets, setFilteredSheets] = useState<DrawingIndexSheet[]>([]);
  const [selectedSheetIndex, setSelectedSheetIndex] = useState<number | null>(null);
  const [isSVGEditorOpen, setIsSVGEditorOpen] = useState(false);
  const [navigationStack, setNavigationStack] = useState<Array<{pageNumber: number, code: string, zoomConfig?: ZoomConfig | undefined}>>([]);
  const [targetBoundingBox, setTargetBoundingBox] = useState<any>(null);
  const [restoreZoomConfig, setRestoreZoomConfig] = useState<ZoomConfig | undefined>(undefined);
  const [currentZoomConfig, setCurrentZoomConfig] = useState<ZoomConfig | undefined>(undefined);

  // Load initial sheet data
  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/drawing-index/sheet-data');
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.statusText}`);
        }
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to load sheet data');
        }
        
        setSheets(result.data);
        
        // For each sheet, start fetching its bounding boxes
        result.data.forEach((sheet: DrawingIndexSheet) => {
          fetchBoundingBoxes(sheet.pageNumber);
        });
        
      } catch (error) {
        console.error('Error loading drawing index data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
        toast.error('Failed to load drawing index data');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSheetData();
  }, []);
  
  // Filter sheets based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSheets(sheets);
      return;
    }
    
    const filtered = sheets.filter(sheet => 
      sheet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sheet.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSheets(filtered);
  }, [searchTerm, sheets]);

  // Initially set filtered sheets to all sheets
  useEffect(() => {
    setFilteredSheets(sheets);
  }, [sheets]);

  // Fetch bounding boxes for a specific page
  const fetchBoundingBoxes = async (pageNumber: number) => {
    try {
      const response = await fetch(`/api/drawing-index/bounding-boxes/${pageNumber}`);
      
      if (!response.ok) {
        throw new Error(`Failed to load bounding boxes: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to load bounding box data');
      }
      
      // Update the sheet with bounding boxes and status
      setSheets(prev => prev.map(sheet => 
        sheet.pageNumber === pageNumber 
          ? { 
              ...sheet, 
              boundingBoxes: result.data,
              status: result.status 
            }
          : sheet
      ));
      
    } catch (error) {
      console.error(`Error loading bounding boxes for page ${pageNumber}:`, error);
      toast.error(`Failed to load details for page ${pageNumber}`);
    }
  };

  // Handle zoom configuration change
  const handleZoomConfigChange = useCallback((zoomConfig: ZoomConfig) => {
    setCurrentZoomConfig(zoomConfig);
  }, []);

  // Handle navigation to another sheet
  const handleNavigateToSheet = (pageNumber: number, boundingBox?: any) => {
    // Find current and target sheet data
    const currentSheet = sheets.find(s => s.pageNumber === selectedSheetIndex);
    const targetSheet = sheets.find(s => s.pageNumber === pageNumber);
    
    // Store the target bounding box for zoom
    setTargetBoundingBox(boundingBox || null);
    setRestoreZoomConfig(undefined); // Clear any pending zoom restore
    
    // Add current sheet to navigation stack with code and current zoom config
    if (currentSheet && selectedSheetIndex !== null) {
      setNavigationStack(prev => [...prev, { 
        pageNumber: selectedSheetIndex, 
        code: currentSheet.code,
        zoomConfig: currentZoomConfig 
      }]);
    }
    
    // Reset current zoom config for new sheet
    setCurrentZoomConfig(undefined);
    
    // Navigate to new sheet
    setSelectedSheetIndex(pageNumber);
  };

  // Handle going back in navigation
  const handleGoBack = () => {
    if (navigationStack.length > 0) {
      const previousSheet = navigationStack[navigationStack.length - 1];
      setNavigationStack(prev => prev.slice(0, -1));
      setSelectedSheetIndex(previousSheet.pageNumber);
      setTargetBoundingBox(null); // Clear target bounding box when going back
      
      // Restore the previous zoom config if available
      if (previousSheet.zoomConfig) {
        setRestoreZoomConfig(previousSheet.zoomConfig);
      } else {
        setRestoreZoomConfig(undefined);
      }
    } else {
      setIsSVGEditorOpen(false);
    }
  };

  // Handle breadcrumb navigation
  const handleNavigateToBreadcrumb = (targetPageNumber: number) => {
    // Find the position in the navigation stack
    const stackIndex = navigationStack.findIndex(item => item.pageNumber === targetPageNumber);
    
    if (stackIndex >= 0) {
      const targetSheet = navigationStack[stackIndex];
      
      // Remove everything after this position
      setNavigationStack(prev => prev.slice(0, stackIndex));
      setSelectedSheetIndex(targetPageNumber);
      setTargetBoundingBox(null); // Clear target bounding box when navigating via breadcrumb
      
      // Restore the zoom config for the target sheet if available
      if (targetSheet.zoomConfig) {
        setRestoreZoomConfig(targetSheet.zoomConfig);
      } else {
        setRestoreZoomConfig(undefined);
      }
    }
  };

  // Generate sheet data based on selected sheet index
  const getSelectedSheetData = () => {
    if (selectedSheetIndex === null) return undefined;
    
    const sheet = sheets.find(s => s.pageNumber === selectedSheetIndex);
    return {
      index: selectedSheetIndex,
      title: sheet ? `${sheet.code} - ${sheet.title}` : `Sheet ${String(selectedSheetIndex).padStart(3, '0')}`
    };
  };

  // Get category style
  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'architectural':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'structural':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'architectural':
      case 'structural':
        return <Building2 className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  // Handle sheet click
  const handleSheetClick = (sheet: DrawingIndexSheet) => {
    setSelectedSheetIndex(sheet.pageNumber);
    setNavigationStack([]); // Reset navigation stack when opening a new sheet
    setIsSVGEditorOpen(true);
  };

  if (isLoading) {
    return (
      <Card className="w-full h-96">
        <CardContent className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading drawing index data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search drawing index by name or code..."
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

      {/* Sheets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSheets.map((sheet) => (
          <Card 
            key={sheet.pageNumber}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg relative overflow-hidden"
            onClick={() => handleSheetClick(sheet)}
          >
            {sheet.status === 'processing' && (
              <div className="absolute inset-0 bg-gray-800 bg-opacity-20 flex items-center justify-center z-10">
                <div className="bg-white p-2 rounded-md shadow-lg">
                  <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                </div>
              </div>
            )}
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold text-gray-900">
                  {sheet.code}
                </CardTitle>
                <Badge 
                  variant="secondary" 
                  className={`text-xs px-2 py-1 ${getCategoryStyle(sheet.category)}`}
                >
                  <span className="flex items-center gap-1">
                    {getCategoryIcon(sheet.category)}
                    {sheet.category}
                  </span>
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <h3 className="font-semibold text-sm text-gray-800 mb-1">
                {sheet.title}
              </h3>
              <p className="text-xs text-gray-600">
                Page: {sheet.pageNumber}
              </p>
              {sheet.boundingBoxes && sheet.boundingBoxes.length > 0 && (
                <p className="text-xs text-blue-600 mt-1">
                  {sheet.boundingBoxes.length} drawings found
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredSheets.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">No drawing index sheets found matching "{searchTerm}"</p>
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
          navigationStack={navigationStack.map(item => ({
            index: item.pageNumber,
            code: item.code,
            zoomConfig: item.zoomConfig
          }))}
          onNavigateToBreadcrumb={handleNavigateToBreadcrumb}
          onGoBack={handleGoBack}
          targetBoundingBox={targetBoundingBox}
          restoreZoomConfig={restoreZoomConfig}
          onZoomConfigChange={handleZoomConfigChange}
        />
      )}
    </div>
  );
}
