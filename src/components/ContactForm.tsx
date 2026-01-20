"use client"

import { Mail, Github, Linkedin, MapPin, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactFormProps {
  className?: string
}

export default function ContactForm({ className }: ContactFormProps) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("omdarshanpatil@gmail.com")
      toast.success("Email copied to clipboard!")
    } catch {
      toast.error("Failed to copy email")
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "omdarshanpatil@gmail.com",
      action: () => {
        window.open("mailto:omdarshanpatil@gmail.com", "_blank")
      },
      secondaryAction: {
        label: "Copy",
        action: copyEmail
      }
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      action: () => {
        window.open("https://www.linkedin.com/in/omdarshanshindepatil/", "_blank")
      }
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Follow on GitHub",
      action: () => {
        window.open("https://github.com/omdarshan-4964", "_blank")
      }
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote & Relocation",
      action: null
    }
  ]

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <Card className="bg-card">
        <CardHeader className="text-center p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 px-2">
            Open to Full-Time Roles (July 2026)
          </CardTitle>
          <CardDescription className="text-sm sm:text-base mt-2">
            Seeking full-time software engineering opportunities starting July 2026
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 sm:space-y-8 p-4 sm:p-6">
          {/* Contact Methods Grid */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-4 sm:pt-6 p-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {method.label}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold truncate mb-2 sm:mb-3">
                          {method.value}
                        </p>
                        <div className="flex gap-2">
                          {method.action && (
                            <Button
                              variant="default"
                              size="sm"
                              onClick={method.action}
                              className="flex-1"
                            >
                              {method.label === "Email" ? "Send Email" : 
                               method.label === "LinkedIn" ? "Connect" : 
                               method.label === "GitHub" ? "Follow" : "View"}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Button>
                          )}
                          {method.secondaryAction && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={method.secondaryAction.action}
                            >
                              {method.secondaryAction.label}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Quick Info Banner */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-primary/20">
            <CardContent className="pt-4 sm:pt-6 p-4">
              <div className="text-center space-y-2">
                <p className="text-xs sm:text-sm font-medium">
                  🚀 Open to opportunities in Full-Stack Development, MERN Stack, and AI Integration
                </p>
                <p className="text-xs text-muted-foreground">
                  Available for immediate joining • Open to relocation
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Response Time Note */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Usually respond within 24 hours • Prefer email for detailed inquiries</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
