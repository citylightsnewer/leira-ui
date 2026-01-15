import { useState, type ReactNode } from 'react'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'

// Types
interface MenuItem {
  id: string
  label: string
  href?: string
  icon?: ReactNode
  onClick?: () => void
  children?: MenuItem[]
  disabled?: boolean
}

interface NavbarProps {
  logo?: ReactNode
  items: MenuItem[]
  variant?: 'default' | 'transparent' | 'bordered'
  sticky?: boolean
  className?: string
  actions?: ReactNode
}

interface DropdownMenuProps {
  trigger: ReactNode
  items: MenuItem[]
  position?: 'left' | 'right'
  className?: string
}

interface MobileMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
}

// Navbar Component
export function Navbar({
  logo,
  items,
  variant = 'default',
  sticky = false,
  className = '',
  actions
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const variantStyles = {
    default: 'bg-[var(--bg-card)] border-b border-[var(--border-color)]',
    transparent: 'bg-transparent',
    bordered: 'bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl mx-4 mt-4'
  }

  return (
    <>
      <nav
        className={`
          ${variantStyles[variant]}
          ${sticky ? 'sticky top-0 z-40' : ''}
          ${className}
        `}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              {logo || <span className='text-xl font-bold gradient-text'>Logo</span>}
            </div>

            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-1'>
              {items.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </div>

            {/* Actions & Mobile Toggle */}
            <div className='flex items-center gap-4'>
              {actions && <div className='hidden md:flex items-center gap-2'>{actions}</div>}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className='md:hidden p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'
              >
                {mobileOpen ? <X className='w-5 h-5' /> : <MenuIcon className='w-5 h-5' />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu items={items} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}

// Nav Item with Dropdown support
function NavItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.children && item.children.length > 0) {
    return (
      <div
        className='relative z-50'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={`
            flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium
            transition-colors duration-200
            ${item.disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'}
          `}
          disabled={item.disabled}
        >
          {item.icon}
          {item.label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className='absolute top-full left-0 mt-1 py-2 min-w-48 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] shadow-xl animate-fade-in z-50'>
            {item.children.map((child) => (
              <a
                key={child.id}
                href={child.href}
                onClick={child.onClick}
                className='flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors'
              >
                {child.icon}
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <a
      href={item.href}
      onClick={item.onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
        transition-colors duration-200
        ${item.disabled
          ? 'opacity-50 cursor-not-allowed pointer-events-none'
          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'}
      `}
    >
      {item.icon}
      {item.label}
    </a>
  )
}

// Mobile Menu
function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className='md:hidden fixed inset-0 z-50'>
      <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' onClick={onClose} />
      <div className='absolute right-0 top-0 h-full w-64 bg-[var(--bg-card)] border-l border-[var(--border-color)] animate-slide-in-right'>
        <div className='p-4 border-b border-[var(--border-color)] flex justify-between items-center'>
          <span className='font-semibold text-[var(--text-primary)]'>Menu</span>
          <button onClick={onClose} className='p-2 rounded-lg hover:bg-[var(--bg-hover)]'>
            <X className='w-5 h-5' />
          </button>
        </div>
        <nav className='p-4 space-y-1'>
          {items.map((item) => (
            <MobileNavItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </div>
  )
}

function MobileNavItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false)

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
        >
          <span className='flex items-center gap-3'>
            {item.icon}
            {item.label}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className='ml-4 mt-1 space-y-1'>
            {item.children.map((child) => (
              <a
                key={child.id}
                href={child.href}
                className='flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
              >
                {child.icon}
                {child.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <a
      href={item.href}
      onClick={item.onClick}
      className='flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
    >
      {item.icon}
      {item.label}
    </a>
  )
}

// Dropdown Menu Component
export function DropdownMenu({ trigger, items, position = 'left', className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative inline-block ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <>
          <div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)} />
          <div
            className={`
              absolute z-50 mt-2 py-2 min-w-48 bg-[var(--bg-card)] rounded-xl
              border border-[var(--border-color)] shadow-xl animate-fade-in
              ${position === 'right' ? 'right-0' : 'left-0'}
            `}
          >
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.onClick?.()
                  setIsOpen(false)
                }}
                disabled={item.disabled}
                className={`
                  flex items-center gap-3 w-full px-4 py-2 text-sm text-left
                  ${item.disabled
                    ? 'opacity-50 cursor-not-allowed text-[var(--text-muted)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'}
                `}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Sidebar Menu Component
interface SidebarProps {
  items: MenuItem[]
  header?: ReactNode
  footer?: ReactNode
  collapsed?: boolean
  className?: string
}

export function Sidebar({ items, header, footer, collapsed = false, className = '' }: SidebarProps) {
  return (
    <aside
      className={`
        flex flex-col h-full bg-[var(--bg-card)] border-r border-[var(--border-color)]
        ${collapsed ? 'w-16' : 'w-64'}
        transition-all duration-300
        ${className}
      `}
    >
      {header && (
        <div className='p-4 border-b border-[var(--border-color)]'>
          {header}
        </div>
      )}

      <nav className='flex-1 p-4 space-y-1 overflow-y-auto'>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={item.onClick}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium
              transition-colors duration-200
              ${item.disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'}
              ${collapsed ? 'justify-center' : ''}
            `}
            title={collapsed ? item.label : undefined}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>

      {footer && (
        <div className='p-4 border-t border-[var(--border-color)]'>
          {footer}
        </div>
      )}
    </aside>
  )
}

// Breadcrumb Component
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
  className?: string
}

export function Breadcrumb({ items, separator = '/', className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={index} className='flex items-center gap-2'>
          {index > 0 && <span className='text-[var(--text-muted)]'>{separator}</span>}
          {item.href && index < items.length - 1 ? (
            <a href={item.href} className='text-[var(--text-secondary)] hover:text-violet-400 transition-colors'>
              {item.label}
            </a>
          ) : (
            <span className={index === items.length - 1 ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
