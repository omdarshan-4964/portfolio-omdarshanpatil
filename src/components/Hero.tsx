"use client";

import { Download, ExternalLink, Mail, Phone, Github, Linkedin, Copy } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Omdarshan_Shindepatil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <TooltipProvider>
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                  OMDARSHAN{" "}
                  <span className="block">SHINDEPATIL</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Full-Stack Software Engineer with proven expertise in building production-ready applications serving <span className="text-primary font-semibold">1000+ users</span>.
                  Specialized in <span className="text-primary font-semibold">secure, scalable MERN stack systems</span>, <span className="text-primary font-semibold">AI integration</span>, real-time distributed computing, and API security.
                  Delivered <span className="text-primary font-semibold">5 major projects</span> with 95%+ uptime, managing complete SDLC from architecture to deployment.
                  Strong foundation in DSA, system design, and modern cloud technologies (AWS, Docker, Kubernetes).
                </p>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("omdarshanpatil.official@gmail.com", "Email")}
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      omdarshanpatil@gmail.com
                      <Copy className="h-3 w-3 opacity-50" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy email</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("9359037001", "Phone")}
                      className="flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      9359037001
                      <Copy className="h-3 w-3 opacity-50" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy phone</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open("https://github.com/omdarshan-4964", "_blank")}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open("https://www.linkedin.com/in/omdarshanshindepatil/", "_blank")}
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View LinkedIn profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open("https://x.com/Omdarshan_jsx", "_blank")}
                      className="flex items-center gap-2"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter/X
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Twitter/X profile</p>
                  </TooltipContent>
                </Tooltip>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 text-base px-6 py-3"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  onClick={scrollToProjects}
                  className="flex items-center gap-2 text-base px-6 py-3"
                >
                  View Projects
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-sm bg-card">
                <CardContent className="p-6 space-y-6">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <Avatar className="h-32 w-32">
                      <AvatarImage
                        src="/profile.jpeg"
                        alt="Omdarshan Uttam Shindepatil"
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl font-display font-semibold bg-primary text-primary-foreground">
                        OS
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Quick Stats */}
                  <div className="space-y-4 text-center">
                    <div>
                      <h3 className="font-display font-semibold text-lg">Full Stack Developer</h3>
                      <p className="text-muted-foreground text-sm">Computer Science & Business Systems</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="text-center">
                        <div className="text-2xl font-display font-bold text-primary">5</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Production Apps
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-display font-bold text-primary">1K+</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Users Served
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-display font-bold text-primary">95%</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">
                          Uptime
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-success-soft text-success text-sm font-medium">
                        <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                        Open to Opportunities
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="font-display font-medium text-sm text-center">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "WebSockets", "Docker", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="text-center pt-2">
                    <p className="text-xs text-muted-foreground">📍 Indapur, Pune, Maharashtra, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}

