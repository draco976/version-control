"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { FileText, FolderPlus, Building, Clock, AlertTriangle, Trash2 } from "lucide-react"
import Link from "next/link"
import { TermsPrivacyDialog } from "@/components/terms-privacy-dialog"

// Project data structure
interface Project {
  id: number;
  name: string;
  date: string;
  documents: number;
}

export default function ProjectsDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/projects');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        
        // Transform data to match our new structure
        const transformedData = data.projects.map((project: any) => ({
          id: project.id,
          name: project.name,
          date: project.date,
          documents: project.documentCount || 0
        }));
        
        setProjects(transformedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  const createNewProject = async () => {
    if (!newProjectName.trim()) return;
    
    try {
      // Create the project via API
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newProjectName }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
      
      const newProject = await response.json();
      
      // Add the new project to the list with the expected format
      setProjects([...projects, {
        id: newProject.id,
        name: newProject.name,
        date: new Date(newProject.date).toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        }),
        documents: 0
      }]);
      
      setNewProjectName("");
      setDialogOpen(false);
    } catch (err) {
      console.error('Error creating project:', err);
      // You could add error handling UI here
    }
  }

  const handleDeleteProject = (project: Project) => {
    setProjectToDelete(project);
    setDeleteDialogOpen(true);
  }

  const confirmDeleteProject = async () => {
    if (!projectToDelete) return;
    
    try {
      const response = await fetch(`/api/projects?id=${projectToDelete.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      // Remove the project from the list
      setProjects(projects.filter(p => p.id !== projectToDelete.id));
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    } catch (err) {
      console.error('Error deleting project:', err);
      // You could add error handling UI here
    }
  }







  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div>
          <h1 className="font-semibold">Projects Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage all your construction projects</p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Create Project Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Projects</h2>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <FolderPlus className="h-4 w-4" />
                Create New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Enter a name for your new project. You'll be able to upload architectural and structural documents in the next step.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input 
                  placeholder="Project Name" 
                  value={newProjectName} 
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={createNewProject}>
                  Create
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Project</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete "{projectToDelete?.name}"? This action cannot be undone and will permanently delete all associated documents and data.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmDeleteProject}
                className="flex items-center gap-1"
              >
                <Trash2 className="h-3 w-3" />
                Delete Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>



        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 mb-4"></div>
              <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-36 bg-gray-200 rounded"></div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Failed to load projects</h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && projects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center">
              <FolderPlus className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No projects yet</h3>
              <p className="text-muted-foreground mb-4">Create your first project to get started</p>
              <Button onClick={() => setDialogOpen(true)}>
                Create New Project
              </Button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && !error && projects.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
            <div key={project.id} className="relative">
              <Link href={`/projects/${project.id}`}>
                <Card className="overflow-hidden relative hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
                  <CardHeader className="pb-2 pr-12">
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      {project.name}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {project.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <FileText className="h-4 w-4 text-blue-500" />
                      <span>{project.documents} Documents</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              

              
              {/* Delete button */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDeleteProject(project);
                }}
                className="absolute top-3 right-3 p-1 h-auto w-auto text-gray-400 hover:text-red-600 hover:bg-red-50 z-20"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>All uploaded data is deleted after 1 hour.</p>
            <div className="flex items-center justify-center gap-2">
              <span>© ContextFort INCORPORATED</span>
              <span>|</span>
              <TermsPrivacyDialog>
                <button className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Terms and Privacy
                </button>
              </TermsPrivacyDialog>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
