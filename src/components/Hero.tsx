"use client";

import { ExternalLink, Mail, Phone, Github, Linkedin, Copy, MapPin, Download, Sparkles, Code2, Award, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <TooltipProvider>
      <section className={`relative py-16 lg:py-24 overflow-hidden ${className}`}>
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        </div>

        <div className="container relative mx-auto px-4 max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Column - Profile Card */}
            <div className="flex justify-center lg:justify-start">
              <Card className="group relative w-full max-w-md bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/20">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <CardContent className="relative p-8 space-y-6">
                  {/* Avatar Section with Enhanced Design */}
                  <div className="flex justify-center">
                    <div className="relative group/avatar">
                      {/* Animated Gradient Ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-md animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-sm opacity-75"></div>
                      
                      <Avatar className="h-44 w-44 relative border-4 border-background shadow-xl ring-2 ring-primary/50 group-hover/avatar:ring-primary transition-all duration-300">
                        <AvatarImage
                          src="/profile.jpeg"
                          alt="Omdarshan Uttam Shindepatil"
                          className="object-cover"
                        />
                        <AvatarFallback className="text-4xl font-display font-semibold bg-gradient-to-br from-primary to-purple-600 text-white">
                          OS
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Badge Overlay */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-2 rounded-full shadow-lg border-2 border-background">
                        <Sparkles className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-2 text-center">
                    <h2 className="font-display font-bold text-2xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                      Full Stack Developer
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">
                      Computer Science & Business Systems
                    </p>
                  </div>

                  {/* Key Metrics - Enhanced */}
                  <div className="grid grid-cols-3 gap-3 py-5">
                    <div className="group/stat text-center p-3 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 hover:from-primary/20 hover:to-purple-500/20 transition-all duration-300 border border-primary/20">
                      <div className="flex justify-center mb-1">
                        <Code2 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">5</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                        Production Apps
                      </div>
                    </div>
                    
                    <div className="group/stat text-center p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-purple-500/20">
                      <div className="flex justify-center mb-1">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="text-2xl font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">1K+</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                        Users Served
                      </div>
                    </div>
                    
                    <div className="group/stat text-center p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 border border-green-500/20">
                      <div className="flex justify-center mb-1">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="text-2xl font-display font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">95%</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                        Uptime
                      </div>
                    </div>
                  </div>

                  {/* Availability Badge - Enhanced */}
                  <div className="flex justify-center pt-2">
                    <div className="relative inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 shadow-lg shadow-green-500/10">
                      <div className="absolute inset-0 bg-green-500/5 rounded-full animate-pulse"></div>
                      <div className="relative flex items-center gap-2">
                        <div className="relative">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                          Open to Full-Time Roles
                        </span>
                        <Badge variant="secondary" className="ml-1 text-[10px] px-1.5 py-0 bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30">
                          July 2026
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Core Technologies - Refined */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "WebSockets", "Docker", "AWS"].map((tech, index) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200 cursor-default font-medium shadow-sm"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Location - Enhanced */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-3 border-t border-border/50">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Pune, Maharashtra, India</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Hero Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Main Heading */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.1]">
                    <span className="relative inline-block">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-600 animate-gradient">
                        OMDARSHAN
                      </span>
                      {/* Decorative underline */}
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </span>
                    <br />
                    <span className="text-foreground">SHINDE PATIL</span>
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/90">
                      Full-Stack Software Engineer
                    </h2>
                    <Badge className="text-sm px-3 py-1 bg-gradient-to-r from-primary to-purple-600 border-0 shadow-lg">
                      Class of 2026
                    </Badge>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 border border-border/50 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-600 rounded-l-xl"></div>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Full-Stack Software Engineer with proven expertise in building production-ready applications. Specialized in secure, scalable MERN stack systems, real-time distributed computing, and API security with strong foundation in DSA, system design, and modern cloud technologies (AWS, Docker).
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Quick Contact</h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="default"
                        onClick={() => copyToClipboard("omdarshanpatil@gmail.com", "Email")}
                        className="flex-1 sm:flex-none group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        <Mail className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                        <span className="font-medium">Email</span>
                        <Copy className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">omdarshanpatil@gmail.com</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="default"
                        onClick={() => copyToClipboard("+91 9359037001", "Phone")}
                        className="flex-1 sm:flex-none group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        <Phone className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                        <span className="font-medium">+91 9359037001</span>
                        <Copy className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium">Click to copy</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Social & Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Connect & Explore</h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {/* Social Links */}
                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => window.open("https://github.com/omdarshan-4964", "_blank")}
                    className="group hover:border-primary/50 hover:bg-primary/5"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                    GitHub
                    <ExternalLink className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100" />
                  </Button>

                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => window.open("https://www.linkedin.com/in/omdarshanshindepatil/", "_blank")}
                    className="group hover:border-blue-500/50 hover:bg-blue-500/5"
                  >
                    <Linkedin className="h-4 w-4 mr-2 group-hover:text-blue-600 transition-colors" />
                    LinkedIn
                    <ExternalLink className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100" />
                  </Button>

                  <Button
                    variant="outline"
                    size="default"
                    onClick={() => window.open("https://x.com/Omdarshan_jsx", "_blank")}
                    className="group hover:border-primary/50 hover:bg-primary/5"
                  >
                    <svg className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    Twitter/X
                    <ExternalLink className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100" />
                  </Button>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    size="lg"
                    onClick={handleDownloadResume}
                    className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={scrollToContact}
                    className="group hover:border-primary/50 hover:bg-primary/5"
                  >
                    <Mail className="h-4 w-4 mr-2 group-hover:text-primary transition-colors" />
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}

