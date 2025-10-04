"use client"

import React, { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '../components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  Copy,
  X,
  Filter
} from 'lucide-react'
import { toast } from 'sonner'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  category: string
  duration: string
  role: string
  thumbnailUrl: string
  screenshots: string[]
  githubUrl: string
  liveUrl?: string
  features: string[]
}

const PROJECTS: Project[] = [
  {
    "id": "codestream",
    "title": "CodeStream - Real-Time Collaborative Code Editor",
    "description": "A full-stack web application for real-time, multi-user code editing, built with Next.js and WebSockets.",
    "longDescription": "CodeStream is a full-stack web application that provides a real-time, multi-user collaborative code editing environment directly in the browser. Inspired by tools like VS Code Live Share and Replit, it allows developers to create a workspace, share a unique link, and code together instantly, demonstrating a deep understanding of distributed systems and real-time data synchronization.",
    "techStack": ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Prisma", "Docker"],
    "category": "TypeScript-Next.js",
    "duration": "August 2025 - September 2025",
    "role": "Full Stack Developer",
    "thumbnailUrl": "/Projects/codestream-1.png",
    "screenshots": [
      "/Projects/codestream-1.png",
      "/Projects/codestream-2.png"
      
    ],
    "githubUrl": "https://github.com/omdarshan-4964/CodeStream",
    "liveUrl": "https://code-stream-rho.vercel.app",
    "features": [
      "Architected a distributed, real-time collaborative editor using Next.js and TypeScript.",
      "Engineered a core real-time engine with a Node.js WebSocket server for low-latency synchronization.",
      "Implemented an isolated, session-based 'room' architecture for secure collaboration.",
      "Deployed the multi-service application using a full CI/CD pipeline (Docker, Vercel, Render).",
      "Built a responsive frontend with Monaco Editor for a VS Code-like experience.",
      "Developed a RESTful API for all file system operations (read, write, list)."
    ]
  },
  {
    id: 'evento',
    title: 'Evento - College Event Management System',
    description: 'A full-stack MERN application designed to solve venue booking conflicts and streamline event management.',
    longDescription: 'Evento is a comprehensive event management platform that addresses the critical issue of venue booking conflicts in educational institutions. The system provides a centralized solution for managing events, bookings, and resources while preventing scheduling conflicts through intelligent conflict detection.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    category: 'Full Stack',
    duration: 'September 2023 - July 2025',
    role: 'Full Stack Developer',
    thumbnailUrl: '/Projects/evento-1.png',
    screenshots: [
      "/Projects/evento-2.png",
      "/Projects/evento-3.png",
      "/Projects/evento-4.png",
      "/Projects/evento-5.png"
    ],
    githubUrl: 'https://github.com/omdarshan-4964/Evento-College_Events_Management_System',
    liveUrl: 'https://evento-zeta-nine.vercel.app',
    features: [
      'Architected and deployed a scalable full-stack MERN application managing complete SDLC',
      'Engineered high-performance conflict-detection system using Node.js and MongoDB',
      'Developed dynamic React frontend with role-based dashboards',
      'Implemented secure RESTful API using JWT and RBAC',
      'Real-time venue availability tracking',
      'Comprehensive event management workflow'
    ]
  },
  {
    id: 'daimmp',
    title: 'DAiMMP - Decentralized AI Model Marketplace',
    description: 'A blockchain-powered marketplace for secure AI model exchange with Ethereum integration.',
    longDescription: 'DAiMMP revolutionizes AI model distribution through decentralized technology. This marketplace enables secure, transparent, and traceable exchange of AI models while protecting intellectual property through blockchain-based validation and smart contracts.',
    techStack: ['React.js', 'Node.js', 'Ethereum', 'Blockchain', 'AI/ML APIs', 'Smart Contracts'],
    category: 'Machine Learning',
    duration: 'January 2025 - May 2025',
    role: 'Backend Developer',
    thumbnailUrl: "/Projects/daimmp-1.png",
    screenshots: [
      "/Projects/daimmp-1.png",
      "/Projects/daimmp-2.png",
      "/Projects/daimmp-3.png",
      "/Projects/daimmp-4.png",

    ],
    githubUrl: 'https://github.com/omdarshan-4964/DAiMMP',
    liveUrl: 'https://aimodels-frontend.onrender.com/',
    features: [
      'Engineered backend architecture for multi-service platform integration',
      'Built core RESTful API for authentication and AI model management',
      'Integrated Ethereum blockchain for secure transaction validation',
      'Developed React frontend with AI chatbot API integration',
      'Implemented blockchain services for traceable transactions',
      'Created decentralized marketplace infrastructure'
    ]
  },
  {
    id: 'lifelink',
    title: 'LifeLink: Blood Donation Management System',
    description: 'A MERN-based platform to streamline blood donation requests and connect donors with recipients.',
    longDescription: 'LifeLink addresses critical blood shortage issues by creating an efficient network connecting blood donors with recipients. The platform features real-time availability tracking, emergency notifications, and comprehensive donor management to save lives through technology.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'Full Stack',
    duration: 'November 2024',
    role: 'Full Stack Developer',
    thumbnailUrl:  "/Projects/lifelink-1.png",
    screenshots: [
      "/Projects/lifelink-1.png",
      "/Projects/lifelink-2.png"
    ],
    githubUrl: 'https://github.com/omdarshan-4964/Blood-donation-management-system-SEM_V_PBL_Project',
    liveUrl: 'https://life-link-9ajo.onrender.com/',
    features: [
      'Engineered secure backend using Node.js, Express.js, and MongoDB',
      'Built RESTful API for blood donation management',
      'Implemented secure JWT-based authentication and role-based access control',
      'Developed responsive UI with React and Tailwind CSS',
      'Created real-time dashboard for donation tracking',
      'Emergency notification system for urgent requests'
    ]
  }
]

const CATEGORIES = ['All', 'Full Stack', 'Machine Learning', "TypeScript-Next.js"]

interface ProjectsSectionProps {
  className?: string
}

export default function ProjectsSection({ className = '' }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory)

  const handleCopyUrl = useCallback((url: string, projectTitle: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(url).then(() => {
        toast.success(`${projectTitle} repository URL copied to clipboard!`)
      }).catch(() => {
        toast.error('Failed to copy URL')
      })
    }
  }, [])

  const handlePreviousImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  const handleNextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }, [selectedProject])

  const openProjectModal = useCallback((project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }, [])

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }, [])

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        switch (e.key) {
          case 'Escape':
            closeProjectModal()
            break
          case 'ArrowLeft':
            handlePreviousImage()
            break
          case 'ArrowRight':
            handleNextImage()
            break
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject, handlePreviousImage, handleNextImage, closeProjectModal])

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across full-stack development, blockchain solutions, and modern web applications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mr-4">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={project.thumbnailUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg font-display group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.techStack.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{project.role}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => openProjectModal(project)}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCopyUrl(project.githubUrl, project.title)}
                        className="px-3"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          asChild
                          className="px-3"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle className="text-2xl font-display mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </div>
                <Badge variant="secondary">{selectedProject.category}</Badge>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {/* Image Carousel */}
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.screenshots[currentImageIndex]} 
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0"
                      onClick={handlePreviousImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 p-0"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {selectedProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements & Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Role:</span>
                      <p className="font-medium">{selectedProject.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button asChild className="flex-1">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                {selectedProject.liveUrl && (
                  <Button variant="outline" asChild className="flex-1">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button 
                  variant="outline"
                  onClick={() => handleCopyUrl(selectedProject.githubUrl, selectedProject.title)}
                  className="px-4"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}