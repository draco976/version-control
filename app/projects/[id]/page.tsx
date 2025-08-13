"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

export default function ProjectDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string
  const [redirecting, setRedirecting] = useState(true)
  
  useEffect(() => {
    const redirect = async () => {
      try {
        await router.push(`/projects/${projectId}/version-control`)
      } catch (error) {
        console.error('Redirect error:', error)
        setRedirecting(false)
      }
    }
    
    const timeout = setTimeout(redirect, 100)
    return () => clearTimeout(timeout)
  }, [router, projectId])
  
  if (!redirecting) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <p>Unable to redirect automatically.</p>
        <button 
          onClick={() => router.push(`/projects/${projectId}/version-control`)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go to Version Control
        </button>
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <p>Redirecting to Version Control...</p>
    </div>
  )
}