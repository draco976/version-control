"use client"

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useRef } from 'react'

// Define the possible processing stages
export type ProcessingStage = 
  | 'upload'           // Initial upload stage
  | 'checking'         // Checking for existing documents
  | 'extracting'       // Extracting data from PDF
  | 'questions'        // Asking user questions
  | 'processing'       // Processing based on answers
  | 'analyzing'        // Final analysis stage
  | 'complete'         // Processing complete

// Define question types
export interface Question {
  id: string
  text: string
  type: 'radio' | 'checkbox' | 'text' | 'select'
  options?: string[]
  required: boolean
  specialType?: string  // For specialized question components like 'drawing-index'
}

// Define answer types
export interface Answer {
  questionId: string
  value: string | string[] | boolean
}

// Sheet processing status type
export interface SheetProcessingStatus {
  status: 'pending' | 'processing' | 'completed' | 'error'
  progress?: number
  startedAt?: string
  completedAt?: string
  errorMessage?: string
  jobId?: string  // Store job ID for tracking
}

// Define the shape of the context
interface ProcessingContextType {
  // State
  files: File[]
  stage: ProcessingStage
  progress: number
  questions: Question[]
  answers: Answer[]
  processingMessage: string
  drawingIndexPages: number[]  // Store selected drawing index pages
  savedDocumentId: number | null  // Store the saved document ID
  projectId: string | null  // Store the project ID
  isCheckingExistingDocuments: boolean  // Loading state for document checking
  drawingIndexResult: {
    success: boolean
    drawingIndex: number[]
    architectural: Array<{ 
      pageNumber: number
      sheetCode: string
      sheetTitle: string
      processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
      processingProgress?: number
      errorMessage?: string
    }>
    structural: Array<{ 
      pageNumber: number
      sheetCode: string
      sheetTitle: string
      processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
      processingProgress?: number
      errorMessage?: string
    }>
    selectedPagesData?: Array<{
      pageNumber: number
      architectural: Array<{ 
        pageNumber: number
        sheetCode: string
        sheetTitle: string
        processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
        processingProgress?: number
        errorMessage?: string
      }>
      structural: Array<{ 
        pageNumber: number
        sheetCode: string
        sheetTitle: string
        processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
        processingProgress?: number
        errorMessage?: string
      }>
    }>
  } | null
  currentQuestionIndex: number // Track the current question being displayed
  sheetProcessingStatuses: Record<string, SheetProcessingStatus> // Track processing status for all sheets
  
  // Methods
  setFiles: (files: File[]) => void
  addFile: (file: File) => void
  removeFile: (index: number) => void
  setStage: (stage: ProcessingStage) => void
  setProgress: (progress: number) => void
  setQuestions: (questions: Question[]) => void
  setAnswer: (questionId: string, value: string | string[] | boolean) => void
  setProcessingMessage: (message: string) => void
  setDrawingIndexPages: (pages: number[]) => void
  setSavedDocumentId: (documentId: number | null) => void
  setProjectId: (projectId: string | null) => void
  setDrawingIndexResult: (result: {
    success: boolean
    drawingIndex: number[]
    architectural: Array<{ 
      pageNumber: number
      sheetCode: string
      sheetTitle: string
      processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
      processingProgress?: number
      errorMessage?: string
    }>
    structural: Array<{ 
      pageNumber: number
      sheetCode: string
      sheetTitle: string
      processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
      processingProgress?: number
      errorMessage?: string
    }>
    selectedPagesData?: Array<{
      pageNumber: number
      architectural: Array<{ 
        pageNumber: number
        sheetCode: string
        sheetTitle: string
        processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
        processingProgress?: number
        errorMessage?: string
      }>
      structural: Array<{ 
        pageNumber: number
        sheetCode: string
        sheetTitle: string
        processingStatus?: 'pending' | 'processing' | 'completed' | 'error'
        processingProgress?: number
        errorMessage?: string
      }>
    }>
  } | null) => void
  setCurrentQuestionIndex: (index: number) => void
  processDrawingIndexPages: (pages: number[], pdfFile?: File) => Promise<{success: boolean, [key: string]: any}>
  processDrawingIndexSubmission: (selectedPages: number[]) => Promise<void>
  startProcessing: () => Promise<void>
  continueToNextStage: () => Promise<void>
  checkExistingDocuments: (projectId: string) => Promise<void>
  handleExistingDocuments: (documents: any[]) => Promise<void>
  checkExistingSheets: (documentId: number) => Promise<void>
  loadExistingSheets: (sheetsData: any) => Promise<void>
  startFromDrawingIndexSelection: () => Promise<void>
  loadDocumentFile: (documentId: number) => Promise<void>
  
  // New sheet processing methods
  startSheetsProcessing: () => Promise<void>
  startSheetProcessing: (sheetCode: string, pageNumber: number, forceReprocess?: boolean) => Promise<void>
  checkSheetsProcessingStatus: (sheetCodes: string[]) => Promise<Record<string, SheetProcessingStatus> | null>
  getSheetData: (sheetCode: string) => Promise<any>
  updateSheetProcessingStatus: (sheetCode: string, status: {
    status: 'pending' | 'processing' | 'completed' | 'error',
    progress?: number,
    errorMessage?: string
  }) => void
}

// Create the context
const ProcessingContext = createContext<ProcessingContextType | undefined>(undefined)

