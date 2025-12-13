"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Zap, 
  Shield, 
  Database, 
  Cloud, 
  GitBranch,
  Award,
  TrendingUp,
  Users,
  Server
} from "lucide-react"

interface TechnicalHighlight {
  icon: React.ReactNode
  title: string
  description: string
  metrics: string
  color: string
}

const highlights: TechnicalHighlight[] = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimization",
    description: "Low-latency real-time systems",
    metrics: "<50ms sync latency",
    color: "text-yellow-500"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Impact",
    description: "Production apps serving real users",
    metrics: "1000+ active users",
    color: "text-blue-500"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security First",
    description: "JWT, OAuth, RBAC implementations",
    metrics: "100% secure auth",
    color: "text-green-500"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "System Reliability",
    description: "Production-grade deployments",
    metrics: "95%+ uptime",
    color: "text-purple-500"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Management",
    description: "Optimized queries & indexing",
    metrics: "70% faster retrieval",
    color: "text-orange-500"
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    description: "CI/CD, Docker, containerization",
    metrics: "Automated deployment",
    color: "text-cyan-500"
  }
]

interface SkillProficiency {
  category: string
  skills: Array<{
    name: string
    level: number // 0-100
  }>
}

const skillProficiencies: SkillProficiency[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 92 },
      { name: "WebSockets", level: 85 }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 87 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 82 },
      { name: "Query Optimization", level: 78 }
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Git/GitHub", level: 92 },
      { name: "CI/CD", level: 78 }
    ]
  }
]

interface CodingProfile {
  platform: string
  username: string
  stats: string
  link: string
  color: string
  description: string
}

const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "omdarshanpatil_kitcoek",
    stats: "138 problems solved • Rating: 1,525",
    link: "https://leetcode.com/u/omdarshanpatil_kitcoek/",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    description: "81 Easy • 54 Medium • 3 Hard | Top 37.1%"
  },
  {
    platform: "GitHub",
    username: "omdarshan-4964",
    stats: "236 commits • 20 PRs • 4 projects",
    link: "https://github.com/omdarshan-4964",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    description: "Active contributor with production apps"
  },
  {
    platform: "HackerRank",
    username: "omdarshanpatil",
    stats: "Java (5★) • SQL Certified",
    link: "https://www.hackerrank.com/profile/omdarshanpatil",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    description: "Problem Solving • Java • C++ badges"
  }
]

export default function TechnicalHighlights() {
  return (
    <div className="space-y-16">
      {/* Technical Highlights Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">
            Technical Highlights
          </h2>
          <p className="text-muted-foreground">
            Key strengths and measurable achievements in software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-secondary ${highlight.color}`}>
                    {highlight.icon}
                  </div>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {highlight.metrics}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Proficiency Section */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">
            Skills Proficiency
          </h2>
          <p className="text-muted-foreground">
            Technical expertise across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillProficiencies.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Competitive Coding Profiles */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground">
            Actively building problem-solving skills across competitive platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <Card 
              key={index} 
              className={`border-2 ${profile.color} hover:scale-105 transition-transform duration-300 cursor-pointer`}
              onClick={() => window.open(profile.link, '_blank')}
            >
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{profile.platform}</h3>
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-mono opacity-80">@{profile.username}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">{profile.stats}</p>
                  <p className="text-xs opacity-70">{profile.description}</p>
                </div>
                <div className="pt-2">
                  <span className="text-xs font-medium flex items-center gap-1">
                    View Profile →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Verified Certifications */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-display font-bold tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-muted-foreground">
            Industry-recognized certifications validating technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2 border-green-500/20 bg-green-500/5 hover:border-green-500/40 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-green-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Java (Basic)</h3>
                <Badge className="bg-green-500 text-white">Verified</Badge>
                <p className="text-xs text-muted-foreground">HackerRank</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Database className="h-8 w-8 text-blue-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">SQL (Advanced)</h3>
                <Badge className="bg-blue-500 text-white">Verified</Badge>
                <p className="text-xs text-muted-foreground">HackerRank</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Code2 className="h-8 w-8 text-purple-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Problem Solving</h3>
                <Badge className="bg-purple-500 text-white">3 Stars</Badge>
                <p className="text-xs text-muted-foreground">HackerRank</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-500/20 bg-orange-500/5 hover:border-orange-500/40 transition-all duration-300">
            <CardContent className="p-6 text-center space-y-3">
              <div className="mx-auto w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Code2 className="h-8 w-8 text-orange-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Java (5★)</h3>
                <Badge className="bg-orange-500 text-white">Gold Badge</Badge>
                <p className="text-xs text-muted-foreground">HackerRank</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Achievements Banner */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground font-medium">
                Production Apps Deployed
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1K+</div>
              <div className="text-sm text-muted-foreground font-medium">
                Active Users Served
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground font-medium">
                Average Uptime
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
