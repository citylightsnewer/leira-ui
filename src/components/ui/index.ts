// Leira UI - Component Library Entry Point
// All components are exported from here for the NPM package

// Export CSS styles (users should import this)
import './styles.css'

// Layout Components
export { Card, CardHeader, CardBody, CardFooter, ImageCard } from './Card'

// Form Components
export { Button } from './Button'
export { Input, Textarea } from './Input'

// Feedback Components
export { Alert } from './Alert'
export { Modal, ModalFooter } from './Modal'
export { Spinner, Skeleton } from './Spinner'
export { Tooltip } from './Tooltip'

// Navigation Components
export { Tabs } from './Tabs'
export { Accordion } from './Accordion'

// Data Display Components
export { Badge } from './Badge'
export { Carousel, ImageCarousel, CardCarousel, TestimonialCarousel } from './Carousel'

// Re-export types
export type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