// Create the provider component
export function ProcessingProvider({ 
  children, 
  initialProjectId, 
  forceNew = false 
}: { 
  children: ReactNode, 
  initialProjectId?: string | null,
  forceNew?: boolean 
}) {
  // Initialize state
  const [files, setFiles] = useState<File[]>([])
  const [stage, setStage] = useState<ProcessingStage>('checking')
  const [progress, setProgress] = useState(0)
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Answer[]>([])
  const [processingMessage, setProcessingMessage] = useState('')
  const [drawingIndexPages, setDrawingIndexPages] = useState<number[]>([])
  const [savedDocumentId, setSavedDocumentId] = useState<number | null>(null)
  const [projectId, setProjectId] = useState<string | null>(initialProjectId || null)
  const [drawingIndexResult, setDrawingIndexResult] = useState<ProcessingContextType['drawingIndexResult']>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [sheetProcessingStatuses, setSheetProcessingStatuses] = useState<Record<string, SheetProcessingStatus>>({})
  const [isCheckingExistingDocuments, setIsCheckingExistingDocuments] = useState(false)
  
  // Refs to prevent duplicate operations
  const hasCheckedDocuments = useRef(false)
  const currentCheckingProjectId = useRef<string | null>(null)

  // Debug: Monitor files state changes
  useEffect(() => {
    console.log('Files state changed:', files.length, files.map(f => f.name))
  }, [files])

  // Debug: Monitor drawingIndexResult state changes
  useEffect(() => {
    console.log('drawingIndexResult state changed:', drawingIndexResult)
  }, [drawingIndexResult])

  // Check for existing documents when project ID is available
  useEffect(() => {
    console.log('useEffect triggered with projectId:', projectId, 'forceNew:', forceNew, 'stage:', stage)
    
    if (projectId) {
      if (forceNew) {
        console.log('Force new upload requested, skipping document check')
        setStage('upload')
        hasCheckedDocuments.current = true
      } else if (!hasCheckedDocuments.current || currentCheckingProjectId.current !== projectId) {
        // Only check if we haven't checked before or it's a different project
        console.log('Starting document check for project:', projectId)
        hasCheckedDocuments.current = true
        currentCheckingProjectId.current = projectId
        setStage('checking')
        checkExistingDocuments(projectId)
      } else {
        console.log('Already checked documents for this project, skipping')
      }
    } else {
      console.log('No project ID, going to upload stage')
      setStage('upload')
      hasCheckedDocuments.current = false
      currentCheckingProjectId.current = null
    }
  }, [projectId, forceNew]) // Removed stage from dependencies to prevent loops

  // Function to check for existing documents
  const checkExistingDocuments = async (projectId: string) => {
    // Prevent multiple simultaneous calls
    if (isCheckingExistingDocuments) {
      console.log('Already checking existing documents, skipping...')
      return
    }
    
    try {
      setIsCheckingExistingDocuments(true)
      setProgress(20)
      setProcessingMessage('Checking for existing documents...')
      console.log(`Checking for existing documents for project ${projectId}...`)
      
      const response = await fetch(`/api/documents?projectId=${projectId}`)
      
      setProgress(50)
      setProcessingMessage('Analyzing existing documents...')
      
      if (!response.ok) {
        console.log('No existing documents found or error fetching documents')
        setProgress(100)
        setProcessingMessage('No existing documents found. Ready for upload.')
        setTimeout(() => setStage('upload'), 1000)
        return
      }
      
      const data = await response.json()
      
      setProgress(80)
      
      if (data.documents?.length > 0) {
        console.log(`Found ${data.documents.length} existing documents for project ${projectId}`)
        setProcessingMessage('Found existing documents. Loading...')
        await handleExistingDocuments(data.documents)
      } else {
        console.log('No existing documents found for project')
        setProcessingMessage('No existing documents found. Ready for upload.')
        setTimeout(() => setStage('upload'), 1000)
      }
    } catch (error) {
      console.error('Error checking existing documents:', error)
      setProcessingMessage('Error checking documents. Proceeding to upload.')
      setTimeout(() => setStage('upload'), 1000)
    } finally {
      setProgress(100)
      setIsCheckingExistingDocuments(false)
    }
  }

  // Handle existing documents
  const handleExistingDocuments = async (documents: any[]) => {
    // Use the most recent document (already ordered by uploadedAt desc)
    const latestDoc = documents[0]
    
    console.log(`Using existing document: ${latestDoc.name} (ID: ${latestDoc.id})`)
    setSavedDocumentId(latestDoc.id)
    
    // Check if sheets have been extracted for this document
    await checkExistingSheets(latestDoc.id)
  }

  // Check for existing extracted sheets
  const checkExistingSheets = async (documentId: number) => {
    try {
      console.log(`Checking for existing sheets for document ${documentId}...`)
      
      const response = await fetch(`/api/sheets?documentId=${documentId}`)
      
      if (!response.ok) {
        console.log('No existing sheets found, starting from drawing index selection')
        await startFromDrawingIndexSelection(documentId)
        return
      }
      
      const data = await response.json()
      
      if (data.sheets?.length > 0) {
        console.log(`Found ${data.sheets.length} existing sheets, loading them...`)
        await loadExistingSheets(data)
      } else {
        console.log('No existing sheets found, starting from drawing index selection')
        await startFromDrawingIndexSelection(documentId)
      }
    } catch (error) {
      console.error('Error checking existing sheets:', error)
      await startFromDrawingIndexSelection(documentId)
    }
  }

  // Load existing sheets and jump to sheet display
  const loadExistingSheets = async (sheetsData: any) => {
    // Convert database sheets to the format expected by the frontend
    const architecturalSheets = sheetsData.architectural.map((sheet: any) => ({
      pageNumber: sheet.pageNumber,
      sheetCode: sheet.code,
      sheetTitle: sheet.title || `Architectural Sheet ${sheet.code}`,
      processingStatus: 'completed' as const
    }))
    
    const structuralSheets = sheetsData.structural.map((sheet: any) => ({
      pageNumber: sheet.pageNumber,
      sheetCode: sheet.code,
      sheetTitle: sheet.title || `Structural Sheet ${sheet.code}`,
      processingStatus: 'completed' as const
    }))
    
    console.log('Loaded existing sheets:', { architecturalSheets, structuralSheets })
    
    // Set the drawing index result with existing data
    setDrawingIndexResult({
      success: true,
      drawingIndex: [], // We don't store this for existing sheets
      architectural: architecturalSheets,
      structural: structuralSheets
    })
    
    // Initialize sheet processing statuses as completed
    const initialStatuses: Record<string, SheetProcessingStatus> = {}
    ;[...architecturalSheets, ...structuralSheets].forEach(sheet => {
      initialStatuses[sheet.sheetCode] = {
        status: 'completed',
        startedAt: new Date().toISOString(),
        completedAt: new Date().toISOString()
      }
    })
    
    setSheetProcessingStatuses(initialStatuses)
    
    // Set up questions to include sheet display
    setQuestions([
      {
        id: 'drawing-index-pages',
        text: 'Select pages containing drawing index',
        type: 'checkbox',
        required: true,
        specialType: 'drawing-index'
      },
      {
        id: 'page-review',
        text: 'Review extracted sheets',
        type: 'checkbox',
        required: false,
        specialType: 'page-review'
      },
      {
        id: 'sheet-display',
        text: 'Sheets found in drawing index',
        type: 'checkbox',
        required: false,
        specialType: 'sheet-display'
      }
    ])
    
    // Always go to page-review first, even for existing sheets
    setStage('questions')
    setCurrentQuestionIndex(1) // page-review question (always show this)
    
    console.log('Loaded existing processing state, showing page review first')
  }

  // Start from drawing index selection (document exists but no sheets)
  const startFromDrawingIndexSelection = async (documentId?: number) => {
    try {
      console.log('=== startFromDrawingIndexSelection called ===')
      console.log('documentId parameter:', documentId)
      console.log('savedDocumentId state:', savedDocumentId)
      
      // Use the passed documentId or fall back to savedDocumentId
      const docId = documentId || savedDocumentId
      console.log('Using document ID:', docId)
      
      // Ensure savedDocumentId is set for the drawing-index component
      if (documentId && documentId !== savedDocumentId) {
        console.log('Setting savedDocumentId to:', documentId)
        setSavedDocumentId(documentId)
      }
      
      setProcessingMessage('Loading existing document...')
      setProgress(20)
      
      // Load the PDF file from the saved document for processing
      if (docId) {
        console.log('Loading document file for drawing index selection...')
        await loadDocumentFile(docId)
        setProgress(60)
        console.log('Document file loaded, current files length:', files.length)
      } else {
        console.log('No document ID found!')
      }
      
      setProcessingMessage('Setting up drawing index selection...')
      setProgress(80)
      
      // Set up the drawing index question
      setQuestions([
        {
          id: 'drawing-index-pages',
          text: 'Select pages containing drawing index',
          type: 'checkbox',
          required: true,
          specialType: 'drawing-index'
        }
      ])
      
      setProgress(100)
      setProcessingMessage('Ready for drawing index selection')
      
      // Start from questions stage at drawing index selection
      setStage('questions')
      setCurrentQuestionIndex(0)
      
      console.log('Starting from drawing index selection with existing document')
      console.log('=== startFromDrawingIndexSelection completed ===')
    } catch (error) {
      console.error('Error starting from drawing index selection:', error)
      setProcessingMessage('Error loading document')
      // Fallback to upload stage if there's an error
      setTimeout(() => setStage('upload'), 2000)
    }
  }

  // Load document file into files state for processing
  const loadDocumentFile = async (documentId: number) => {
    try {
      console.log(`=== loadDocumentFile called with documentId: ${documentId} ===`)
      console.log(`Current files length before loading:`, files.length)
      
      // First, get the document info from the database to get the file path
      console.log(`Fetching documents for project ${projectId}`)
      const response = await fetch(`/api/documents?projectId=${projectId}`)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Documents API error:', response.status, response.statusText, errorText)
        throw new Error(`Failed to fetch document info: ${response.status} ${response.statusText}`)
      }
      
      const data = await response.json()
      console.log('Documents API response:', data)
      console.log('Looking for document with ID:', documentId)
      
      const document = data.documents.find((doc: any) => doc.id === documentId)
      
      if (!document) {
        throw new Error(`Document with ID ${documentId} not found in project ${projectId}`)
      }
      
      if (!document.filePath) {
        throw new Error(`Document ${documentId} has no file path`)
      }
      
      console.log(`Found document: ${document.name} at path: ${document.filePath}`)
      
      // Check if the file path starts with / (absolute) or needs to be made absolute
      const fileUrl = document.filePath.startsWith('/') ? document.filePath : `/${document.filePath}`
      console.log(`Fetching PDF from URL: ${fileUrl}`)
      
      // Fetch the actual PDF file from the public directory
      const fileResponse = await fetch(fileUrl)
      
      if (!fileResponse.ok) {
        const errorText = await fileResponse.text()
        console.error('File fetch error:', fileResponse.status, fileResponse.statusText, errorText)
        console.error('Failed URL:', fileUrl)
        throw new Error(`Failed to fetch PDF file from ${fileUrl}: ${fileResponse.status} ${fileResponse.statusText}`)
      }
      
      // Convert to blob and then to File object
      const blob = await fileResponse.blob()
      const file = new File([blob], document.name, { type: document.mimeType || 'application/pdf' })
      
      console.log(`Successfully loaded PDF file: ${document.name} (${file.size} bytes)`)
      setFiles([file])
      console.log(`Files array updated, new length:`, files.length + 1)
      console.log(`=== loadDocumentFile completed successfully ===`)
      
    } catch (error) {
      console.error('Error loading document file:', error)
      // If we can't load the file, still set a placeholder so the UI can continue
      // The backend will handle the existing document by document ID
      const placeholderFile = new File([''], 'existing-document.pdf', { 
        type: 'application/pdf' 
      })
      setFiles([placeholderFile])
      console.log('Set placeholder file due to error')
      // Don't re-throw, let the UI continue with placeholder
    }
  }

  // File management methods
  const addFile = (file: File) => {
    setFiles(prev => [...prev, file])
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }
  
  // Set an answer for a question
  const setAnswer = (questionId: string, value: string | string[] | boolean) => {
    setAnswers(prev => {
      const existingAnswerIndex = prev.findIndex(a => a.questionId === questionId)
      if (existingAnswerIndex >= 0) {
        // Update existing answer
        const newAnswers = [...prev]
        newAnswers[existingAnswerIndex] = { questionId, value }
        return newAnswers
      } else {
        // Add new answer
        return [...prev, { questionId, value }]
      }
    })
  }
  
  // Process drawing index pages and save answer in one step
  const processDrawingIndexSubmission = async (selectedPages: number[]) => {
    console.log('=== processDrawingIndexSubmission started ===')
    console.log('selectedPages:', selectedPages)
    console.log('savedDocumentId:', savedDocumentId)
    
    setAnswer('drawing-index-pages', selectedPages.map(p => p.toString()))
    setStage('processing')
    setProgress(30)
    setProcessingMessage('Processing selected pages...')
    
    try {
      let requestBody: any
      
      if (savedDocumentId) {
        // PDF already saved to disk (either new upload or existing document)
        requestBody = {
          documentId: savedDocumentId,
          selectedPages,
          useExistingDocument: true
        }
        console.log('Using existing document, requestBody:', requestBody)
      } else {
        throw new Error('No saved document ID available for processing')
      }
      
      // Call existing backend API
      console.log('Calling /api/process-drawing-index...')
      
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout
      
      let result: any
      
      try {
        const response = await fetch('/api/process-drawing-index', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (!response.ok) {
          throw new Error(`Failed to process drawing index: ${response.statusText}`)
        }
        
        console.log('API call successful, parsing response...')
        result = await response.json()
      } catch (error: any) {
        clearTimeout(timeoutId)
        if (error.name === 'AbortError') {
          console.log('API call timed out after 30 seconds, proceeding anyway...')
          // Proceed with empty result since sheets are likely already saved by Python
          result = { success: true, fileResults: [], totalDrawingsFound: 0 }
        } else {
          throw error
        }
      }
      // Expected result format from existing API:
      // { success: boolean, fileResults: [...], totalDrawingsFound: number, ... }
      
      setProcessingMessage('Processing completed. Fetching extracted sheet information.')
      
      // Convert the real API response to sheet data structure
      console.log('Backend response:', result)
      console.log('Backend response details:')
      console.log('- success:', result.success)
      console.log('- fileResults:', result.fileResults)
      console.log('- totalDrawingsFound:', result.totalDrawingsFound)
      console.log('- fileResults length:', result.fileResults?.length || 0)
      if (result.fileResults && result.fileResults.length > 0) {
        console.log('- first fileResult:', result.fileResults[0])
        console.log('- drawingDivisions:', result.fileResults[0]?.drawingDivisions)
      }
      
      if (result.success && savedDocumentId) {
        // Fetch sheets from database instead of converting API response
        try {
          console.log('Fetching sheets from database for documentId:', savedDocumentId)
          const sheetsResponse = await fetch(`/api/sheets?documentId=${savedDocumentId}`)
          
          if (!sheetsResponse.ok) {
            console.error('Sheets API error:', sheetsResponse.status, sheetsResponse.statusText)
            throw new Error('Failed to fetch sheets from database')
          }
          
          const sheetsData = await sheetsResponse.json()
          console.log('Sheets from database:', sheetsData)
          console.log('Sheets API response details:')
          console.log('- success:', sheetsData.success)
          console.log('- sheets array length:', sheetsData.sheets?.length || 0)
          console.log('- architectural array length:', sheetsData.architectural?.length || 0)
          console.log('- structural array length:', sheetsData.structural?.length || 0)
          
          if (sheetsData.success) {
            
            // Convert database sheets to the format expected by the frontend
            const architecturalSheets = sheetsData.architectural.map((sheet: any) => ({
              pageNumber: sheet.pageNumber,
              sheetCode: sheet.code,
              sheetTitle: sheet.title || `Architectural Sheet ${sheet.code}`,
              processingStatus: 'pending' as const
            }))
            
            const structuralSheets = sheetsData.structural.map((sheet: any) => ({
              pageNumber: sheet.pageNumber,
              sheetCode: sheet.code,
              sheetTitle: sheet.title || `Structural Sheet ${sheet.code}`,
              processingStatus: 'pending' as const
            }))
            
            console.log('Converted sheets from database:', { architecturalSheets, structuralSheets })
            
            // Set the drawing index result with data from database
            setDrawingIndexResult({
              success: true,
              drawingIndex: selectedPages,
              architectural: architecturalSheets,
              structural: structuralSheets
            })
            
            console.log('=== drawingIndexResult set ===')
            console.log('Setting drawingIndexResult to:', {
              success: true,
              drawingIndex: selectedPages,
              architectural: architecturalSheets,
              structural: structuralSheets
            })
            console.log('===============================')
            
            // Initialize all sheets as pending in the processing statuses
            const initialStatuses: Record<string, SheetProcessingStatus> = {}
            ;[...architecturalSheets, ...structuralSheets].forEach(sheet => {
              initialStatuses[sheet.sheetCode] = {
                status: 'pending',
                startedAt: new Date().toISOString()
              }
            })
            
            setSheetProcessingStatuses(initialStatuses)
          } else {
            throw new Error('Failed to fetch sheets: Invalid response')
          }
        } catch (fetchError) {
          console.error('Error fetching sheets from database:', fetchError)
          // Fallback to empty arrays if database fetch fails
          setDrawingIndexResult({
            success: false,
            drawingIndex: selectedPages,
            architectural: [],
            structural: []
          })
        }
        
      } else {
        console.error('No valid data in API response or no saved document ID:', result);
        // Fallback to empty arrays if API didn't return expected data
        setDrawingIndexResult({
          success: false,
          drawingIndex: selectedPages,
          architectural: [],
          structural: []
        });
      }
      
      console.log('Setting up questions for next stages...')
      // Create questions for next stages
      setQuestions(prev => {
        const firstQuestion = prev.find(q => q.id === 'drawing-index-pages');
        
        if (!firstQuestion) {
          console.error('First question not found');
          return prev;
        }
        
        const newQuestions = [
          firstQuestion,
          {
            id: 'page-review',
            text: 'Review extracted sheets',
            type: 'checkbox' as const,
            required: false,
            specialType: 'page-review'
          },
          {
            id: 'sheet-display',
            text: 'Sheets found in drawing index',
            type: 'checkbox' as const,
            required: false,
            specialType: 'sheet-display'
          }
        ];
        
        console.log('Updated questions:', newQuestions);
        return newQuestions;
      });
      
      // Move back to questions stage with the review question
      console.log('Moving to questions stage, currentQuestionIndex = 1 (page-review)')
      setStage('questions');
      setCurrentQuestionIndex(1); // Move to the second question (page-review)
      
      console.log('=== processDrawingIndexSubmission completed successfully ===')
      // Note: Backend processing is triggered automatically by the API call above
      // Sheet processing will start in background, we'll handle status checking in sheet-display component
      
      return;
    } catch (error) {
      console.error('Error processing drawing index pages:', error);
      setProcessingMessage(`Error processing selected pages: ${error instanceof Error ? error.message : 'Unknown error'}`);
      
      // Move back to questions stage to try again
      setStage('questions');
      setCurrentQuestionIndex(0); // Back to first question
    }
  }
  
  // Method to save PDF to database
  const savePdfToDatabase = async (file: File, projectId: string): Promise<number> => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('projectId', projectId)
      formData.append('type', 'construction-drawing')

      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error(`Failed to save PDF: ${response.statusText}`)
      }

      const result = await response.json()
      return result.document.id
    } catch (error) {
      console.error('Error saving PDF to database:', error)
      throw error
    }
  }

  // Method to start the processing
  const startProcessing = async () => {
    // Set initial progress
    setStage('processing')
    setProgress(0)
    setProcessingMessage('Saving PDF...')
    
    try {
      // Check if we have files and project ID
      if (files.length === 0) {
        throw new Error('No files to process')
      }

      if (!projectId) {
        throw new Error('No project selected')
      }

      // Save PDF to database first
      setProcessingMessage('Saving PDF to database...')
      await simulateProgress(15)
      
      const documentId = await savePdfToDatabase(files[0], projectId)
      setSavedDocumentId(documentId)
      
      setProcessingMessage('PDF saved successfully. Starting processing...')
      await simulateProgress(30)
      
      // Determine what questions to ask based on the file
      setQuestions([
        {
          id: 'drawing-index-pages',
          text: 'Select pages containing drawing index',
          type: 'checkbox',
          required: true,
          specialType: 'drawing-index'
        }
      ])
      
      // Move to questions stage
      setStage('questions')
      setCurrentQuestionIndex(0)
    } catch (error) {
      console.error('Error starting processing:', error)
      setProcessingMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      // Stay in processing stage to show error, user can try again
    }
  }
  
  // Process the drawing index pages
  const processDrawingIndexPages = async (pages: number[], pdfFile?: File) => {
    try {
      setDrawingIndexPages(pages)
      setProcessingMessage(`Processing ${pages.length} pages with drawing indices...`)
      
      // Use the provided PDF file or fall back to the first file in the context
      const fileToProcess = pdfFile || (files.length > 0 ? files[0] : null)
      
      if (!fileToProcess) {
        throw new Error('No file available for processing')
      }
      
      // For demo purposes, just simulate processing without actually calling the API
      console.log(`Processing ${pages.length} drawing index pages from file: ${fileToProcess.name} (${fileToProcess.size} bytes)`);
      
      // Simulate a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a structure that groups sheets by the selected pages
      const selectedPagesData = pages.map((pageNumber, idx) => {
        // Create sheets for this page with initial processing status
        const architectural = [
          { 
            pageNumber, 
            sheetCode: `A${101 + idx}`, 
            sheetTitle: "Floor Plan Level 1",
            processingStatus: 'pending' as const
          },
          { 
            pageNumber, 
            sheetCode: `A${201 + idx}`, 
            sheetTitle: "Elevations",
            processingStatus: 'pending' as const
          },
          { 
            pageNumber, 
            sheetCode: `A${301 + idx}`, 
            sheetTitle: "Sections",
            processingStatus: 'pending' as const
          }
        ];
        
        const structural = [
          { 
            pageNumber, 
            sheetCode: `S${101 + idx}`, 
            sheetTitle: "Foundation Plan",
            processingStatus: 'pending' as const
          },
          { 
            pageNumber, 
            sheetCode: `S${201 + idx}`, 
            sheetTitle: "Framing Plan",
            processingStatus: 'pending' as const
          }
        ];
        
        return {
          pageNumber,
          architectural,
          structural
        };
      });
      
      // Also keep flat arrays for backward compatibility
      const architecturalSheets = selectedPagesData.flatMap(page => page.architectural);
      const structuralSheets = selectedPagesData.flatMap(page => page.structural);
      
      // Log success
      console.log('Drawing index pages processed successfully');
      setProcessingMessage('Drawing index processed. Sheets identified successfully.');
      
      // Set the drawing index result in the context
      setDrawingIndexResult({
        success: true,
        drawingIndex: pages,
        architectural: architecturalSheets,
        structural: structuralSheets,
        selectedPagesData: selectedPagesData
      });
      
      // Initialize all sheets as pending in the processing statuses
      const initialStatuses: Record<string, SheetProcessingStatus> = {};
      [...architecturalSheets, ...structuralSheets].forEach(sheet => {
        initialStatuses[sheet.sheetCode] = {
          status: 'pending',
          startedAt: new Date().toISOString()
        };
      });
      
      setSheetProcessingStatuses(initialStatuses);
      
      // Add the sheet display question only if it doesn't already exist
      setQuestions(prev => {
        // Check if the sheet-display question already exists
        const sheetDisplayExists = prev.some(q => q.id === 'sheet-display');
        
        if (sheetDisplayExists) {
          console.log('Sheet display question already exists, not adding again');
          return prev;
        }
        
        // Add the new question
        const newQuestions = [
          ...prev,
          {
            id: 'sheet-display',
            text: 'Sheets found in drawing index',
            type: 'checkbox' as const,
            required: false,
            specialType: 'sheet-display'
          }
        ];
        
        return newQuestions;
      });
      
      return {
        success: true,
        message: 'Drawing index processed successfully',
        pages: pages,
        architecturalSheets: architecturalSheets.length,
        structuralSheets: structuralSheets.length
      };
    } catch (error) {
      console.error('Error processing drawing index pages:', error)
      setProcessingMessage('Error processing drawing index pages')
      // Don't throw the error, just return an error object
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Processing failed'
      };
    }
  }

  // Utility to simulate progress for demo purposes
  const simulateProgress = async (targetProgress: number) => {
    return new Promise<void>(resolve => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= targetProgress) {
            clearInterval(interval)
            resolve()
            return targetProgress
          }
          return prev + 5
        })
      }, 200)
    })
  }

  // Continue to the next stage
  const continueToNextStage = async () => {
    console.log('=== continueToNextStage called ===')
    console.log('currentQuestionIndex:', currentQuestionIndex)
    console.log('questions.length:', questions.length)
    console.log('questions:', questions.map(q => q.id))
    
    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      const nextIndex = currentQuestionIndex + 1
      console.log('Moving to next question index:', nextIndex)
      console.log('Next question:', questions[nextIndex])
      
      setCurrentQuestionIndex(nextIndex);
      
      // Check if we're moving to the sheet display question
      if (questions[nextIndex]?.id === 'sheet-display') {
        console.log('Moving to sheet display, starting sheets processing')
        // Start processing sheets when we show the sheet display
        // Use setTimeout to ensure this runs after component mounts
        setTimeout(() => {
          startSheetsProcessing();
        }, 100);
      }
      
      // There are more questions, stay in the questions stage
      console.log(`Moving to next question ${nextIndex} of ${questions.length}`);
      console.log('=== continueToNextStage completed ===')
      return;
    }
    
    // If we've answered all questions, continue to final processing stage
    console.log('Moving to final processing stage');
    
    // Move to processing stage
    setStage('processing')
    setProgress(30)
    setProcessingMessage('Processing drawing data...')
    
    // Log the answers
    console.log('Processing with drawing index pages:', answers.find(a => a.questionId === 'drawing-index-pages')?.value);
    
    // Simulate processing
    await simulateProgress(70)
    
    // Move to analyzing stage
    setStage('analyzing')
    setProcessingMessage('Analyzing for discrepancies...')
    
    await simulateProgress(100)
    
    // Complete
    setStage('complete')
  }

  // New sheet processing methods
  const startSheetsProcessing = useCallback(async () => {
    if (!drawingIndexResult) {
      console.error('No drawing index result available');
      return;
    }

    // Get all sheet codes
    const architecturalSheets = drawingIndexResult.architectural || [];
    const structuralSheets = drawingIndexResult.structural || [];
    const allSheets = [...architecturalSheets, ...structuralSheets];
    
    if (allSheets.length === 0) {
      console.log('No sheets to process');
      return;
    }
    
    // FOR NOW: Process specific sheet A2.75 for testing
    const targetSheetCode = "A2.75";
    const selectedSheet = allSheets.find(sheet => sheet.sheetCode === targetSheetCode);
    
    if (!selectedSheet) {
      console.log(`Target sheet ${targetSheetCode} not found in ${allSheets.length} sheets`);
      console.log('Available sheets:', allSheets.map(s => s.sheetCode));
      return;
    }
    
    console.log(`Processing specific sheet for testing: ${selectedSheet.sheetCode} (page ${selectedSheet.pageNumber})`);
    
    // Initialize all sheets as pending (for display purposes)
    const initialStatuses: Record<string, SheetProcessingStatus> = {};
    allSheets.forEach(sheet => {
      initialStatuses[sheet.sheetCode] = {
        status: 'pending',
        startedAt: new Date().toISOString()
      };
    });
    
    setSheetProcessingStatuses(initialStatuses);
    
    // Process only the selected sheet (NON-BLOCKING)
    console.log(`Starting non-blocking processing for sheet: ${selectedSheet.sheetCode}`);
    
    // Fire and forget - don't await this
    startSheetProcessing(selectedSheet.sheetCode, selectedSheet.pageNumber)
      .then(() => {
        console.log(`Sheet ${selectedSheet.sheetCode} processing initiated successfully`);
      })
      .catch((error) => {
        console.error(`Error processing sheet ${selectedSheet.sheetCode}:`, error);
        updateSheetProcessingStatus(selectedSheet.sheetCode, {
          status: 'error',
          errorMessage: error.message
        });
      });
    
    // Start status polling (also non-blocking)
    setTimeout(() => {
      console.log('Starting status polling for processed sheet');
      
      const pollOnce = async () => {
        try {
          await checkSheetsProcessingStatus([selectedSheet.sheetCode]);
        } catch (error) {
          console.error('Polling error:', error);
        }
      };
      
      // Initial poll
      pollOnce();
      
      // Continue polling every 3 seconds for up to 2 minutes
      const pollingInterval = setInterval(async () => {
        const status = sheetProcessingStatuses[selectedSheet.sheetCode]?.status;
        
        if (status === 'completed' || status === 'error') {
          clearInterval(pollingInterval);
          console.log(`Polling stopped for sheet ${selectedSheet.sheetCode} - status: ${status}`);
          return;
        }
        
        await pollOnce();
      }, 3000);
      
      // Safety cleanup after 2 minutes
      setTimeout(() => {
        clearInterval(pollingInterval);
        console.log('Polling timeout reached (2 minutes)');
      }, 2 * 60 * 1000);
    }, 1000);
    
    console.log('startSheetsProcessing completed - processing running in background');
  }, [drawingIndexResult]);
  
  const startSheetProcessing = async (sheetCode: string, pageNumber: number, forceReprocess: boolean = false) => {
    try {
      // Update status to processing
      updateSheetProcessingStatus(sheetCode, {
        status: 'processing',
        progress: 0
      });
      
      // Call the process API
      const response = await fetch(`/api/sheets/${sheetCode}/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pageNumber, forceReprocess })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to start processing for sheet ${sheetCode}: ${response.statusText}`);
      }
      
      const result = await response.json();
      
      // Store the job ID in the sheet status
      if (result.jobId) {
        updateSheetProcessingStatus(sheetCode, {
          status: 'processing',
          progress: 0,
          jobId: result.jobId
        });
      }
      
      console.log(`Processing started for sheet ${sheetCode}:`, result);
      
      return result;
    } catch (error) {
      console.error(`Error starting processing for sheet ${sheetCode}:`, error);
      
      // Update status to error
      updateSheetProcessingStatus(sheetCode, {
        status: 'error',
        errorMessage: error instanceof Error ? error.message : 'Unknown error'
      });
      
      return null;
    }
  }
  
  const checkSheetsProcessingStatus = useCallback(async (sheetCodes: string[]) => {
    try {
      // Call the status API
      const response = await fetch(`/api/sheets/status?codes=${sheetCodes.join(',')}`);
      
      if (!response.ok) {
        throw new Error(`Failed to check status: ${response.statusText}`);
      }
      
      const statuses = await response.json() as Record<string, SheetProcessingStatus>;
      
      // Check if there are any actual changes before updating state
      const hasChanges = Object.keys(statuses).some(sheetCode => {
        const oldStatus = sheetProcessingStatuses[sheetCode];
        const newStatus = statuses[sheetCode];
        
        if (!oldStatus && newStatus) return true;
        if (oldStatus && !newStatus) return true;
        if (oldStatus?.status !== newStatus?.status) return true;
        if (oldStatus?.progress !== newStatus?.progress) return true;
        
        return false;
      });
      
      // Only update state if there are actual changes
      if (hasChanges) {
        const updatedStatuses = { ...sheetProcessingStatuses, ...statuses };
        setSheetProcessingStatuses(updatedStatuses);
        
        // Also update the drawingIndexResult with status if there are changes
        if (drawingIndexResult) {
          let hasDrawingIndexChanges = false;
          const updatedArchitectural = [...drawingIndexResult.architectural];
          const updatedStructural = [...drawingIndexResult.structural];
          
          for (const [sheetCode, status] of Object.entries(statuses)) {
            // Update architectural sheets
            const archIndex = updatedArchitectural.findIndex(
              (sheet) => sheet.sheetCode === sheetCode
            );
            
            if (archIndex >= 0) {
              const currentSheet = updatedArchitectural[archIndex];
              if (currentSheet.processingStatus !== status.status ||
                  currentSheet.processingProgress !== status.progress ||
                  currentSheet.errorMessage !== status.errorMessage) {
                updatedArchitectural[archIndex] = {
                  ...currentSheet,
                  processingStatus: status.status,
                  processingProgress: status.progress,
                  errorMessage: status.errorMessage
                };
                hasDrawingIndexChanges = true;
              }
            }
            
            // Update structural sheets
            const structIndex = updatedStructural.findIndex(
              (sheet) => sheet.sheetCode === sheetCode
            );
            
            if (structIndex >= 0) {
              const currentSheet = updatedStructural[structIndex];
              if (currentSheet.processingStatus !== status.status ||
                  currentSheet.processingProgress !== status.progress ||
                  currentSheet.errorMessage !== status.errorMessage) {
                updatedStructural[structIndex] = {
                  ...currentSheet,
                  processingStatus: status.status,
                  processingProgress: status.progress,
                  errorMessage: status.errorMessage
                };
                hasDrawingIndexChanges = true;
              }
            }
          }
          
          // Only update drawing index result if there are changes
          if (hasDrawingIndexChanges) {
            setDrawingIndexResult({
              ...drawingIndexResult,
              architectural: updatedArchitectural,
              structural: updatedStructural
            });
          }
        }
      }
      
      return statuses;
    } catch (error) {
      console.error('Error checking sheet processing status:', error);
      return null;
    }
  }, [sheetProcessingStatuses, drawingIndexResult]);
  
  const getSheetData = useCallback(async (sheetCode: string) => {
    try {
      // Only get data if sheet is completed
      if (sheetProcessingStatuses[sheetCode]?.status !== 'completed') {
        console.warn(`Cannot get data for sheet ${sheetCode}: not completed`);
        return null;
      }
      
      // Call the bounding boxes API to get all data
      const response = await fetch(`/api/sheets/${sheetCode}/bounding-boxes`);
      
      if (!response.ok) {
        throw new Error(`Failed to get data for sheet ${sheetCode}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(`Error getting data for sheet ${sheetCode}:`, error);
      return null;
    }
  }, [sheetProcessingStatuses]);
  
  const updateSheetProcessingStatus = (sheetCode: string, status: {
    status: 'pending' | 'processing' | 'completed' | 'error',
    progress?: number,
    errorMessage?: string,
    jobId?: string
  }) => {
    // Update local state
    setSheetProcessingStatuses(prev => ({
      ...prev,
      [sheetCode]: {
        ...prev[sheetCode],
        ...status,
        ...(status.status === 'completed' ? { completedAt: new Date().toISOString() } : {})
      }
    }));
    
    // Also update the drawingIndexResult
    if (drawingIndexResult) {
      // Update architectural sheets
      const archIndex = drawingIndexResult.architectural.findIndex(
        sheet => sheet.sheetCode === sheetCode
      );
      
      if (archIndex >= 0) {
        const updatedArch = [...drawingIndexResult.architectural];
        updatedArch[archIndex] = {
          ...updatedArch[archIndex],
          processingStatus: status.status,
          processingProgress: status.progress,
          errorMessage: status.errorMessage
        };
        
        setDrawingIndexResult({
          ...drawingIndexResult,
          architectural: updatedArch
        });
      }
      
      // Update structural sheets
      const structIndex = drawingIndexResult.structural.findIndex(
        sheet => sheet.sheetCode === sheetCode
      );
      
      if (structIndex >= 0) {
        const updatedStruct = [...drawingIndexResult.structural];
        updatedStruct[structIndex] = {
          ...updatedStruct[structIndex],
          processingStatus: status.status,
          processingProgress: status.progress,
          errorMessage: status.errorMessage
        };
        
        setDrawingIndexResult({
          ...drawingIndexResult,
          structural: updatedStruct
        });
      }
    }
  }

  // Create the value object for the context
  const value: ProcessingContextType = {
    files,
    stage,
    progress,
    questions,
    answers,
    processingMessage,
    drawingIndexPages,
    savedDocumentId,
    projectId,
    isCheckingExistingDocuments,
    drawingIndexResult,
    currentQuestionIndex,
    sheetProcessingStatuses,
    setFiles,
    addFile,
    removeFile,
    setStage,
    setProgress,
    setQuestions,
    setAnswer,
    setProcessingMessage,
    setDrawingIndexPages,
    setSavedDocumentId,
    setProjectId,
    setDrawingIndexResult,
    setCurrentQuestionIndex,
    processDrawingIndexPages,
    processDrawingIndexSubmission,
    startProcessing,
    continueToNextStage,
    checkExistingDocuments,
    handleExistingDocuments,
    checkExistingSheets,
    loadExistingSheets,
    startFromDrawingIndexSelection,
    loadDocumentFile,
    startSheetsProcessing,
    startSheetProcessing,
    checkSheetsProcessingStatus,
    getSheetData,
    updateSheetProcessingStatus
  }

  return (
    <ProcessingContext.Provider value={value}>
      {children}
    </ProcessingContext.Provider>
  )
}

// Custom hook to use the processing context
export function useProcessing() {
  const context = useContext(ProcessingContext)
  if (context === undefined) {
    throw new Error('useProcessing must be used within a ProcessingProvider')
  }
  return context
}
