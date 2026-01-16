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
    "id": "ai-workflow-builder",
    "title": "AI Workflow Builder (Weavy.ai Clone)",
    "description": "Architected a concurrent AI execution engine using a 'Fan-Out' architecture to trigger multiple AI agents from a single prompt. Production-grade agentic AI system with visual DAG builder.",
    "longDescription": "AI Workflow Builder is an enterprise-grade agentic AI platform that revolutionizes multi-agent orchestration. Built with a sophisticated Fan-Out architecture, it enables parallel execution of multiple specialized AI agents from a single prompt, dramatically reducing latency and increasing throughput. The system features a visual DAG (Directed Acyclic Graph) builder using React Flow for intuitive workflow design, enterprise state management with Zustand, and MongoDB for persistent workflow storage. This project demonstrates deep understanding of distributed systems, concurrent processing, and modern AI agent architecture.",
    "techStack": ["Next.js 16", "TypeScript", "Gemini 1.5 Flash", "React Flow", "Zustand", "MongoDB", "Vercel"],
    "category": "Machine Learning",
    "duration": "January 2026 - Present",
    "role": "Full Stack & AI Engineer",
    "thumbnailUrl": "/Projects/AIWorkflow/Thumbnail.png",
    "screenshots": [
      "/Projects/AIWorkflow/Thumbnail.png",
      "/Projects/AIWorkflow/editor-parallel.png",
      "/Projects/AIWorkflow/node-canvas.png"
    ],
    "githubUrl": "https://github.com/omdarshan-4964/ai-workflow-builder",
    "liveUrl": "https://ai-workflow-builder-iota.vercel.app/",
    "features": [
      "🚀 Fan-Out Architecture: Concurrent execution of multiple AI agents with intelligent task distribution",
      "🧠 Agentic AI System: Specialized agents for different tasks (Research, Code, Analysis, Creative)",
      "📊 Visual DAG Builder: Drag-and-drop workflow designer using React Flow with real-time validation",
      "⚡ Parallel Execution: Trigger 5+ agents simultaneously with <2s response time per agent",
      "🎯 Enterprise State Management: Zustand-powered state with persistent workflow storage in MongoDB",
      "🔄 Real-time Updates: WebSocket integration for live agent status and execution progress",
      "💾 Workflow Persistence: Save, load, and share complex multi-agent workflows",
      "🎨 Modern UI: Built with shadcn/ui and Tailwind CSS for professional user experience",
      "🔐 Secure API Integration: Rate-limited Gemini 1.5 Flash API calls with error handling",
      "📈 Performance Optimized: Next.js 16 App Router with server components and streaming"
    ]
  },
  {
    "id": "codestream",
    "title": "CodeStream - Real-Time Collaborative Code Editor",
    "description": "Production-ready collaborative coding platform with <50ms latency, supporting 50+ concurrent users per room. Built with Next.js and WebSockets.",
    "longDescription": "CodeStream is a full-stack web application that provides a real-time, multi-user collaborative code editing environment directly in the browser. Inspired by tools like VS Code Live Share and Replit, it allows developers to create a workspace, share a unique link, and code together instantly. The system handles 50+ concurrent users with sub-50ms synchronization latency, demonstrating deep understanding of distributed systems and real-time data synchronization at scale.",
    "techStack": ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Prisma", "Docker"],
    "category": "TypeScript-Next.js",
    "duration": "August 2025 - September 2025",
    "role": "Full Stack Developer",
    "thumbnailUrl": "/Projects/CodeStream/Thumbnail.png",
    "screenshots": [
      "/Projects/CodeStream/Thumbnail.png",
      "/Projects/CodeStream/Features.png",
      "/Projects/CodeStream/Room Architecture.png",
      "/Projects/CodeStream/Gemini Assistant.png",
      "/Projects/CodeStream/Git Control.png",
      "/Projects/CodeStream/Login.png"
    ],
    "githubUrl": "https://github.com/omdarshan-4964/CodeStream",
    "liveUrl": "https://code-stream-rho.vercel.app",
    "features": [
      "⚡ Achieved <50ms synchronization latency using optimized WebSocket architecture",
      "👥 Supports 50+ concurrent users per collaborative session with isolated room architecture",
      "🔒 Implemented session-based security with JWT authentication and RBAC",
      "🚀 Deployed with 99.5% uptime using Docker containerization and CI/CD pipeline",
      "💻 Built VS Code-like experience using Monaco Editor with syntax highlighting for 20+ languages",
      "📊 Processed 500+ collaborative sessions with zero data loss",
      "🔄 Real-time file system operations (read, write, list) with conflict resolution"
    ]
  },
  {
    "id": "secureauth-gateway",
    "title": "SecureAuth Gateway - Enterprise Authentication System",
    "description": "Production-ready authentication & authorization infrastructure with JWT, RBAC, and real-time transaction processing. Supports 3-tier role management with 99.9% uptime.",
    "longDescription": "SecureAuth Gateway is a full-stack enterprise authentication system built to demonstrate payment-grade security patterns including JWT-based authentication, role-based access control (RBAC), and transaction management. The platform implements a complete auth lifecycle with access/refresh token rotation, admin user management capabilities, and a Neo-Fintech UI with glass-morphism effects. The system is fully containerized with Docker and features comprehensive API documentation, automated health checks, and secure session management.",
    "techStack": ["Next.js", "TypeScript", "Express.js", "MongoDB", "JWT", "Docker", "React Query", "Tailwind CSS"],
    "category": "TypeScript-Next.js",
    "duration": "December 2025 - January 2026",
    "role": "Full Stack Developer",
    "thumbnailUrl": "/Projects/SecureAuthGateway/Thumbnail.png",
    "screenshots": [
      "/Projects/SecureAuthGateway/Thumbnail.png",
      "/Projects/SecureAuthGateway/login.png",
      "/Projects/SecureAuthGateway/user_dash.png",
      "/Projects/SecureAuthGateway/user_dashboard.png",
      "/Projects/SecureAuthGateway/merchant_dashboard.png",
      "/Projects/SecureAuthGateway/admin_dashboard.png",
      "/Projects/SecureAuthGateway/transaction.png",
      "/Projects/SecureAuthGateway/user_management.png"

    ],
    "githubUrl": "https://github.com/omdarshan-4964/SecureAuthGateway",
    "liveUrl": "https://secureauth-gateway.vercel.app/",
    "features": [
      "🔐 Implemented JWT authentication with dual-token system (15min access + 7d refresh tokens)",
      "👥 3-tier RBAC system (USER, MERCHANT, ADMIN) with granular permission management",
      "💳 Real-time transaction processing system with status tracking and payment simulation",
      "🛡️ Enterprise security: bcrypt password hashing, CORS, rate limiting, MongoDB sanitization",
      "👤 Admin dashboard with user management (ban/unban), role assignment, and activity monitoring",
      "🐳 Full Docker containerization with multi-stage builds and health check endpoints",
      "🎨 Modern Neo-Fintech UI with glass-morphism design, responsive layout, and dark theme",
      "📊 Comprehensive API documentation with 15+ endpoints and standardized response format",
      "🔄 Auto token refresh mechanism with httpOnly cookies for enhanced security"
    ]
  },
  {
    "id": "cerebra",
    "title": "Cerebra - AI-Powered Learning Map Generator",
    "description": "AI-powered learning roadmap generator creating personalized, interactive node-based learning maps using Google Gemini. Built with Next.js 14 and React Flow.",
    "longDescription": "Cerebra is an intelligent learning roadmap platform that leverages Google's Gemini AI to generate personalized, interactive node-based learning maps for any topic. The system features intelligent auto-layout algorithms, difficulty-based filtering, and a modern glassmorphic UI. Users can create custom learning paths, filter by difficulty levels, export their progress, and access curated templates for popular topics like Web Development, Machine Learning, and Python.",
    "techStack": ["Next.js 14", "React 18", "TypeScript", "Google Gemini AI", "React Flow", "Tailwind CSS", "Vercel"],
    "category": "Machine Learning",
    "duration": "October 2025 - December 2025",
    "role": "Full Stack Developer",
    "thumbnailUrl": "/Projects/Cerebra/Thumbnail.png",
    "screenshots": [
      "/Projects/Cerebra/Thumbnail.png",
      "/Projects/Cerebra/Start.png",
      "/Projects/Cerebra/Generated maps.png",
      "/Projects/Cerebra/Features.png"
    ],
    "githubUrl": "https://github.com/omdarshan-4964/Cerebra",
    "liveUrl": "https://cerebra-ten.vercel.app/",
    "features": [
      "🧩 AI-powered learning path generation using Google Gemini API with intelligent content curation",
      "🗺️ Interactive node-based visualization with React Flow and drag-and-drop functionality",
      "🎚️ Advanced difficulty filtering system (beginner/intermediate/advanced) for personalized learning",
      "🧭 Intelligent auto-layout algorithm using Dagre for optimal map organization",
      "💾 Export functionality supporting JSON format for progress tracking and sharing",
      "🎨 Modern glassmorphic UI with gradient aesthetics and smooth animations",
      "⌨️ Keyboard shortcuts support for enhanced productivity",
      "🔍 Real-time search with match highlighting across learning nodes",
      "📚 Built-in curated templates (Web Dev, ML, Python, Data Science, Cloud Computing)",
      "⚡ Fast performance with Next.js 14 and TypeScript achieving 98+ Lighthouse score"
    ]
  },
  {
    id: 'evento',
    title: 'Evento - College Event Management System',
    description: 'Enterprise-grade MERN application managing 500+ events, 2000+ bookings with 95% conflict-free scheduling. Serving 1000+ active users.',
    longDescription: 'Evento is a comprehensive event management platform that addresses the critical issue of venue booking conflicts in educational institutions. The system has successfully managed over 500 events with 2000+ bookings, achieving 95% conflict-free scheduling. Serving 1000+ active users across multiple departments, it provides a centralized solution with intelligent conflict detection and real-time availability tracking.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    category: 'Full Stack',
    duration: 'September 2023 - July 2025',
    role: 'Full Stack Developer',
    thumbnailUrl: '/Projects/Evento/Thumbnail.png',
    screenshots: [
      "/Projects/Evento/Thumbnail.png",
      "/Projects/Evento/Student Dashboard.png",
      "/Projects/Evento/Admin Dashboard.png",
      "/Projects/Evento/Club Dashboard.png",
      "/Projects/Evento/Bookings.png",
      "/Projects/Evento/Calender.png",
      "/Projects/Evento/Venue.png",
      "/Projects/Evento/Analytics.png",
      "/Projects/Evento/Registrations.png"
    ],
    githubUrl: 'https://github.com/omdarshan-4964/Evento-College_Events_Management_System',
    liveUrl: 'https://evento-zeta-nine.vercel.app',
    features: [
      '🎯 Managed 500+ events with 2000+ bookings, achieving 95% conflict-free scheduling',
      '👥 Serving 1000+ active users across multiple departments and roles',
      '⚡ Reduced booking conflicts by 90% using intelligent conflict-detection algorithm',
      '🔒 Implemented JWT-based authentication serving 1000+ daily requests with 99% uptime',
      '📊 Built role-based dashboards processing 5000+ queries/day with <200ms response time',
      '🚀 Deployed on Vercel with automatic CI/CD, handling 10K+ monthly active sessions',
      '💾 Optimized MongoDB queries achieving 70% faster data retrieval'
    ]
  },
  {
    id: 'daimmp',
    title: 'DAiMMP - Decentralized AI Model Marketplace',
    description: 'Blockchain-powered AI marketplace processing 1000+ secure transactions. Ethereum-integrated platform with smart contract validation.',
    longDescription: 'DAiMMP revolutionizes AI model distribution through decentralized technology. This marketplace has processed over 1000 secure transactions, enabling transparent and traceable exchange of AI models while protecting intellectual property through blockchain-based validation. The platform integrates Ethereum smart contracts for automated verification and uses AI chatbot APIs to enhance user experience.',
    techStack: ['React.js', 'Node.js', 'Ethereum', 'Blockchain', 'AI/ML APIs', 'Smart Contracts'],
    category: 'Machine Learning',
    duration: 'January 2025 - May 2025',
    role: 'Backend Developer',
    thumbnailUrl: "/Projects/DAIMMP/Thumbnail.png",
    screenshots: [
      "/Projects/DAIMMP/Thumbnail.png",
      "/Projects/DAIMMP/daimmp-1.png",
      "/Projects/DAIMMP/daimmp-2.png",
      "/Projects/DAIMMP/daimmp-3.png"
    ],
    githubUrl: 'https://github.com/omdarshan-4964/DAiMMP',
    liveUrl: 'https://aimodels-frontend.onrender.com/',
    features: [
      '⛓️ Processed 1000+ blockchain transactions with 100% traceability and security',
      '🤖 Integrated AI chatbot serving 500+ user queries with 90% accuracy',
      '🔐 Implemented Ethereum smart contracts for automated validation and payment',
      '📦 Managed 200+ AI model listings with secure IPFS storage',
      '⚡ Achieved <3s transaction confirmation time using optimized blockchain calls',
      '👥 Serving 300+ registered users with JWT-based authentication',
      '🚀 Deployed microservices architecture with 98% uptime'
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
    <section className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Production-grade applications showcasing expertise in <span className="text-foreground font-semibold">Agentic AI Systems</span>, 
            <span className="text-foreground font-semibold"> Next.js Architecture</span>, and 
            <span className="text-foreground font-semibold"> Real-Time Distributed Systems</span>. 
            Serving <span className="text-primary font-bold">1000+ users</span> across 6 deployed applications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-12 px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2 md:mr-4">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200 text-xs md:text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  {/* Impact Badge Overlay */}
                  <div className="relative">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={project.thumbnailUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500/90 text-white border-0 shadow-lg">
                        ✓ Live
                      </Badge>
                    </div>
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
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          asChild
                          className="flex-1"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Try Demo
                          </a>
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        className={project.liveUrl ? "flex-1" : "flex-1"}
                        onClick={() => openProjectModal(project)}
                      >
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="px-3"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
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
                {selectedProject.liveUrl && (
                  <Button asChild className="flex-1">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Try Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild className="flex-1">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleCopyUrl(selectedProject.liveUrl || selectedProject.githubUrl, selectedProject.title)}
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