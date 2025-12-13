"use client"

import { ArrowUp, Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      scrollToTop()
    }
  }

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Logo/Name + Tagline */}
          <div className="flex flex-col space-y-1">
            <div className="font-display font-semibold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Omdarshan Shindepatil
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Full-Stack Software Engineer • Building Scalable Solutions
            </p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap gap-6 lg:gap-8">
            <Link
              href="/#projects"
              className="text-sm text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="text-sm text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Resume
            </a>
            <Link
              href="/#contact"
              className="text-sm text-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Social Icons + Contact */}
          <div className="flex flex-col lg:items-end space-y-3">
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/omdarshan-4964"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/omdarshanshindepatil/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/Omdarshan_jsx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:omdarshanpatil@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              omdarshanpatil@gmail.com
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span>&copy; 2025 Omdarshan Shindepatil. All rights reserved.</span>
            {/* <span className="hidden md:inline">•</span> */}
            {/* <a
              href="/privacy"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Terms
            </a> */}
            <span>•</span>
            <span>Built with Love and AI</span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            className="self-start md:self-auto text-xs"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3 w-3 mr-1" />
            Back to top
          </Button>
        </div>
      </div>
    </footer>
  )
}
