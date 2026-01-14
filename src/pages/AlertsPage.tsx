import { useState } from 'react'
import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Alert } from '../components/ui/Alert'

const alertCode = `import { type ReactNode } from 'react'
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

const variantStyles: Record<AlertVariant, { bg: string; border: string; icon: typeof CheckCircle; iconColor: string }> = {
  success: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: CheckCircle, iconColor: 'text-emerald-400' },
  warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', icon: AlertTriangle, iconColor: 'text-amber-400' },
  error: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: XCircle, iconColor: 'text-red-400' },
  info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info, iconColor: 'text-blue-400' }
}

export function Alert ({ children, variant = 'info', title, dismissible = false, onDismiss, className = '' }: AlertProps) {
  const styles = variantStyles[variant]
  const Icon = styles.icon

  return (
    <div
      className={\`relative flex gap-3 p-4 rounded-lg border animate-slide-up \${styles.bg} \${styles.border} \${className}\`}
      role="alert"
    >
      <Icon className={\`w-5 h-5 flex-shrink-0 mt-0.5 \${styles.iconColor}\`} />
      <div className="flex-1 min-w-0">
        {title && <h4 className={\`font-medium mb-1 \${styles.iconColor}\`}>{title}</h4>}
        <div className="text-sm text-[var(--text-secondary)]">{children}</div>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}`

const alertProps = [
  { name: 'variant', type: "'success' | 'warning' | 'error' | 'info'", default: "'info'", description: 'Tipo de alerta' },
  { name: 'title', type: 'string', default: '-', description: 'Título opcional' },
  { name: 'dismissible', type: 'boolean', default: 'false', description: 'Permite cerrar la alerta' },
  { name: 'onDismiss', type: '() => void', default: '-', description: 'Callback al cerrar' }
]

export function AlertsPage () {
  const [showDismissible, setShowDismissible] = useState(true)

  return (
    <>
      <PageHeader title='Alert' description='Alertas de notificación con diferentes variantes y estados.' />

      <Alert variant='info' title='Dependencia requerida' className='mb-6'>
        Este componente requiere <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>lucide-react</code> para los iconos.
        Instala con: <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>npm install lucide-react</code>
      </Alert>
      <Section title='Código Completo del Componente'>
        <CodePreview code={alertCode} title='Alert.tsx - Copia este archivo completo'>
          <div className='text-sm text-[var(--text-secondary)]'>
            Haz clic en &quot;Ver código&quot; para ver el componente completo.
          </div>
        </CodePreview>
      </Section>

      <Section title='Variantes'>
        <CodePreview
          code={`<Alert variant="success">Operación completada exitosamente.</Alert>
<Alert variant="warning">Hay campos que requieren atención.</Alert>
<Alert variant="error">Ha ocurrido un error.</Alert>
<Alert variant="info">Mensaje informativo.</Alert>`} title='Todas las variantes'
        >
          <div className='w-full space-y-4'>
            <Alert variant='success'>Operación completada exitosamente.</Alert>
            <Alert variant='warning'>Hay algunos campos que requieren atención.</Alert>
            <Alert variant='error'>Ha ocurrido un error al procesar la solicitud.</Alert>
            <Alert variant='info'>Este es un mensaje informativo para el usuario.</Alert>
          </div>
        </CodePreview>
      </Section>

      <Section title='Con Título'>
        <CodePreview code='<Alert variant="success" title="¡Éxito!">Mensaje</Alert>'>
          <div className='w-full space-y-4'>
            <Alert variant='success' title='¡Éxito!'>Tu cuenta ha sido creada correctamente.</Alert>
            <Alert variant='warning' title='Atención'>Tu sesión expirará en 5 minutos.</Alert>
            <Alert variant='error' title='Error de validación'>Revisa los campos marcados.</Alert>
          </div>
        </CodePreview>
      </Section>

      <Section title='Dismissible'>
        <CodePreview code='<Alert dismissible onDismiss={() => setShow(false)}>Mensaje</Alert>'>
          <div className='w-full'>
            {showDismissible
              ? <Alert variant='info' title='Consejo' dismissible onDismiss={() => setShowDismissible(false)}>Haz clic en la X para cerrar.</Alert>
              : <p className='text-[var(--text-secondary)]'>Alerta cerrada. Recarga para verla de nuevo.</p>}
          </div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={alertProps} /></Section>
    </>
  )
}
