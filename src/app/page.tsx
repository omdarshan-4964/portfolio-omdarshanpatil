"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import TechnicalSkillsSection from "@/components/TechnicalSkillsSection"
import CertificationsSection from "@/components/CertificationsSection"
import EducationSection from "@/components/EducationSection"
import ProjectsSection from "@/components/ProjectsSection"
import AwardsGallery from "@/components/AwardsGallery"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Omdarshan Shinde Patil",
    "jobTitle": "Next.js & AI Engineer",
    "url": "https://portfolio-omdarshanpatil.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/omdarshanshindepatil/",
      "https://github.com/omdarshan-4964",
      "https://x.com/Omdarshan_jsx",
      "https://portfolio-omdarshanpatil.vercel.app"
    ],
    "knowsAbout": [
      "Agentic AI",
      "Next.js",
      "Distributed Systems",
      "Full Stack Development",
      "React Flow",
      "TypeScript",
      "MERN Stack",
      "WebSockets",
      "Cloud Architecture"
    ],
    "description": "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems. 6 Production Apps, 99.9% Uptime.",
    "email": "omdarshanpatil@gmail.com",
    "image": "https://portfolio-omdarshanpatil.vercel.app/profile.jpeg",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KIT's College of Engineering Kolhapur"
    },
    "knowsLanguage": ["English", "Hindi", "Marathi"]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="about" className="pt-16">
          <Hero />
        </section>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-8">
          {/* Projects Section - Show work first to recruiters */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* Technical Skills Section */}
          <section id="skills">
            <TechnicalSkillsSection />
          </section>

          {/* Education Section */}
          <section id="education">
            <EducationSection />
          </section>

          {/* Certifications Section */}
          <section id="certifications">
            <CertificationsSection />
          </section>

          {/* Awards Gallery */}
          <section id="awards">
            <AwardsGallery />
          </section>

          {/* Contact Form */}
          <section id="contact">
            <ContactForm />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}