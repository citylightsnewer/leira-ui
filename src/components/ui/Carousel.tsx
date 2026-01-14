import { useState, useEffect, useCallback, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: string
  content: ReactNode
}

interface CarouselProps {
  items: CarouselItem[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  variant?: 'default' | 'fade' | 'slide'
  className?: string
}

export function Carousel ({
  items,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  variant = 'default',
  className = ''
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [items.length, isTransitioning])

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [items.length, isTransitioning])

  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, goToNext])

  const getSlideStyles = () => {
    switch (variant) {
      case 'fade':
        return 'transition-opacity duration-500'
      case 'slide':
        return 'transition-transform duration-500 ease-out'
      default:
        return 'transition-all duration-500'
    }
  }

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {/* Slides Container */}
      <div
        className={`flex ${variant === 'slide' ? '' : ''}`}
        style={variant === 'slide' ? { transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 500ms ease-out' } : undefined}
      >
        {variant === 'slide'
          ? (
              items.map((item) => (
                <div key={item.id} className='w-full flex-shrink-0'>
                  {item.content}
                </div>
              ))
            )
          : (
            <div className={`w-full ${getSlideStyles()}`}>
              {items[currentIndex]?.content}
            </div>
            )}
      </div>

      {/* Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className='absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm'
            aria-label='Previous'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={goToNext}
            className='absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm'
            aria-label='Next'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && items.length > 1 && (
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Image Carousel variant
interface ImageCarouselProps {
  images: Array<{ src: string; alt: string; caption?: string }>
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  showCaption?: boolean
  aspectRatio?: 'video' | 'square' | 'wide'
  className?: string
}

const aspectRatioStyles = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[21/9]'
}

export function ImageCarousel ({
  images,
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  showCaption = true,
  aspectRatio = 'video',
  className = ''
}: ImageCarouselProps) {
  const items = images.map((img, index) => ({
    id: `img-${index}`,
    content: (
      <div className={`relative ${aspectRatioStyles[aspectRatio]} bg-[var(--bg-secondary)]`}>
        <img
          src={img.src}
          alt={img.alt}
          className='w-full h-full object-cover'
        />
        {showCaption && img.caption && (
          <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
            <p className='text-white text-sm'>{img.caption}</p>
          </div>
        )}
      </div>
    )
  }))

  return (
    <Carousel
      items={items}
      autoPlay={autoPlay}
      interval={interval}
      showArrows={showArrows}
      showDots={showDots}
      variant='slide'
      className={className}
    />
  )
}

// Card Carousel variant
interface CardCarouselProps {
  children: ReactNode[]
  visibleCards?: number
  gap?: number
  showArrows?: boolean
  className?: string
}

export function CardCarousel ({
  children,
  visibleCards = 3,
  gap = 16,
  showArrows = true,
  className = ''
}: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, children.length - visibleCards)

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className={`relative ${className}`}>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-out'
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards + gap / visibleCards)}%)`,
            gap: `${gap}px`
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className='flex-shrink-0'
              style={{ width: `calc(${100 / visibleCards}% - ${gap * (visibleCards - 1) / visibleCards}px)` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && children.length > visibleCards && (
        <>
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className='absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === maxIndex}
            className='absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </>
      )}
    </div>
  )
}

// Testimonial Carousel variant
interface Testimonial {
  id: string
  content: string
  author: string
  role?: string
  avatar?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function TestimonialCarousel ({
  testimonials,
  autoPlay = true,
  interval = 6000,
  className = ''
}: TestimonialCarouselProps) {
  const items = testimonials.map((t) => ({
    id: t.id,
    content: (
      <div className='p-8 text-center'>
        <div className='text-4xl text-violet-400 mb-4'>"</div>
        <p className='text-lg text-[var(--text-secondary)] mb-6 italic max-w-2xl mx-auto'>
          {t.content}
        </p>
        <div className='flex items-center justify-center gap-3'>
          {t.avatar
            ? (
              <img src={t.avatar} alt={t.author} className='w-12 h-12 rounded-full object-cover' />
              )
            : (
              <div className='w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-semibold'>
                {t.author.charAt(0)}
              </div>
              )}
          <div className='text-left'>
            <p className='font-semibold text-[var(--text-primary)]'>{t.author}</p>
            {t.role && <p className='text-sm text-[var(--text-muted)]'>{t.role}</p>}
          </div>
        </div>
      </div>
    )
  }))

  return (
    <Carousel
      items={items}
      autoPlay={autoPlay}
      interval={interval}
      showArrows={false}
      showDots
      variant='fade'
      className={`bg-[var(--bg-card)] border border-[var(--border-color)] ${className}`}
    />
  )
}
