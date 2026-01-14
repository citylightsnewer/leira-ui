import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Button } from '../components/ui/Button'
import { ArrowRight, Download, Heart, Send } from 'lucide-react'

const buttonCode = `import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40',
  secondary: 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-[var(--bg-hover)] hover:border-violet-500/50',
  outline: 'bg-transparent text-violet-400 border border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-400',
  ghost: 'bg-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]',
  danger: 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-500 hover:to-rose-500 shadow-lg shadow-red-500/25',
  success: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-500 hover:to-green-500 shadow-lg shadow-emerald-500/25'
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2.5'
}

export function Button ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={\`
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-200 ease-out
        focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
        active:scale-[0.98]
        \${variantStyles[variant]}
        \${sizeStyles[size]}
        \${className}
      \`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  )
}`

const usageCode = `import { Button } from './components/ui/Button'
import { Send, ArrowRight } from 'lucide-react'

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>

// Tamaños
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Con iconos
<Button icon={<Send className="w-4 h-4" />}>Enviar</Button>
<Button icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">Continuar</Button>

// Estados
<Button loading>Cargando</Button>
<Button disabled>Deshabilitado</Button>`

const buttonProps = [
  { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'", default: "'primary'", description: 'Estilo visual del botón' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamaño del botón' },
  { name: 'loading', type: 'boolean', default: 'false', description: 'Muestra spinner de carga' },
  { name: 'icon', type: 'ReactNode', default: '-', description: 'Icono a mostrar' },
  { name: 'iconPosition', type: "'left' | 'right'", default: "'left'", description: 'Posición del icono' },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el botón' }
]

export function ButtonsPage () {
  return (
    <>
      <PageHeader
        title='Button'
        description='Botones con múltiples variantes, tamaños, estados de carga e iconos.'
      />

      <Section title='Código Completo del Componente'>
        <CodePreview code={buttonCode} title='Button.tsx - Copia este archivo completo'>
          <div className='text-sm text-[var(--text-secondary)]'>
            Haz clic en &quot;Ver código&quot; para ver el componente completo y copiarlo.
          </div>
        </CodePreview>
      </Section>

      <Section title='Variantes'>
        <CodePreview code={usageCode} title='Ejemplos de uso'>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='danger'>Danger</Button>
          <Button variant='success'>Success</Button>
        </CodePreview>
      </Section>

      <Section title='Tamaños'>
        <CodePreview code='<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </CodePreview>
      </Section>

      <Section title='Con Iconos'>
        <CodePreview code='<Button icon={<Send className="w-4 h-4" />}>Enviar</Button>\n<Button icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">Continuar</Button>'>
          <Button icon={<Send className='w-4 h-4' />}>Enviar</Button>
          <Button icon={<ArrowRight className='w-4 h-4' />} iconPosition='right'>Continuar</Button>
          <Button variant='secondary' icon={<Download className='w-4 h-4' />}>Descargar</Button>
          <Button variant='outline' icon={<Heart className='w-4 h-4' />}>Favorito</Button>
        </CodePreview>
      </Section>

      <Section title='Estados'>
        <CodePreview code='<Button loading>Cargando</Button>\n<Button disabled>Deshabilitado</Button>'>
          <Button loading>Cargando</Button>
          <Button disabled>Deshabilitado</Button>
          <Button variant='secondary' loading>Procesando</Button>
        </CodePreview>
      </Section>

      <Section title='Props'>
        <PropsTable props={buttonProps} />
      </Section>
    </>
  )
}
