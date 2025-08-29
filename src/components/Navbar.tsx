"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { toast } from "sonner"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { 
    href: "https://github.com/omdarshan-4964", 
    icon: Github, 
    label: "GitHub" 
  },
  { 
    href: "https://www.linkedin.com/in/omdarshanshindepatil/", 
    icon: Linkedin, 
    label: "LinkedIn" 
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const copyEmailToClipboard = async () => {
    const email = "hello@example.com"
    
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(email)
        toast.success("Email copied to clipboard")
      } catch (err) {
        toast.error("Failed to copy email")
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                //href="#" 
                className="text-xl font-bold font-display text-foreground hover:text-primary transition-colors"
                onClick={(e) => handleSmoothScroll(e, "#")}
              >
                OS
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.href}
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* Resume Download */}
              <a href="/resume.pdf" download>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-sm font-medium"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-9 p-0"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6">
                      <span className="text-lg font-bold font-display">Menu</span>
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-9 w-9 p-0"
                          aria-label="Close menu"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetClose>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-3 mb-8">
                      {navLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                          onClick={(e) => handleSmoothScroll(e, link.href)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-col space-y-3 mb-8">
                      <Button
                        onClick={copyEmailToClipboard}
                        variant="outline"
                        className="justify-start"
                      >
                        <Mail className="h-4 w-4 mr-3" />
                        Copy Email
                      </Button>
                      
                      <Button variant="outline" className="justify-start">
                        <Download className="h-4 w-4 mr-3" />
                        Download Resume
                      </Button>
                    </div>

                    {/* Social Links */}
                    <div className="mt-auto">
                      <div className="flex items-center space-x-4 pt-6 border-t border-border">
                        {socialLinks.map((social) => (
                          <Button
                            key={social.href}
                            variant="ghost"
                            size="sm"
                            className="h-10 w-10 p-0"
                            asChild
                          >
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.label}
                            >
                              <social.icon className="h-5 w-5" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}