import { useState, type ReactNode } from 'react'

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

export function Tabs ({
  items,
  defaultActiveId,
  onChange,
  variant = 'underline',
  className = ''
}: TabsProps) {
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
        return `${base} ${disabled} ${isActive
            ? 'text-violet-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-violet-500 after:rounded-full'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`
      case 'pills':
        return `${base} ${disabled} rounded-lg ${isActive
            ? 'bg-violet-500/20 text-violet-400'
            : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
          }`
      case 'boxed':
        return `${base} ${disabled} rounded-lg ${isActive
            ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm border border-[var(--border-color)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          }`
      default:
        return base
    }
  }

  const getContainerStyles = () => {
    switch (variant) {
      case 'underline':
        return 'flex border-b border-[var(--border-color)]'
      case 'pills':
        return 'flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl'
      case 'boxed':
        return 'flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-xl'
      default:
        return 'flex'
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
      <div className='mt-4 animate-fade-in'>
        {items.find((item) => item.id === activeId)?.content}
      </div>
    </div>
  )
}
