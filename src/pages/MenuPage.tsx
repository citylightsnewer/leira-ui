import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Navbar, DropdownMenu, Sidebar, Breadcrumb } from '../components/ui/Menu'
import { Button } from '../components/ui/Button'
import { Alert } from '../components/ui/Alert'
import { Home, Settings, User, FileText, HelpCircle, LogOut, Bell, Search, MoreVertical } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const navbarCode = `import { useState, type ReactNode } from 'react'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'

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
  actions?: ReactNode
}

export function Navbar ({ logo, items, variant = 'default', sticky = false, actions }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  // ... implementation
}`

const navbarProps = [
  { name: 'logo', type: 'ReactNode', default: '-', description: 'Logo del navbar' },
  { name: 'items', type: 'MenuItem[]', default: '-', description: 'Items del menú' },
  { name: 'variant', type: "'default' | 'transparent' | 'bordered'", default: "'default'", description: 'Estilo visual' },
  { name: 'sticky', type: 'boolean', default: 'false', description: 'Fija el navbar al scroll' },
  { name: 'actions', type: 'ReactNode', default: '-', description: 'Acciones (botones, etc)' }
]

const dropdownProps = [
  { name: 'trigger', type: 'ReactNode', default: '-', description: 'Elemento que activa el dropdown' },
  { name: 'items', type: 'MenuItem[]', default: '-', description: 'Items del menú' },
  { name: 'position', type: "'left' | 'right'", default: "'left'", description: 'Posición del dropdown' }
]

const sidebarProps = [
  { name: 'items', type: 'MenuItem[]', default: '-', description: 'Items del menú' },
  { name: 'header', type: 'ReactNode', default: '-', description: 'Contenido del header' },
  { name: 'footer', type: 'ReactNode', default: '-', description: 'Contenido del footer' },
  { name: 'collapsed', type: 'boolean', default: 'false', description: 'Colapsa a solo iconos' }
]

const navItems = [
  { id: 'home', label: 'Inicio', href: '#' },
  {
    id: 'products', label: 'Productos', children: [
      { id: 'p1', label: 'Software', href: '#', icon: <FileText className='w-4 h-4' /> },
      { id: 'p2', label: 'Servicios', href: '#', icon: <Settings className='w-4 h-4' /> }
    ]
  },
  { id: 'about', label: 'Nosotros', href: '#' },
  { id: 'contact', label: 'Contacto', href: '#' }
]

const sidebarItems = [
  { id: 'home', label: 'Dashboard', href: '#', icon: <Home className='w-5 h-5' /> },
  { id: 'profile', label: 'Perfil', href: '#', icon: <User className='w-5 h-5' /> },
  { id: 'notifications', label: 'Notificaciones', href: '#', icon: <Bell className='w-5 h-5' /> },
  { id: 'settings', label: 'Configuración', href: '#', icon: <Settings className='w-5 h-5' /> },
  { id: 'help', label: 'Ayuda', href: '#', icon: <HelpCircle className='w-5 h-5' /> }
]

const dropdownItems = [
  { id: 'profile', label: 'Mi Perfil', icon: <User className='w-4 h-4' />, onClick: () => { } },
  { id: 'settings', label: 'Configuración', icon: <Settings className='w-4 h-4' />, onClick: () => { } },
  { id: 'logout', label: 'Cerrar Sesión', icon: <LogOut className='w-4 h-4' />, onClick: () => { } }
]

export function MenuPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Navbar, DropdownMenu, Sidebar, Breadcrumb } from 'leira-ui'`
    : `import { Navbar, DropdownMenu, Sidebar, Breadcrumb } from './components/ui/Menu'`

  const navbarDemoCode = `${importStatement}

const items = [
  { id: 'home', label: 'Inicio', href: '#' },
  { id: 'products', label: 'Productos', children: [
    { id: 'p1', label: 'Software', href: '#' },
    { id: 'p2', label: 'Servicios', href: '#' }
  ]},
]

<Navbar
  logo={<span className="font-bold">Logo</span>}
  items={items}
  variant="default"
  actions={<Button size="sm">Acceder</Button>}
/>`

  const dropdownCode = `${importStatement}
import { User, Settings, LogOut } from 'lucide-react'

const items = [
  { id: 'profile', label: 'Mi Perfil', icon: <User />, onClick: () => {} },
  { id: 'settings', label: 'Configuración', icon: <Settings />, onClick: () => {} },
  { id: 'logout', label: 'Cerrar Sesión', icon: <LogOut />, onClick: () => {} }
]

<DropdownMenu
  trigger={<Button variant="secondary">Menú</Button>}
  items={items}
