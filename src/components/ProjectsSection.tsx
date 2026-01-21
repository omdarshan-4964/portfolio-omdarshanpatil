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
    <section className={`py-8 sm:py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8 md:mb-10 lg:mb-12 space-y-2 md:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight px-2">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Production-grade applications showcasing expertise in <span className="text-foreground font-semibold">Agentic AI Systems</span>, 
            <span className="text-foreground font-semibold"> Next.js Architecture</span>, and 
            <span className="text-foreground font-semibold"> Real-Time Distributed Systems</span>. 
            Serving <span className="text-primary font-bold">1000+ users</span> across 6 deployed applications.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mr-1 sm:mr-2 md:mr-4">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Filter by:</span>
            <span className="sm:hidden">Filter:</span>
          </div>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-200 text-xs px-3 py-1.5"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="h-full hover:shadow-2xl hover:border-primary/50 transition-all duration-300 border-2 border-border bg-card relative overflow-hidden">
                  {/* Impact Badge Overlay */}
                  <div className="relative">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={project.thumbnailUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
                    </div>
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-green-500/90 text-white border-0 shadow-lg">
                        ✓ Live
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3 p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <CardTitle className="text-base sm:text-lg font-display group-hover:text-primary transition-colors leading-tight">
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

                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
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
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          asChild
                          className="w-full sm:flex-1"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Try Demo
                          </a>
                        </Button>
                      )}
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
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
                    </div>
                  </CardContent>
                  
                  {/* Hover Effect Indicator */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground">No projects found for the selected category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        <AnimatePresence>
        {selectedProject && (
          <DialogContent className="max-w-[95vw] sm:max-w-[85vw] md:max-w-3xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <DialogHeader className="space-y-3 pb-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-lg sm:text-xl md:text-2xl font-display mb-2 leading-tight pr-8">
                    {selectedProject.title}
                  </DialogTitle>
                  <Badge variant="secondary" className="mb-3">{selectedProject.category}</Badge>
                  <DialogDescription className="text-xs sm:text-sm md:text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4 sm:space-y-6">
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
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 p-0 backdrop-blur-sm bg-background/80"
                      onClick={handlePreviousImage}
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 p-0 backdrop-blur-sm bg-background/80"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {selectedProject.screenshots.map((_, index) => (
                        <motion.button
                          key={index}
                          className={`rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white w-6 sm:w-8 h-1.5 sm:h-2' : 'bg-white/50 w-1.5 sm:w-2 h-1.5 sm:h-2'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Details Grid */}
              <div className="space-y-6">
                {/* Technology Stack - Now at top for better mobile UX */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-primary">🛠️</span> Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Duration & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 bg-muted/50 rounded-lg">
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mb-1">
                      <Calendar className="h-3 w-3" />
                      Duration
                    </span>
                    <p className="font-medium text-sm sm:text-base">{selectedProject.duration}</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 mb-1">
                      <User className="h-3 w-3" />
                      Role
                    </span>
                    <p className="font-medium text-sm sm:text-base">{selectedProject.role}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-primary">✨</span> Key Achievements & Features
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs sm:text-sm leading-relaxed">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t">
                {selectedProject.liveUrl && (
                  <Button asChild className="flex-1 w-full" size="sm">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                      <span className="text-xs sm:text-sm">Try Live Demo</span>
                    </a>
                  </Button>
                )}
                <div className="flex gap-2 sm:gap-3">
                  <Button variant="outline" asChild className="flex-1" size="sm">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                      <span className="text-xs sm:text-sm">View Code</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyUrl(selectedProject.liveUrl || selectedProject.githubUrl, selectedProject.title)}
                    className="px-3 sm:px-4"
                  >
                    <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
        </AnimatePresence>
      </Dialog>
    </section>
  )
}