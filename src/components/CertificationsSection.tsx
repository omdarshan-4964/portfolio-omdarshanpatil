"use client"

import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Certification {
  name: string
  issuer: string
  date: string
  type: "professional" | "hackerrank"
  color?: string
  badge?: string
}

const certifications: Certification[] = [
  // Professional Certifications (4)
  {
    name: "AIML Virtual Internship Certificate",
    issuer: "Google via EduSkills",
    date: "Nov 2023",
    type: "professional",
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Cybersecurity Virtual Internship Certificate",
    issuer: "Palo Alto Networks via EduSkills",
    date: "March 2024",
    type: "professional",
    color: "from-red-500 to-orange-500"
  },
  {
    name: "Full Stack Web Development Cohort – 0–100",
    issuer: "100xDevs",
    date: "May 2024",
    type: "professional",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    date: "Dec 2024",
    type: "professional",
    color: "from-purple-500 to-pink-500"
  },
  // HackerRank Certifications (4)
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "Verified",
    type: "hackerrank",
    badge: "Certified",
    color: "from-green-600 to-emerald-600"
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Verified",
    type: "hackerrank",
    badge: "Certified",
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Problem Solving",
    issuer: "HackerRank",
    date: "3 Stars",
    type: "hackerrank",
    badge: "3 ★",
    color: "from-purple-600 to-violet-600"
  },
  {
    name: "Java (5★)",
    issuer: "HackerRank",
    date: "Gold Badge",
    type: "hackerrank",
    badge: "Gold",
    color: "from-orange-600 to-yellow-500"
  }
]

export default function CertificationsSection() {
  const professionalCerts = certifications.filter(c => c.type === "professional")
  const hackerRankCerts = certifications.filter(c => c.type === "hackerrank")

  return (
    <section id="certifications" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-10 w-10 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized certifications validating <span className="font-semibold text-foreground">technical expertise</span> and <span className="font-semibold text-foreground">problem-solving abilities</span>
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {professionalCerts.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.color} shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* HackerRank Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
            HackerRank Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackerRankCerts.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    {cert.badge && (
                      <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0 mb-2`}>
                        {cert.badge}
                      </Badge>
                    )}
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Total: <span className="font-semibold text-foreground">{certifications.length}</span> verified certifications demonstrating continuous learning and skill development
          </p>
        </div>
      </div>
    </section>
  )
}
