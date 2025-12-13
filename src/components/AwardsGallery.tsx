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
  category: 'Leadership' | 'Competition'
  imageUrl: string
  organization: string
}

const AWARDS: Award[] = [
  {
    id: 'academic-achievement',
    title: 'Academic Excellence Recognition',
    description: 'Winner (Semester VI) in PBL Day Competition for "DAiMMP - Decentralized AI Model in Marketplace"',
    date: '2025',
    category: 'Competition',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128945403-5oujh7ywwd9.jpg',
    organization: 'KIT\'s College of Engineering Kolhapur'
  },
  {
    id: 'competition-winner',
    title: 'PBL Day Competition Winner',
    description: '1st Runner Up (Semester III) in PBL Day Competition for "Evento - College Events Management Systems"',
    date: '2025',
    category: 'Competition',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128947010-jvz9dk7rwia.jpg',
    organization: 'KIT\'s College of Engineering Kolhapur'
  },
  {
    id: 'excellence-award',
    title: 'Tehnical Co-Head Pioneer 2024',
    description: 'Recognized for outstanding performance as a Technical Co-Head in Pioneer 2024',
    date: '2024',
    category: 'Leadership',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128948676-r7cyjib55id.jpg',
    organization: 'Pioneer 2024, KITCOEK - Indian Society for Technical Education'
  },
  {
    id: 'leadership-group',
    title: 'Technical Leadership Team',
    description: 'A special moment of all volunteers with their beloved Secretary',
    date: '2025',
    category: 'Leadership',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128951102-3ec8nkic5kf.jpg',
    organization: 'Pioneer 2025, KITCOEK - Indian Society for Technical Education'
  },
  {
    id: 'pioneer-secretary',
    title: 'Secretary - Pioneer 2025',
    description: 'Led 19-member core team and 150+ volunteers for national-level technical event',
    date: '2025',
    category: 'Leadership',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756128953713-pglw1ww1ndn.jpg',
    organization: 'Pioneer 2025, KITCOEK - Indian Society for Technical Education'
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
    <section className={`py-16 px-4 bg-gradient-to-b from-background to-secondary/20 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-10 w-10 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Recognition for <span className="font-semibold text-foreground">academic excellence</span>, <span className="font-semibold text-foreground">leadership roles</span>, and <span className="font-semibold text-foreground">technical innovation</span>
          </p>
        </div>

        {/* Awards Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((award, index) => {
            const IconComponent = CATEGORY_ICONS[award.category]
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(award)}
              >
                <div className="relative bg-card border-2 border-border rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image with Overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={award.imageUrl} 
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`text-xs font-semibold backdrop-blur-sm ${
                        award.category === 'Leadership' 
                          ? 'bg-green-500/90 text-white border-green-400' 
                          : 'bg-yellow-500/90 text-white border-yellow-400'
                      }`}>
                        <IconComponent className="h-3 w-3 mr-1" />
                        {award.category}
                      </Badge>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="text-xs font-semibold backdrop-blur-sm bg-background/90">
                        {award.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {award.description}
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-xs text-muted-foreground font-medium line-clamp-1">
                        {award.organization}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Click on any award to view full details and larger images
          </p>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedAward} onOpenChange={closeLightbox}>
          {selectedAward && (
            <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden bg-background">
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background border shadow-lg"
                  onClick={closeLightbox}
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Navigation Buttons */}
                {AWARDS.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background border shadow-lg"
                      onClick={goToPrevious}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"  
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background border shadow-lg"
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}

                {/* Image Container */}
                <div className="relative aspect-video bg-black/95">
                  <img 
                    src={selectedAward.imageUrl} 
                    alt={selectedAward.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Award Details */}
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge className={`font-semibold ${
                          selectedAward.category === 'Leadership' 
                            ? 'bg-green-500 text-white' 
                            : 'bg-yellow-500 text-white'
                        }`}>
                          {React.createElement(CATEGORY_ICONS[selectedAward.category], { className: 'h-4 w-4 mr-1' })}
                          {selectedAward.category}
                        </Badge>
                        <Badge variant="outline" className="font-semibold">
                          {selectedAward.date}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {selectedAward.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {selectedAward.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2">
                        <Award className="h-5 w-5 text-primary" />
                        <p className="font-semibold text-foreground">{selectedAward.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Indicators */}
                  {AWARDS.length > 1 && (
                    <div className="flex justify-center gap-2 pt-4 border-t border-border">
                      {AWARDS.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-primary w-8' 
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                          onClick={() => {
                            setCurrentIndex(index)
                            setSelectedAward(AWARDS[index])
                          }}
                          aria-label={`View award ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}