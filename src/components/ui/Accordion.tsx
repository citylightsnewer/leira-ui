import { useState, type ReactNode } from 'react'
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

export function Accordion ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className = ''
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      )
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div
            key={item.id}
            className='rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden'
          >
            <button
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              className={`
                w-full flex items-center justify-between gap-4 px-4 py-3
                text-left font-medium transition-colors
                ${item.disabled
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[var(--bg-hover)] cursor-pointer'
                }
                ${isOpen ? 'text-violet-400' : 'text-[var(--text-primary)]'}
              `}
            >
              <div className='flex items-center gap-3'>
                {item.icon}
                <span>{item.title}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-out
                ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className='px-4 pb-4 text-sm text-[var(--text-secondary)]'>
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
