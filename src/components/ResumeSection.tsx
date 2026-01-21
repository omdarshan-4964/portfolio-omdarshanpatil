"use client"

import { useState } from "react"
import { Download, Printer, Copy, ChevronDown, ChevronUp, Mail, Phone, MapPin, Calendar, Award, GraduationCap, Code, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { toast } from "sonner"

interface ResumeData {
  summary: string
  education: Array<{
    institution: string
    degree: string
    location: string
    date: string
    details?: string[]
  }>
  skills: {
    languages: string[]
    securityIdentity: string[]
    frontend: string[]
    backend: string[]
    databases: string[]
    cloudDevOps: string[]
    csFundamentals: string[]
    toolsPlatforms: string[]
    webTechnologies?: string[] // optional, since not used in your data
  }
  certifications: Array<{
    name: string
    issuer: string
    date: string
    credential?: string
  }>
  honors: Array<{
    title: string
    organization: string
    date: string
    description?: string
  }>
  technicalExperience: Array<{
    title: string
    duration: string
    description: string
    achievements: string[]
  }>
}

const resumeData: ResumeData = {
  summary: "Full-Stack Software Engineer with proven expertise in building production-ready applications serving 1000+ users. Specialized in secure, scalable MERN stack systems, real-time distributed computing, and API security. Delivered 4 major projects with 95%+ uptime, managing complete SDLC from architecture to deployment. Strong foundation in DSA, system design, and modern cloud technologies (AWS, Docker, Kubernetes).",
  education: [
    {
      institution: "KIT's College of Engineering Kolhapur (Empowered Autonomous)",
      degree: "B.Tech in Computer Science and Business Systems",
      location: "Kolhapur, Maharashtra",
      date: "June 2026",
      details: ["CGPA: 7.69", "Relevant Coursework: Data Structures & Algorithms, OOP, OS, DBMS, SDLC, Computer Networking"]
    },
    {
      institution: "Dr.Kadam Jeevan Vikas Prashala & Jr. College",
      degree: "Higher Secondary Education",
      location: "Pune, Maharashtra",
      date: "June 2021",
      details: ["Grade: 92.17%"]
    },
    {
      institution: "S.B.Patil Public School, Indapur",
      degree: "Secondary Education",
      location: "Pune, Maharashtra",
      date: "June 2019",
      details: ["Grade: 86.40%"]
    }
  ],
  skills: {
  languages: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C++", "C", "HTML5", "CSS3"],
  securityIdentity: ["JWT Authentication", "OAuth 2.0", "OpenID Connect (OIDC)", "RESTful API Security", "Role-based Access Control (RBAC)"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Secure Business Logic", "Authentication Middleware"],
  databases: ["MongoDB", "MySQL", "Data Integrity Management", "Query Optimization"],
  cloudDevOps: ["AWS", "Docker", "Kubernetes (Familiar)", "Git", "CI/CD Concepts"],
  csFundamentals: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networking", "SDLC", "Operating Systems"],
  toolsPlatforms: ["Postman", "VS Code", "GitHub", "Vercel", "Render", "Agile/Scrum Methodologies", "Linux CLI"]
},
  certifications: [
    {
      name: "AIML Virtual Internship Certificate",
      issuer: "Google via EduSkills",
      date: "Nov 2023"
    },
    {
      name: "Cybersecurity Virtual Internship Certificate",
      issuer: "Palo Alto Networks via EduSkills",
      date: "March 2024"
    },
    {
      name: "Full Stack Web Development Cohort – 0–100",
      issuer: "100xDevs",
      date: "May 2024"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      date: "Dec 2024"
    }
  ],
  honors: [
  {
    title: "Secretary",
    organization: "Pioneer, KITCOEK - Indian Society for Technical Education",
    date: "2025",
    description: "Elected as Secretary of the Pioneer committee under ISTE, entrusted with overseeing event planning, coordination, and execution. Spearheaded strategic initiatives, collaborated with faculty and sponsors, and fostered innovation-driven culture across a 19-member core team and 150+ volunteers."
  },
  {
    title: "Technical Co-Head",
    organization: "Pioneer, KITCOEK - Indian Society for Technical Education",
    date: "2024",
    description: "Led the technical division of Pioneer 2024, managing website development, QR generation, digital registrations, and technical troubleshooting. Guided a technical team to deliver seamless digital infrastructure, ensuring smooth participation for 3000+ attendees."
  },
  {
    title: "Winner (Semester VI)",
    organization: "PBL Day Competition, KITCOEK",
    date: "2025",
    description: "Secured 1st place in Semester VI for the innovative project 'DAiMMP' (Data AI-Driven Multi-Modal Platform). Recognized for designing an impactful solution with potential industry applications."
  },
  {
    title: "1st Runner-Up (Semester III)",
    organization: "PBL Day Competition, KITCOEK",
    date: "2023",
    description: "Achieved 2nd place in Semester III for the project 'Evento,' a platform conceptualized to simplify event management and participant coordination. Appreciated for creative design and problem-solving approach."
  }
],
  technicalExperience: [
    {
      title: "CodeStream - Real-Time Collaborative Code Editor",
      duration: "August 2025 - September 2025",
      description: "Production-ready collaborative coding platform with <50ms latency, supporting 50+ concurrent users.",
      achievements: [
        "Achieved <50ms synchronization latency serving 500+ collaborative sessions with zero data loss",
        "Built distributed WebSocket architecture supporting 50+ concurrent users per room with 99.5% uptime",
        "Implemented JWT authentication and RBAC serving secure multi-user collaboration"
      ]
    },
    {
      title: "Evento - College Event Management System",
      duration: "September 2023 - July 2025",
      description: "Enterprise-grade MERN application managing 500+ events, 2000+ bookings with 95% conflict-free scheduling.",
      achievements: [
        "Managed 500+ events with 2000+ bookings, reducing booking conflicts by 90% through intelligent algorithms",
        "Serving 1000+ active users across departments, processing 5000+ queries/day with <200ms response time",
        "Optimized MongoDB queries achieving 70% faster data retrieval and 99% uptime on production"
      ]
    },
    {
      title: "DAiMMP - Decentralized AI Model Marketplace",
      duration: "January 2025 - May 2025",
      description: "Blockchain-powered AI marketplace processing 1000+ secure transactions with Ethereum integration.",
      achievements: [
        "Processed 1000+ blockchain transactions with 100% traceability using Ethereum smart contracts",
        "Integrated AI chatbot serving 500+ user queries with 90% accuracy and <3s response time",
        "Deployed microservices architecture managing 200+ AI model listings with 98% uptime"
      ]
    }
  ]
}

interface SkillsCategoryProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

function SkillsCategory({ title, skills, icon }: SkillsCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldCollapse = skills.length > 4
  const displaySkills = shouldCollapse && !isExpanded ? skills.slice(0, 3) : skills

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-semibold text-sm">{title}</h4>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {displaySkills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        {shouldCollapse && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Show {skills.length - 3} more <ChevronDown className="h-3 w-3" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Omdarshan_Shindepatil_Resume.pdf'
    link.click()
    toast.success("Resume download started")
  }

  const handlePrintResume = () => {
    window.print()
    toast.success("Print dialog opened")
  }

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('omdarshanpatil@gmail.com')
    toast.success("Email copied to clipboard")
  }

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText('+91 9359037001')
    toast.success("Phone number copied to clipboard")
  }

  return (
    <div className="space-y-8">
      {/* Header with Actions */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
          Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Resume</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Comprehensive overview of <span className="text-foreground font-semibold">professional experience</span> and <span className="text-foreground font-semibold">qualifications</span>
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium border border-green-500/20">
          🎯 Seeking Full-Time Opportunities (July 2026)
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button
            variant="outline"
            size="sm"
            onClick={handleCopyEmail}
            className="gap-2"
          >
            <Mail className="h-4 w-4" />
            Copy Email
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyPhone}
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            Copy Phone
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrintResume}
            className="gap-2"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button
            size="sm"
            onClick={handleDownloadResume}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
      </div>

      {/* Summary */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{resumeData.summary}</p>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Indapur 413106, Pune, Maharashtra, India</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}