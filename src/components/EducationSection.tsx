"use client"

import { GraduationCap, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Education {
  institution: string
  degree: string
  location: string
  date: string
  details?: string[]
}

const educationData: Education[] = [
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
]

export default function EducationSection() {
  return (
    <section id="education" className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Academic journey showcasing <span className="font-semibold text-foreground">strong fundamentals</span> and <span className="font-semibold text-foreground">consistent excellence</span>
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-base text-muted-foreground mt-2 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {edu.date}
                  </span>
                </div>
                
                {edu.details && (
                  <ul className="space-y-2 pt-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex} 
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Strong academic foundation with focus on <span className="font-semibold text-foreground">Computer Science fundamentals</span> and <span className="font-semibold text-foreground">practical skills</span>
          </p>
        </div>
      </div>
    </section>
  )
}
