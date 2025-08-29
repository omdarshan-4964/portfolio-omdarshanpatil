import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ResumeSection from "@/components/ResumeSection"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
          {/* Resume Section */}
          <section id="resume">
            <ResumeSection />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
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