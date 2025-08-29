"use client"

import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'  
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { ChevronLeft, ChevronRight, X, Award, Users, Trophy, GraduationCap } from 'lucide-react'

interface Award {
  id: string
  title: string
  description: string
  date: string
  category: 'Academic' | 'Leadership' | 'Competition' | 'Certification'
  imageUrl: string
  organization: string
}

const AWARDS: Award[] = [
  {
    id: 'academic-achievement',
    title: 'Academic Excellence Recognition',
    description: 'Recognition for outstanding academic performance and project development',
    date: '2024-2025',
    category: 'Academic',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128945403-5oujh7ywwd9.jpg',
    organization: 'KIT\'s College of Engineering Kolhapur'
  },
  {
    id: 'competition-winner',
    title: 'PBL Day Competition Winner',
    description: 'Winner (Semester VI) for developing innovative solution concepts including "Evento" and "DAiMMP"',
    date: '2025',
    category: 'Competition',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128947010-jvz9dk7rwia.jpg',
    organization: 'KIT\'s College of Engineering Kolhapur'
  },
  {
    id: 'excellence-award',
    title: 'Excellence in Innovation Award',
    description: 'Recognized for outstanding innovation and technical excellence in project development',
    date: '2024',
    category: 'Academic',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128948676-r7cyjib55id.jpg',
    organization: 'KIT\'s College of Engineering Kolhapur'
  },
  {
    id: 'leadership-group',
    title: 'Technical Leadership Team',
    description: 'Led technical teams and organized national-level events with 3000+ participants',
    date: '2024-2025',
    category: 'Leadership',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128951102-3ec8nkic5kf.jpg',
    organization: 'Pioneer, KITCOEK - ISTE Student Chapter'
  },
  {
    id: 'pioneer-secretary',
    title: 'Secretary - Pioneer 2025',
    description: 'Secretary (2025) & Technical Co-Head (2024) - Led 19-member core team and 150+ volunteers for national-level technical event',
    date: '2025',
    category: 'Leadership',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128953713-pglw1ww1ndn.jpg',
    organization: 'Pioneer, KITCOEK - Indian Society for Technical Education'
  }
]

const CATEGORY_ICONS = {
  Academic: GraduationCap,
  Leadership: Users,
  Competition: Trophy,
  Certification: Award
}

const CATEGORY_COLORS = {
  Academic: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  Leadership: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Competition: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Certification: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
}

interface AwardsGalleryProps {
  className?: string
}

export default function AwardsGallery({ className = '' }: AwardsGalleryProps) {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((award: Award) => {
    const index = AWARDS.findIndex(a => a.id === award.id)
    setSelectedAward(award)
    setCurrentIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedAward(null)
  }, [])

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : AWARDS.length - 1
    setCurrentIndex(newIndex)
    setSelectedAward(AWARDS[newIndex])
  }, [currentIndex])

  const goToNext = useCallback(() => {
    const newIndex = currentIndex < AWARDS.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedAward(AWARDS[newIndex])
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedAward) {
        switch (e.key) {
          case 'Escape':
            closeLightbox()
            break
          case 'ArrowLeft':
            goToPrevious()
            break
          case 'ArrowRight':
            goToNext()
            break
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedAward, goToPrevious, goToNext, closeLightbox])

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Achievements & Awards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, leadership roles, and technical innovation across competitions and organizational responsibilities.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {AWARDS.map((award, index) => {
            const IconComponent = CATEGORY_ICONS[award.category]
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(award)}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={award.imageUrl} 
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={`text-xs ${CATEGORY_COLORS[award.category]}`}>
                        <IconComponent className="h-3 w-3 mr-1" />
                        {award.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{award.date}</span>
                    </div>
                    <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {award.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">
                      {award.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedAward} onOpenChange={closeLightbox}>
          {selectedAward && (
            <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={closeLightbox}
                >
                  <X className="h-4 w-4" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"  
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-0"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image */}
                <div className="aspect-video bg-black">
                  <img 
                    src={selectedAward.imageUrl} 
                    alt={selectedAward.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Award Details */}
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${CATEGORY_COLORS[selectedAward.category]}`}>
                          {React.createElement(CATEGORY_ICONS[selectedAward.category], { className: 'h-3 w-3 mr-1' })}
                          {selectedAward.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{selectedAward.date}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">{selectedAward.title}</h3>
                      <p className="text-muted-foreground mb-3">{selectedAward.description}</p>
                      <p className="text-sm font-medium text-primary">{selectedAward.organization}</p>
                    </div>
                  </div>

                  {/* Navigation Indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {AWARDS.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                        onClick={() => {
                          setCurrentIndex(index)
                          setSelectedAward(AWARDS[index])
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}