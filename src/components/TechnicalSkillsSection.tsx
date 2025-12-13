"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Palette, Server, Database, Cloud, Cpu, Wrench } from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "C++", "C", "HTML5", "CSS3"]
  },
  {
    category: "Security & Identity",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    skills: ["JWT Authentication", "OAuth 2.0", "OpenID Connect (OIDC)", "RESTful API Security", "Role-based Access Control (RBAC)"]
  },
  {
    category: "Frontend",
    icon: Palette,
    color: "from-purple-500 to-indigo-500",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Secure Business Logic", "Authentication Middleware"]
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-orange-500 to-amber-500",
    skills: ["MongoDB", "MySQL", "Data Integrity Management", "Query Optimization"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    skills: ["AWS", "Docker", "Kubernetes (Familiar)", "Git", "CI/CD Concepts"]
  },
  {
    category: "CS Fundamentals",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Programming", "System Design"]
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "from-teal-500 to-cyan-500",
    skills: ["VS Code", "Postman", "GitHub", "npm/yarn"]
  }
]

export default function TechnicalSkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technical expertise across <span className="font-semibold text-foreground">full-stack development</span>, <span className="font-semibold text-foreground">security</span>, and <span className="font-semibold text-foreground">cloud technologies</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skillGroup.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-base group-hover:text-primary transition-colors">
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

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Continuously expanding skillset through hands-on projects and production deployments
          </p>
        </div>
      </div>
    </section>
  )
}
