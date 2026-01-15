import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Tabs } from '../components/ui/Tabs'
import { Home, Settings, User } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const tabsCode = `import { useState, type ReactNode } from 'react'

interface TabItem {
  id: string
  label: string
  content: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

interface TabsProps {
  items: TabItem[]
  defaultActiveId?: string
  onChange?: (id: string) => void
  variant?: 'underline' | 'pills' | 'boxed'
  className?: string
}

export function Tabs ({ items, defaultActiveId, onChange, variant = 'underline', className = '' }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id)

  const handleTabClick = (id: string) => {
    setActiveId(id)
    onChange?.(id)
  }

  const getTabStyles = (isActive: boolean, isDisabled: boolean) => {
    const base = 'relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200'
    const disabled = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    switch (variant) {
      case 'underline':
        return \`\${base} \${disabled} \${isActive
          ? 'text-violet-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-500 after:rounded-full'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }\`
      case 'pills':
        return \`\${base} \${disabled} rounded-lg \${isActive
          ? 'bg-violet-500/20 text-violet-400'
          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
        }\`
      case 'boxed':
        return \`\${base} \${disabled} rounded-lg \${isActive
          ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }\`
      default:
        return base
    }
  }

  const getContainerStyles = () => {
    switch (variant) {
      case 'underline': return 'flex border-b border-[var(--border-color)]'
      case 'pills': return 'flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl'
      case 'boxed': return 'flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl'
      default: return 'flex'
    }
  }

  return (
    <div className={className}>
      <div className={getContainerStyles()}>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => !item.disabled && handleTabClick(item.id)}
            className={getTabStyles(activeId === item.id, !!item.disabled)}
            disabled={item.disabled}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4 animate-fade-in">
        {items.find((item) => item.id === activeId)?.content}
      </div>
    </div>
  )
}`

const tabsProps = [
  { name: 'items', type: 'TabItem[]', default: '-', description: 'Array de tabs con id, label, content' },
  { name: 'defaultActiveId', type: 'string', default: 'primer item', description: 'ID del tab activo' },
  { name: 'onChange', type: '(id: string) => void', default: '-', description: 'Callback al cambiar' },
  { name: 'variant', type: "'underline' | 'pills' | 'boxed'", default: "'underline'", description: 'Estilo visual' }
]

const tabs = [
  { id: '1', label: 'General', content: <p className='text-[var(--text-secondary)]'>Contenido de la pestaña General.</p> },
  { id: '2', label: 'Perfil', content: <p className='text-[var(--text-secondary)]'>Contenido de la pestaña Perfil.</p> },
  { id: '3', label: 'Configuración', content: <p className='text-[var(--text-secondary)]'>Contenido de Configuración.</p> }
]

const iconTabs = [
  { id: 'home', label: 'Inicio', icon: <Home className='w-4 h-4' />, content: <p className='text-[var(--text-secondary)]'>Página de inicio.</p> },
  { id: 'profile', label: 'Perfil', icon: <User className='w-4 h-4' />, content: <p className='text-[var(--text-secondary)]'>Tu perfil.</p> },
  { id: 'settings', label: 'Ajustes', icon: <Settings className='w-4 h-4' />, content: <p className='text-[var(--text-secondary)]'>Configuración.</p> }
]

export function TabsPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Tabs } from 'leira-ui'`
    : `import { Tabs } from './components/ui/Tabs'`

  const underlineCode = `${importStatement}

const tabs = [
  { id: '1', label: 'General', content: <p>Contenido...</p> },
  { id: '2', label: 'Perfil', content: <p>Contenido...</p> },
]

<Tabs items={tabs} variant="underline" />`

  const pillsCode = `${importStatement}

<Tabs items={tabs} variant="pills" />`

  const iconsCode = `${importStatement}
import { Home, User, Settings } from 'lucide-react'

const iconTabs = [
  { id: 'home', label: 'Inicio', icon: <Home className="w-4 h-4" />, content: ... },
  { id: 'profile', label: 'Perfil', icon: <User className="w-4 h-4" />, content: ... },
]

<Tabs items={iconTabs} variant="pills" />`

  return (
    <>
      <PageHeader title='Tabs' description='Pestañas con diferentes estilos visuales y soporte para iconos.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={tabsCode} title='Tabs.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Underline (Default)'>
        <CodePreview code={underlineCode}>
          <div className='w-full'><Tabs items={tabs} variant='underline' /></div>
        </CodePreview>
      </Section>

      <Section title='Pills'>
        <CodePreview code={pillsCode}>
          <div className='w-full'><Tabs items={tabs} variant='pills' /></div>
        </CodePreview>
      </Section>

      <Section title='Con Iconos'>
        <CodePreview code={iconsCode}>
          <div className='w-full'><Tabs items={iconTabs} variant='pills' /></div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={tabsProps} /></Section>
    </>
  )
}
