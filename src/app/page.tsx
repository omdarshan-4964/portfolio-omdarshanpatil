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
  return (
    <div className="min-h-screen bg-background">
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