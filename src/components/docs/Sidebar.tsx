import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Menu,
  X,
  Home,
  Square,
  CreditCard,
  TextCursorInput,
  AlertCircle,
  Tag,
  Layers,
  PanelTop,
  ChevronDown,
  MessageCircle,
  Loader,
  GalleryHorizontal,
  LayoutTemplate
} from 'lucide-react'

interface NavItem {
  to: string
  label: string
  icon: typeof Home
}

const navItems: NavItem[] = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/buttons', label: 'Buttons', icon: Square },
  { to: '/cards', label: 'Cards', icon: CreditCard },
  { to: '/inputs', label: 'Inputs', icon: TextCursorInput },
  { to: '/alerts', label: 'Alerts', icon: AlertCircle },
  { to: '/badges', label: 'Badges', icon: Tag },
  { to: '/modals', label: 'Modals', icon: Layers },
  { to: '/tabs', label: 'Tabs', icon: PanelTop },
  { to: '/accordion', label: 'Accordion', icon: ChevronDown },
  { to: '/tooltips', label: 'Tooltips', icon: MessageCircle },
  { to: '/spinners', label: 'Spinners', icon: Loader },
  { to: '/carousel', label: 'Carousel', icon: GalleryHorizontal },
  { to: '/menu', label: 'Menu', icon: Menu },
  { to: '/footer', label: 'Footer', icon: LayoutTemplate }
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className='fixed top-4 left-4 z-50 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] lg:hidden'
      >
        <Menu className='w-5 h-5' />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-[var(--bg-secondary)] border-r border-[var(--border-color)]
          transform transition-transform duration-300 ease-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className='flex items-center justify-between h-16 px-4 border-b border-[var(--border-color)]'>
          <div className='flex items-center gap-3'>
            <div className='bg-white rounded-lg p-1'>
              <img src='/leira-ui.svg' alt='Leira UI' className='h-7 w-auto' />
            </div>
            <span className='font-semibold text-[var(--text-primary)]'>Leira UI</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='p-1.5 rounded-lg hover:bg-[var(--bg-hover)] lg:hidden'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Navigation */}
        <nav className='p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]'>
          <p className='px-3 py-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider'>
            Componentes
          </p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-all duration-200
                ${isActive
                  ? 'bg-violet-500/15 text-violet-400 border-l-2 border-violet-500'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'
                }
              `}
            >
              <item.icon className='w-4 h-4' />
              <span className='text-sm font-medium'>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
