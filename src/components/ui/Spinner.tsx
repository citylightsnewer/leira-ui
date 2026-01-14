type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
type SpinnerVariant = 'default' | 'primary' | 'dots' | 'pulse'

interface SpinnerProps {
  size?: SpinnerSize
  variant?: SpinnerVariant
  className?: string
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

const dotSizeStyles: Record<SpinnerSize, string> = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
  xl: 'w-3 h-3'
}

export function Spinner ({ size = 'md', variant = 'default', className = '' }: SpinnerProps) {
  if (variant === 'dots') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`
              ${dotSizeStyles[size]} rounded-full bg-violet-500
              animate-pulse
            `}
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={`relative ${sizeStyles[size]} ${className}`}>
        <div className='absolute inset-0 rounded-full bg-violet-500/30 animate-ping' />
        <div className='absolute inset-1 rounded-full bg-violet-500' />
      </div>
    )
  }

  return (
    <svg
      className={`animate-spin ${sizeStyles[size]} ${className}`}
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle
        className={variant === 'primary' ? 'opacity-25' : 'opacity-10'}
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='3'
      />
      <path
        className={variant === 'primary' ? 'opacity-100 text-violet-500' : 'opacity-75'}
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )
}

// Skeleton loader component
interface SkeletonProps {
  width?: string | number
  height?: string | number
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

const roundedStyles = {
  none: 'rounded-none',
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}

export function Skeleton ({
  width,
  height = '1rem',
  rounded = 'md',
  className = ''
}: SkeletonProps) {
  return (
    <div
      className={`
        bg-[var(--bg-hover)] animate-pulse
        ${roundedStyles[rounded]}
        ${className}
      `}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height
      }}
    />
  )
}
