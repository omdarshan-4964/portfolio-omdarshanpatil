"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Palette, Server, Database, Cloud, Cpu, Wrench, Sparkles, GitBranch } from "lucide-react"

const skillsData = [
  {
    category: "Frontend & UI",
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    skills: ["React 19", "Next.js 16", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Responsive Design"]
  },
  {
    category: "Backend Architecture",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "WebSockets", "Microservices", "RESTful APIs"]
  },
  {
    category: "Agentic AI & ML",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    skills: ["Gemini 1.5 Flash", "RAG Pipelines", "React Flow", "OpenAI API", "Multi-Agent Systems"]
  },
  {
    category: "Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["TypeScript", "JavaScript (ES6+)", "Java", "C++", "Python"]
  },
  {
    category: "Database & Cloud",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    skills: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Prisma ORM"]
  },
  {
    category: "Security & Identity",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    skills: ["JWT Authentication", "OAuth 2.0", "RBAC", "OIDC", "API Security"]
  },
  {
    category: "DevOps & Tools",
    icon: GitBranch,
    color: "from-teal-500 to-cyan-500",
    skills: ["Git", "GitHub Actions", "Vercel", "Postman", "CI/CD Pipelines"]
  },
  {
    category: "CS Fundamentals",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    skills: ["Data Structures", "Algorithms", "System Design", "OOP", "Distributed Systems"]
  }
]

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent px-2">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive technical expertise across <span className="font-semibold text-foreground">full-stack development</span>, <span className="font-semibold text-foreground">security</span>, and <span className="font-semibold text-foreground">cloud technologies</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${skillGroup.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-2.5 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Continuously expanding skillset through hands-on projects and production deployments
          </p>
        </div>
      </div>
    </section>
  )
}
