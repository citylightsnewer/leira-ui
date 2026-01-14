import { type ReactNode, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl'
}

export function Modal ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  closeOnOverlay = true,
  closeOnEscape = true
}: ModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEscape) {
      onClose()
    }
  }, [closeOnEscape, onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      {/* Overlay */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in'
        onClick={closeOnOverlay ? onClose : undefined}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full ${sizeStyles[size]}
          bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
          shadow-2xl shadow-black/50
          animate-scale-in
        `}
      >
        {/* Header */}
        {title && (
          <div className='flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]'>
            <h3 className='text-lg font-semibold text-[var(--text-primary)]'>{title}</h3>
            <button
              onClick={onClose}
              className='p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors'
            >
              <X className='w-5 h-5' />
            </button>
          </div>
        )}

        {/* Close button when no title */}
        {!title && (
          <button
            onClick={onClose}
            className='absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors'
          >
            <X className='w-5 h-5' />
          </button>
        )}

        {/* Content */}
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  )
}

// Modal Footer component for actions
interface ModalFooterProps {
  children: ReactNode
  className?: string
}

export function ModalFooter ({ children, className = '' }: ModalFooterProps) {
  return (
    <div className={`flex items-center justify-end gap-3 pt-4 mt-4 border-t border-[var(--border-color)] ${className}`}>
      {children}
    </div>
  )
}
