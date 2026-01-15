import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Accordion } from '../components/ui/Accordion'
import { Alert } from '../components/ui/Alert'
import { Zap, Shield, Rocket } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const accordionCode = `import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpenIds?: string[]
  className?: string
}

export function Accordion ({ items, allowMultiple = false, defaultOpenIds = [], className = '' }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={\`space-y-2 \${className}\`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden">
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={\`
                w-full flex items-center justify-between gap-4 px-4 py-3 text-left font-medium transition-colors
                \${item.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[var(--bg-hover)] cursor-pointer'}
                \${isOpen ? 'text-violet-400' : 'text-[var(--text-primary)]'}
              \`}
            >
              <div className="flex items-center gap-3">{item.icon}<span>{item.title}</span></div>
              <ChevronDown className={\`w-5 h-5 transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`} />
            </button>
            <div className={\`overflow-hidden transition-all duration-300 ease-out \${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}\`}>
              <div className="px-4 pb-4 text-sm text-[var(--text-secondary)]">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}`

const accordionProps = [
  { name: 'items', type: 'AccordionItem[]', default: '-', description: 'Array de items' },
  { name: 'allowMultiple', type: 'boolean', default: 'false', description: 'Permite múltiples abiertos' },
  { name: 'defaultOpenIds', type: 'string[]', default: '[]', description: 'IDs abiertos por defecto' }
]

const items = [
  { id: '1', title: '¿Qué es React?', content: 'React es una biblioteca de JavaScript para construir interfaces de usuario.' },
  { id: '2', title: '¿Qué es Tailwind CSS?', content: 'Tailwind CSS es un framework de CSS utility-first para diseño rápido.' },
  { id: '3', title: '¿Cómo los uso juntos?', content: 'Simplemente copia los componentes a tu proyecto React con Tailwind configurado.' }
]

const iconItems = [
  { id: '1', title: 'Rendimiento', icon: <Zap className='w-4 h-4 text-amber-400' />, content: 'Componentes optimizados para máximo rendimiento.' },
  { id: '2', title: 'Seguridad', icon: <Shield className='w-4 h-4 text-emerald-400' />, content: 'Código seguro sin dependencias innecesarias.' },
  { id: '3', title: 'Velocidad', icon: <Rocket className='w-4 h-4 text-violet-400' />, content: 'Desarrollo rápido con componentes listos.' }
]

export function AccordionPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Accordion } from 'leira-ui'`
    : `import { Accordion } from './components/ui/Accordion'`

  const basicCode = `${importStatement}

const items = [
  { id: '1', title: '¿Qué es React?', content: 'React es una biblioteca...' },
  { id: '2', title: '¿Qué es Tailwind?', content: 'Tailwind CSS es...' },
]

<Accordion items={items} />`

  const multipleCode = `${importStatement}

<Accordion items={items} allowMultiple />`

  const iconsCode = `${importStatement}
import { Zap, Shield, Rocket } from 'lucide-react'

const iconItems = [
  { id: '1', title: 'Rendimiento', icon: <Zap />, content: '...' },
]

<Accordion items={iconItems} />`

  return (
    <>
      <PageHeader title='Accordion' description='Acordeones colapsables con animaciones suaves.' />

      {!isNpm && (
        <Alert variant='info' title='Dependencia requerida' className='mb-6'>
          Este componente requiere <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>lucide-react</code> para el icono de flecha.
          Instala con: <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>npm install lucide-react</code>
        </Alert>
      )}

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={accordionCode} title='Accordion.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Básico'>
        <CodePreview code={basicCode}>
          <div className='w-full max-w-lg'><Accordion items={items} /></div>
        </CodePreview>
      </Section>

      <Section title='Múltiple'>
        <CodePreview code={multipleCode}>
          <div className='w-full max-w-lg'><Accordion items={items} allowMultiple /></div>
        </CodePreview>
      </Section>

      <Section title='Con Iconos'>
        <CodePreview code={iconsCode}>
          <div className='w-full max-w-lg'><Accordion items={iconItems} /></div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={accordionProps} /></Section>
    </>
  )
}
