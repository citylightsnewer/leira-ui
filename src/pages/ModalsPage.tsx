import { useState } from 'react'
import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Modal, ModalFooter } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Alert } from '../components/ui/Alert'
import { useInstallMethod } from '../context/InstallMethodContext'

const modalCode = `import { type ReactNode, useEffect, useCallback } from 'react'
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

export function Modal ({ isOpen, onClose, children, title, size = 'md', closeOnOverlay = true, closeOnEscape = true }: ModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && closeOnEscape) onClose()
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeOnOverlay ? onClose : undefined} />
      <div className={\`relative w-full \${sizeStyles[size]} bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] shadow-2xl animate-scale-in\`}>
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-[var(--bg-hover)]"><X className="w-5 h-5" /></button>
          </div>
        )}
        {!title && <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[var(--bg-hover)]"><X className="w-5 h-5" /></button>}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export function ModalFooter ({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={\`flex items-center justify-end gap-3 pt-4 mt-4 border-t border-[var(--border-color)] \${className}\`}>{children}</div>
}`

const modalProps = [
  { name: 'isOpen', type: 'boolean', default: '-', description: 'Controla si el modal está abierto' },
  { name: 'onClose', type: '() => void', default: '-', description: 'Callback al cerrar el modal' },
  { name: 'title', type: 'string', default: '-', description: 'Título del modal' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Tamaño del modal' },
  { name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Cerrar al hacer clic en overlay' },
  { name: 'closeOnEscape', type: 'boolean', default: 'true', description: 'Cerrar al presionar Escape' }
]

export function ModalsPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [sizesOpen, setSizesOpen] = useState<string | null>(null)
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Modal, ModalFooter, Button } from 'leira-ui'`
    : `import { Modal, ModalFooter } from './components/ui/Modal'
import { Button } from './components/ui/Button'`

  const basicCode = `import { useState } from 'react'
${importStatement}

const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Básico">
  <p>Contenido del modal</p>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
    <Button onClick={() => setIsOpen(false)}>Aceptar</Button>
  </ModalFooter>
</Modal>`

  const formCode = `${importStatement}

<Modal title="Nuevo Usuario" size="lg">
  <form>...</form>
  <ModalFooter>...</ModalFooter>
</Modal>`

  const sizesCode = `${importStatement}

<Modal size="sm">...</Modal>
<Modal size="md">...</Modal>
<Modal size="lg">...</Modal>
<Modal size="xl">...</Modal>`

  return (
    <>
      <PageHeader title='Modal' description='Modales con animaciones, tamaños y comportamientos configurables.' />

      {!isNpm && (
        <Alert variant='info' title='Dependencia requerida' className='mb-6'>
          Este componente requiere <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>lucide-react</code> para el icono de cerrar.
          Instala con: <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>npm install lucide-react</code>
        </Alert>
      )}

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={modalCode} title='Modal.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Modal Básico'>
        <CodePreview code={basicCode}>
          <Button onClick={() => setBasicOpen(true)}>Abrir Modal</Button>
          <Modal isOpen={basicOpen} onClose={() => setBasicOpen(false)} title='Modal Básico'>
            <p className='text-[var(--text-secondary)]'>Este es un modal básico con título. Puedes cerrarlo con la X, el overlay o Escape.</p>
            <ModalFooter>
              <Button variant='ghost' onClick={() => setBasicOpen(false)}>Cancelar</Button>
              <Button onClick={() => setBasicOpen(false)}>Aceptar</Button>
            </ModalFooter>
          </Modal>
        </CodePreview>
      </Section>

      <Section title='Modal con Formulario'>
        <CodePreview code={formCode}>
          <Button onClick={() => setFormOpen(true)}>Abrir Formulario</Button>
          <Modal isOpen={formOpen} onClose={() => setFormOpen(false)} title='Nuevo Usuario' size='lg'>
            <form className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <Input label='Nombre' placeholder='Juan' />
                <Input label='Apellido' placeholder='Pérez' />
              </div>
              <Input label='Email' type='email' placeholder='juan@ejemplo.com' />
            </form>
            <ModalFooter>
              <Button variant='ghost' onClick={() => setFormOpen(false)}>Cancelar</Button>
              <Button onClick={() => setFormOpen(false)}>Crear Usuario</Button>
            </ModalFooter>
          </Modal>
        </CodePreview>
      </Section>

      <Section title='Tamaños'>
        <CodePreview code={sizesCode}>
          <Button variant='secondary' onClick={() => setSizesOpen('sm')}>Small</Button>
          <Button variant='secondary' onClick={() => setSizesOpen('md')}>Medium</Button>
          <Button variant='secondary' onClick={() => setSizesOpen('lg')}>Large</Button>
          <Button variant='secondary' onClick={() => setSizesOpen('xl')}>Extra Large</Button>
          {['sm', 'md', 'lg', 'xl'].map(size => (
            <Modal key={size} isOpen={sizesOpen === size} onClose={() => setSizesOpen(null)} title={`${size.toUpperCase()} Modal`} size={size as 'sm' | 'md' | 'lg' | 'xl'}>
              <p className='text-[var(--text-secondary)]'>Modal tamaño {size}.</p>
            </Modal>
          ))}
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={modalProps} /></Section>
    </>
  )
}
