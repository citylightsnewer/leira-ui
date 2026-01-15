import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Badge } from '../components/ui/Badge'
import { useInstallMethod } from '../context/InstallMethodContext'

const badgeCode = `import { type ReactNode } from 'react'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--bg-hover)] text-[var(--text-secondary)]',
  primary: 'bg-violet-500/20 text-violet-400 border border-violet-500/30',
  secondary: 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30',
  success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  error: 'bg-red-500/20 text-red-400 border border-red-500/30',
  outline: 'bg-transparent text-[var(--text-secondary)] border border-[var(--border-color)]'
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm'
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-[var(--text-muted)]',
  primary: 'bg-violet-400',
  secondary: 'bg-indigo-400',
  success: 'bg-emerald-400',
  warning: 'bg-amber-400',
  error: 'bg-red-400',
  outline: 'bg-[var(--text-secondary)]'
}

export function Badge ({ children, variant = 'default', size = 'md', dot = false, className = '' }: BadgeProps) {
  return (
    <span
      className={\`
        inline-flex items-center gap-1.5 font-medium rounded-full
        \${variantStyles[variant]}
        \${sizeStyles[size]}
        \${className}
      \`}
    >
      {dot && <span className={\`w-1.5 h-1.5 rounded-full \${dotColors[variant]}\`} />}
      {children}
    </span>
  )
}`

const badgeProps = [
  { name: 'variant', type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'", default: "'default'", description: 'Estilo visual del badge' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamaño del badge' },
  { name: 'dot', type: 'boolean', default: 'false', description: 'Muestra un punto indicador' }
]

export function BadgesPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Badge } from 'leira-ui'`
    : `import { Badge } from './components/ui/Badge'`

  const variantsCode = `${importStatement}

<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>`

  const sizesCode = `${importStatement}

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`

  const dotCode = `${importStatement}

<Badge dot variant="success">Online</Badge>
<Badge dot variant="warning">Away</Badge>
<Badge dot variant="error">Offline</Badge>`

  return (
    <>
      <PageHeader title='Badge' description='Etiquetas y badges con múltiples variantes, tamaños y estilos.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={badgeCode} title='Badge.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Variantes'>
        <CodePreview code={variantsCode} title='Todas las variantes'>
          <Badge variant='default'>Default</Badge>
          <Badge variant='primary'>Primary</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          <Badge variant='success'>Success</Badge>
          <Badge variant='warning'>Warning</Badge>
          <Badge variant='error'>Error</Badge>
          <Badge variant='outline'>Outline</Badge>
        </CodePreview>
      </Section>

      <Section title='Tamaños'>
        <CodePreview code={sizesCode}>
          <Badge size='sm' variant='primary'>Small</Badge>
          <Badge size='md' variant='primary'>Medium</Badge>
          <Badge size='lg' variant='primary'>Large</Badge>
        </CodePreview>
      </Section>

      <Section title='Con Indicador'>
        <CodePreview code={dotCode}>
          <Badge dot variant='success'>Online</Badge>
          <Badge dot variant='warning'>Away</Badge>
          <Badge dot variant='error'>Offline</Badge>
          <Badge dot variant='primary'>Active</Badge>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={badgeProps} /></Section>
    </>
  )
}