/>`

  const sidebarCode = `${importStatement}
import { Home, User, Settings, Bell } from 'lucide-react'

const items = [
  { id: 'home', label: 'Dashboard', href: '#', icon: <Home /> },
  { id: 'profile', label: 'Perfil', href: '#', icon: <User /> },
]

<Sidebar
  items={items}
  header={<span className="font-bold">Panel</span>}
/>`

  const breadcrumbCode = `${importStatement}

<Breadcrumb
  items={[
    { label: 'Inicio', href: '#' },
    { label: 'Productos', href: '#' },
    { label: 'Detalles' }
  ]}
/>`

  return (
    <>
      <PageHeader title='Menu' description='Componentes de navegación: Navbar, Dropdown, Sidebar y Breadcrumb.' />

      {!isNpm && (
        <Alert variant='info' title='Dependencia requerida' className='mb-6'>
          Este componente requiere <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>lucide-react</code> para los iconos.
          Instala con: <code className='px-1.5 py-0.5 rounded bg-blue-500/20'>npm install lucide-react</code>
        </Alert>
      )}

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={navbarCode} title='Menu.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Navbar'>
        <CodePreview code={navbarDemoCode}>
          <div className='w-full rounded-xl border border-[var(--border-color)] pb-24'>
            <Navbar
              logo={<span className='text-lg font-bold gradient-text'>LeiraUI</span>}
              items={navItems}
              actions={
                <>
                  <Button variant='ghost' size='sm' icon={<Search className='w-4 h-4' />}>Buscar</Button>
                  <Button size='sm'>Acceder</Button>
                </>
              }
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Navbar Variantes'>
        <CodePreview code={`<Navbar variant="bordered" ... />`}>
          <div className='w-full pb-20'>
            <Navbar logo={<span className='font-bold'>Bordered</span>} items={navItems.slice(0, 3)} variant='bordered' />
          </div>
        </CodePreview>
      </Section>

      <Section title='Navbar con Usuario'>
        <CodePreview code={`<Navbar
  logo={<span className="font-bold">Mi App</span>}
  items={navItems}
  actions={
    <DropdownMenu
      trigger={
        <button className="flex items-center gap-2 p-2 rounded-full hover:bg-[var(--bg-hover)]">
          <User className="w-6 h-6" />
        </button>
      }
      items={[
        { id: 'profile', label: 'Mi Perfil', icon: <User />, onClick: () => {} },
        { id: 'settings', label: 'Configuración', icon: <Settings />, onClick: () => {} },
        { id: 'logout', label: 'Cerrar Sesión', icon: <LogOut />, onClick: () => {} }
      ]}
      position="right"
    />
  }
/>`}>
          <div className='w-full rounded-xl border border-[var(--border-color)] pb-32'>
            <Navbar
              logo={<span className='text-lg font-bold gradient-text'>Mi App</span>}
              items={navItems}
              actions={
                <DropdownMenu
                  trigger={
                    <button className='flex items-center gap-2 p-2 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors'>
                      <User className='w-5 h-5 text-violet-400' />
                    </button>
                  }
                  items={dropdownItems}
                  position='right'
                />
              }
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Dropdown Menu'>
        <CodePreview code={dropdownCode}>
          <div className='flex gap-4'>
            <DropdownMenu
              trigger={<Button variant='secondary'>Menú Usuario</Button>}
              items={dropdownItems}
            />
            <DropdownMenu
              trigger={<button className='p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-secondary)]'><MoreVertical className='w-5 h-5' /></button>}
              items={dropdownItems}
              position='right'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Sidebar'>
        <CodePreview code={sidebarCode}>
          <div className='flex gap-4 h-64'>
            <Sidebar
              items={sidebarItems}
              header={<span className='font-bold gradient-text'>Panel</span>}
            />
            <Sidebar
              items={sidebarItems}
              collapsed
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Breadcrumb'>
        <CodePreview code={breadcrumbCode}>
          <div className='space-y-4'>
            <Breadcrumb items={[
              { label: 'Inicio', href: '#' },
              { label: 'Productos', href: '#' },
              { label: 'Software', href: '#' },
              { label: 'Detalles' }
            ]} />
            <Breadcrumb
              items={[{ label: 'Dashboard', href: '#' }, { label: 'Usuarios' }]}
              separator='›'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Navbar Props'><PropsTable props={navbarProps} /></Section>
      <Section title='Dropdown Props'><PropsTable props={dropdownProps} /></Section>
      <Section title='Sidebar Props'><PropsTable props={sidebarProps} /></Section>
    </>
  )
}
