import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Spinner, Skeleton } from '../components/ui/Spinner'

const spinnerCode = `type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
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
      <div className={\`flex items-center gap-1 \${className}\`}>
        {[0, 1, 2].map((i) => (
          <div key={i} className={\`\${dotSizeStyles[size]} rounded-full bg-violet-500 animate-pulse\`} style={{ animationDelay: \`\${i * 150}ms\` }} />
        ))}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={\`relative \${sizeStyles[size]} \${className}\`}>
        <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
        <div className="absolute inset-1 rounded-full bg-violet-500" />
      </div>
    )
  }

  return (
    <svg className={\`animate-spin \${sizeStyles[size]} \${className}\`} viewBox="0 0 24 24" fill="none">
      <circle className={variant === 'primary' ? 'opacity-25' : 'opacity-10'} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
      <path className={variant === 'primary' ? 'opacity-100 text-violet-500' : 'opacity-75'} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
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

export function Skeleton ({ width, height = '1rem', rounded = 'md', className = '' }: SkeletonProps) {
  return (
    <div
      className={\`bg-[var(--bg-hover)] animate-pulse \${roundedStyles[rounded]} \${className}\`}
      style={{ width: typeof width === 'number' ? \`\${width}px\` : width, height: typeof height === 'number' ? \`\${height}px\` : height }}
    />
  )
}`

const spinnerProps = [
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamaño del spinner' },
  { name: 'variant', type: "'default' | 'primary' | 'dots' | 'pulse'", default: "'default'", description: 'Estilo de animación' }
]

const skeletonProps = [
  { name: 'width', type: 'string | number', default: '-', description: 'Ancho del skeleton' },
  { name: 'height', type: 'string | number', default: "'1rem'", description: 'Alto del skeleton' },
  { name: 'rounded', type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", description: 'Bordes redondeados' }
]

export function SpinnersPage () {
  return (
    <>
      <PageHeader title='Spinner' description='Indicadores de carga y skeletons para estados de loading.' />

      <Section title='Código Completo del Componente'>
        <CodePreview code={spinnerCode} title='Spinner.tsx - Copia este archivo completo'>
          <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
        </CodePreview>
      </Section>

      <Section title='Tamaños'>
        <CodePreview code='<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />\n<Spinner size="xl" />'>
          <Spinner size='sm' /><Spinner size='md' /><Spinner size='lg' /><Spinner size='xl' />
        </CodePreview>
      </Section>

      <Section title='Variantes'>
        <CodePreview code='<Spinner variant="default" />\n<Spinner variant="primary" />\n<Spinner variant="dots" />\n<Spinner variant="pulse" />'>
          <Spinner variant='default' /><Spinner variant='primary' /><Spinner variant='dots' /><Spinner variant='pulse' />
        </CodePreview>
      </Section>

      <Section title='Skeleton'>
        <CodePreview code={`<Skeleton width="100%" height="2.5rem" rounded="lg" />
<Skeleton width="70%" height="1rem" />
<Skeleton width="3rem" height="3rem" rounded="full" />`}
        >
          <div className='w-full max-w-sm space-y-3'>
            <Skeleton width='100%' height='2.5rem' rounded='lg' />
            <Skeleton width='70%' height='1rem' />
            <Skeleton width='100%' height='1rem' />
            <div className='flex gap-3'>
              <Skeleton width='3rem' height='3rem' rounded='full' />
              <div className='flex-1 space-y-2'><Skeleton width='60%' height='1rem' /><Skeleton width='40%' height='0.875rem' /></div>
            </div>
          </div>
        </CodePreview>
      </Section>

      <Section title='Spinner Props'><PropsTable props={spinnerProps} /></Section>
      <Section title='Skeleton Props'><PropsTable props={skeletonProps} /></Section>
    </>
  )
}
