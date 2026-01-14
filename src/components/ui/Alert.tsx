import { type ReactNode } from 'react'
import { X, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react'

type AlertVariant = 'success' | 'warning' | 'error' | 'info'

interface AlertProps {
  children: ReactNode
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
}

const variantStyles: Record<AlertVariant, { bg: string, border: string, icon: typeof CheckCircle, iconColor: string }> = {
  success: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    icon: CheckCircle,
    iconColor: 'text-emerald-400'
  },
  warning: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    icon: AlertTriangle,
    iconColor: 'text-amber-400'
  },
  error: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    icon: XCircle,
    iconColor: 'text-red-400'
  },
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    icon: Info,
    iconColor: 'text-blue-400'
  }
}

export function Alert ({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = ''
}: AlertProps) {
  const styles = variantStyles[variant]
  const Icon = styles.icon

  return (
    <div
      className={`
        relative flex gap-3 p-4 rounded-lg border
        animate-slide-up
        ${styles.bg} ${styles.border}
        ${className}
      `}
      role='alert'
    >
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${styles.iconColor}`} />
      <div className='flex-1 min-w-0'>
        {title && (
          <h4 className={`font-medium mb-1 ${styles.iconColor}`}>{title}</h4>
        )}
        <div className='text-sm text-[var(--text-secondary)]'>{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className='flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]'
        >
          <X className='w-4 h-4' />
        </button>
      )}
    </div>
  )
}
