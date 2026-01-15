import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Input, Textarea } from '../components/ui/Input'
import { Mail, Lock, Search, Eye, User } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const inputCode = `import { type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={\`
              w-full px-4 py-2.5 rounded-lg
              bg-[var(--bg-secondary)] border border-[var(--border-color)]
              text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
              transition-all duration-200
              focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
              hover:border-[var(--text-muted)]
              disabled:opacity-50 disabled:cursor-not-allowed
              \${leftIcon ? 'pl-10' : ''}
              \${rightIcon ? 'pr-10' : ''}
              \${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
              \${className}
            \`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-sm text-[var(--text-muted)]">{hint}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={\`
            w-full px-4 py-2.5 rounded-lg resize-none
            bg-[var(--bg-secondary)] border border-[var(--border-color)]
            text-[var(--text-primary)] placeholder:text-[var(--text-muted)]
            transition-all duration-200
            focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
            hover:border-[var(--text-muted)]
            disabled:opacity-50 disabled:cursor-not-allowed
            \${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
            \${className}
          \`}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-sm text-[var(--text-muted)]">{hint}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'`

const inputProps = [
  { name: 'label', type: 'string', default: '-', description: 'Etiqueta del input' },
  { name: 'error', type: 'string', default: '-', description: 'Mensaje de error' },
  { name: 'hint', type: 'string', default: '-', description: 'Texto de ayuda' },
  { name: 'leftIcon', type: 'ReactNode', default: '-', description: 'Icono a la izquierda' },
  { name: 'rightIcon', type: 'ReactNode', default: '-', description: 'Icono a la derecha' }
]

export function InputsPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Input, Textarea } from 'leira-ui'`
    : `import { Input, Textarea } from './components/ui/Input'`

  const basicCode = `${importStatement}

<Input label="Email" placeholder="tucorreo@ejemplo.com" type="email" />`

  const iconsCode = `${importStatement}
import { Mail, Lock, Eye } from 'lucide-react'

<Input
  label="Email"
  placeholder="tucorreo@ejemplo.com"
  leftIcon={<Mail className="w-4 h-4" />}
/>

<Input
  label="Contraseña"
  type="password"
  leftIcon={<Lock className="w-4 h-4" />}
  rightIcon={<Eye className="w-4 h-4" />}
/>`

  const statesCode = `${importStatement}

<Input error="Por favor ingresa un email válido" />
<Input hint="Solo letras, números y guiones bajos" />
<Input disabled />`

  const textareaCode = `${importStatement}

<Textarea label="Mensaje" rows={4} placeholder="Escribe tu mensaje..." />`

  return (
    <>
      <PageHeader title='Input' description='Campos de entrada con labels, iconos, estados de error y ayudas.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={inputCode} title='Input.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>
              Haz clic en &quot;Ver código&quot; para ver el componente completo.
            </div>
          </CodePreview>
        </Section>
      )}

      <Section title='Input Básico'>
        <CodePreview code={basicCode} title='Input con label'>
          <div className='w-full max-w-sm'><Input label='Email' placeholder='tucorreo@ejemplo.com' type='email' /></div>
        </CodePreview>
      </Section>

      <Section title='Con Iconos'>
        <CodePreview code={iconsCode}>
          <div className='w-full max-w-sm space-y-4'>
            <Input label='Email' placeholder='tucorreo@ejemplo.com' leftIcon={<Mail className='w-4 h-4' />} />
            <Input label='Contraseña' type='password' placeholder='••••••••' leftIcon={<Lock className='w-4 h-4' />} rightIcon={<Eye className='w-4 h-4 cursor-pointer hover:text-[var(--text-primary)]' />} />
            <Input placeholder='Buscar...' leftIcon={<Search className='w-4 h-4' />} />
          </div>
        </CodePreview>
      </Section>

      <Section title='Estados'>
        <CodePreview code={statesCode}>
          <div className='w-full max-w-sm space-y-4'>
            <Input label='Email inválido' leftIcon={<Mail className='w-4 h-4' />} error='Por favor ingresa un email válido' defaultValue='correo-invalido' />
            <Input label='Usuario' leftIcon={<User className='w-4 h-4' />} hint='Solo letras, números y guiones bajos' placeholder='Nombre de usuario' />
            <Input label='Deshabilitado' placeholder='No editable' disabled />
          </div>
        </CodePreview>
      </Section>

      <Section title='Textarea'>
        <CodePreview code={textareaCode}>
          <div className='w-full max-w-sm space-y-4'>
            <Textarea label='Mensaje' placeholder='Escribe tu mensaje aquí...' rows={4} />
            <Textarea label='Con error' rows={3} error='El mensaje es demasiado corto' defaultValue='Hola' />
          </div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={inputProps} /></Section>
    </>
  )
}
