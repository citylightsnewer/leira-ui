import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Carousel, ImageCarousel, CardCarousel, TestimonialCarousel } from '../components/ui/Carousel'
import { Card, CardBody } from '../components/ui/Card'
import { Alert } from '../components/ui/Alert'

const carouselCode = `import { useState, useEffect, useCallback, type ReactNode } from 'react'
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
  items, autoPlay = false, interval = 5000,
  showArrows = true, showDots = true, variant = 'default', className = ''
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

  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [autoPlay, interval, goToNext])

  return (
    <div className={\`relative overflow-hidden rounded-xl \${className}\`}>
      {/* Slides */}
      <div
        className="flex"
        style={variant === 'slide' ? { transform: \`translateX(-\${currentIndex * 100}%)\`, transition: 'transform 500ms ease-out' } : undefined}
      >
        {variant === 'slide'
          ? items.map((item) => <div key={item.id} className="w-full flex-shrink-0">{item.content}</div>)
          : <div className="w-full transition-all duration-500">{items[currentIndex]?.content}</div>
        }
      </div>

      {/* Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button onClick={goToPrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={\`w-2.5 h-2.5 rounded-full transition-all \${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'}\`}
            />
          ))}
        </div>
      )}
    </div>
  )
}`

const carouselProps = [
  { name: 'items', type: 'CarouselItem[]', default: '-', description: 'Array de items con id y content' },
  { name: 'autoPlay', type: 'boolean', default: 'false', description: 'Reproducción automática' },
  { name: 'interval', type: 'number', default: '5000', description: 'Intervalo en ms para autoPlay' },
  { name: 'showArrows', type: 'boolean', default: 'true', description: 'Mostrar flechas de navegación' },
  { name: 'showDots', type: 'boolean', default: 'true', description: 'Mostrar indicadores de posición' },
  { name: 'variant', type: "'default' | 'fade' | 'slide'", default: "'default'", description: 'Tipo de transición' }
]

const sampleImages = [
  { src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop', alt: 'Código', caption: 'Desarrollo de software moderno' },
  { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop', alt: 'Diseño', caption: 'Diseño de interfaces intuitivas' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop', alt: 'Analytics', caption: 'Análisis de datos en tiempo real' }
]

const testimonials = [
  { id: '1', content: 'Estos componentes me ahorraron semanas de trabajo. Son exactamente lo que necesitaba para mi proyecto.', author: 'María García', role: 'Frontend Developer' },
  { id: '2', content: 'La calidad del código y el diseño son impecables. Muy fácil de personalizar.', author: 'Carlos López', role: 'UI/UX Designer' },
  { id: '3', content: 'Increíble biblioteca. El tema oscuro y las animaciones son perfectas.', author: 'Ana Martínez', role: 'Full Stack Developer' }
]

export function CarouselPage () {
  return (
    <>
      <PageHeader title='Carousel' description='Carruseles con diferentes estilos: imágenes, cards y testimonios.' />

      <Alert variant='info' title='Dependencia requerida' className='mb-6'>
        Este componente requiere <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>lucide-react</code> para los iconos de navegación.
        Instala con: <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>npm install lucide-react</code>
      </Alert>

      <Section title='Código Completo del Componente'>
        <CodePreview code={carouselCode} title='Carousel.tsx - Copia este archivo completo'>
          <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
        </CodePreview>
      </Section>

      <Section title='Image Carousel'>
        <CodePreview code={`const images = [
  { src: 'url1', alt: 'Imagen 1', caption: 'Descripción 1' },
  { src: 'url2', alt: 'Imagen 2', caption: 'Descripción 2' },
]

<ImageCarousel images={images} autoPlay interval={4000} />`}
        >
          <div className='w-full'>
            <ImageCarousel images={sampleImages} autoPlay interval={4000} />
          </div>
        </CodePreview>
      </Section>

      <Section title='Card Carousel'>
        <CodePreview code={`<CardCarousel visibleCards={3} gap={16}>
  <Card hover>...</Card>
  <Card hover>...</Card>
  <Card hover>...</Card>
</CardCarousel>`}
        >
          <div className='w-full px-8'>
            <CardCarousel visibleCards={3} gap={16}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} hover>
                  <CardBody>
                    <h4 className='font-semibold mb-2'>Card {i}</h4>
                    <p className='text-sm text-[var(--text-secondary)]'>Contenido de ejemplo para la card número {i}.</p>
                  </CardBody>
                </Card>
              ))}
            </CardCarousel>
          </div>
        </CodePreview>
      </Section>

      <Section title='Testimonial Carousel'>
        <CodePreview code={`const testimonials = [
  { id: '1', content: 'Texto...', author: 'Nombre', role: 'Cargo' },
]

<TestimonialCarousel testimonials={testimonials} autoPlay />`}
        >
          <div className='w-full'>
            <TestimonialCarousel testimonials={testimonials} autoPlay interval={5000} />
          </div>
        </CodePreview>
      </Section>

      <Section title='Carousel Básico'>
        <CodePreview code={`const items = [
  { id: '1', content: <div>Slide 1</div> },
  { id: '2', content: <div>Slide 2</div> },
]

<Carousel items={items} showArrows showDots />`}
        >
          <div className='w-full'>
            <Carousel
              items={[
                { id: '1', content: <div className='h-48 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold'>Slide 1</div> },
                { id: '2', content: <div className='h-48 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold'>Slide 2</div> },
                { id: '3', content: <div className='h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold'>Slide 3</div> }
              ]}
              showArrows
              showDots
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={carouselProps} /></Section>
    </>
  )
}
