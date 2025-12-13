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
      date: "In Progress"
    },
    
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
    await navigator.clipboard.writeText('omdarshanpatil.official@gmail.com')
    toast.success("Email copied to clipboard")
  }

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText('+91 9359037001')
    toast.success("Phone number copied to clipboard")
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Resume</h2>
          <p className="text-muted-foreground">Download or view my complete professional background</p>
        </div>
        <div className="flex flex-wrap gap-2">
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

      {/* Technical Experience */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technical Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.technicalExperience.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div>
                <h4 className="font-semibold text-sm">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education & Certifications Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Education */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div>
                  <h4 className="font-semibold text-sm">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.date}
                    </span>
                  </div>
                </div>
                {edu.details && (
                  <ul className="space-y-1">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                {index < resumeData.education.length - 1 && (
                  <hr className="border-border mt-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="space-y-1">
                <h4 className="font-semibold text-sm">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </span>
                  {cert.credential && (
                    <span className="font-mono bg-secondary px-2 py-0.5 rounded">
                      {cert.credential}
                    </span>
                  )}
                </div>
                {index < resumeData.certifications.length - 1 && (
                  <hr className="border-border mt-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Technical Skills */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillsCategory
              title="Programming Languages"
              skills={resumeData.skills.languages}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Security & Identity"
              skills={resumeData.skills.securityIdentity}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Frontend"
              skills={resumeData.skills.frontend}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Backend"
              skills={resumeData.skills.backend}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Databases"
              skills={resumeData.skills.databases}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Cloud & DevOps"
              skills={resumeData.skills.cloudDevOps}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="CS Fundamentals"
              skills={resumeData.skills.csFundamentals}
              icon={<Code className="h-4 w-4" />}
            />
            <SkillsCategory
              title="Tools & Platforms"
              skills={resumeData.skills.toolsPlatforms}
              icon={<Code className="h-4 w-4" />}
            />
          </div>
        </CardContent>
      </Card>


      {/* Honors & Leadership */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="h-5 w-5" />
            Honors & Leadership
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {resumeData.honors.map((honor, index) => (
            <div key={index} className="space-y-2">
              <div>
                <h4 className="font-semibold text-sm">{honor.title}</h4>
                <p className="text-sm text-muted-foreground">{honor.organization}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  {honor.date}
                </span>
              </div>
              {honor.description && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {honor.description}
                </p>
              )}
              {index < resumeData.honors.length - 1 && (
                <hr className="border-border mt-4" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}