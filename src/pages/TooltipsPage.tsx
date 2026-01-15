import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Tooltip } from '../components/ui/Tooltip'
import { Button } from '../components/ui/Button'
import { Info } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const tooltipCode = `import { useState, type ReactNode, useRef, useEffect } from 'react'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  position?: TooltipPosition
  delay?: number
  className?: string
}

const positionStyles: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2'
}

const arrowStyles: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-[var(--bg-card)] border-x-transparent border-b-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-[var(--bg-card)] border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-[var(--bg-card)] border-y-transparent border-r-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-[var(--bg-card)] border-y-transparent border-l-transparent'
}

export function Tooltip ({ children, content, position = 'top', delay = 200, className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  return (
    <div
      className={\`relative inline-block \${className}\`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div className={\`absolute z-50 \${positionStyles[position]} px-3 py-1.5 text-sm bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] shadow-lg whitespace-nowrap animate-fade-in\`}>
          {content}
          <div className={\`absolute w-0 h-0 border-4 \${arrowStyles[position]}\`} />
        </div>
      )}
    </div>
  )
}`

const tooltipProps = [
  { name: 'content', type: 'ReactNode', default: '-', description: 'Contenido del tooltip' },
  { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", default: "'top'", description: 'Posición' },
  { name: 'delay', type: 'number', default: '200', description: 'Delay en ms antes de mostrar' }
]

export function TooltipsPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Tooltip, Button } from 'leira-ui'`
    : `import { Tooltip } from './components/ui/Tooltip'
import { Button } from './components/ui/Button'`

  const positionsCode = `${importStatement}

<Tooltip content="Arriba" position="top"><Button>Top</Button></Tooltip>
<Tooltip content="Abajo" position="bottom"><Button>Bottom</Button></Tooltip>
<Tooltip content="Izquierda" position="left"><Button>Left</Button></Tooltip>
<Tooltip content="Derecha" position="right"><Button>Right</Button></Tooltip>`

  const iconsCode = `${importStatement}
import { Info } from 'lucide-react'

<span>Campo <Tooltip content="Texto de ayuda"><Info /></Tooltip></span>`

  return (
    <>
      <PageHeader title='Tooltip' description='Tooltips con posicionamiento flexible y delay configurable.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={tooltipCode} title='Tooltip.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Posiciones'>
        <CodePreview code={positionsCode}>
          <Tooltip content='Tooltip arriba' position='top'><Button variant='secondary'>Top</Button></Tooltip>
          <Tooltip content='Tooltip abajo' position='bottom'><Button variant='secondary'>Bottom</Button></Tooltip>
          <Tooltip content='Tooltip izquierda' position='left'><Button variant='secondary'>Left</Button></Tooltip>
          <Tooltip content='Tooltip derecha' position='right'><Button variant='secondary'>Right</Button></Tooltip>
        </CodePreview>
      </Section>

      <Section title='Con Iconos'>
        <CodePreview code={iconsCode}>
          <div className='flex items-center gap-2'>
            <span className='text-[var(--text-secondary)]'>Pasa el cursor sobre el icono</span>
            <Tooltip content='Este es un texto de ayuda informativo'>
              <Info className='w-4 h-4 text-violet-400 cursor-help' />
            </Tooltip>
          </div>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={tooltipProps} /></Section>
    </>
  )
}
