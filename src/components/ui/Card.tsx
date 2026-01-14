import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function Card ({ children, className = '', hover = false, glow = false }: CardProps) {
  return (
    <div
      className={`
        bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
        ${hover ? 'transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1' : ''}
        ${glow ? 'animate-pulse-glow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export function CardHeader ({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-[var(--border-color)] ${className}`}>
      {children}
    </div>
  )
}

export function CardBody ({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter ({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-[var(--border-color)] ${className}`}>
      {children}
    </div>
  )
}

// Card with Image variant
interface ImageCardProps {
  image: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function ImageCard ({ image, title, description, children, className = '' }: ImageCardProps) {
  return (
    <Card hover className={`overflow-hidden ${className}`}>
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent' />
      </div>
      <CardBody>
        <h3 className='text-lg font-semibold text-[var(--text-primary)] mb-2'>{title}</h3>
        {description && (
          <p className='text-sm text-[var(--text-secondary)]'>{description}</p>
        )}
        {children}
      </CardBody>
    </Card>
  )
}
