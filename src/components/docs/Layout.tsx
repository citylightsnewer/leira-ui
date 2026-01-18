import { type ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Github, Coffee } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

export function Layout ({ children }: LayoutProps) {
  return (
    <div className='min-h-screen bg-[var(--bg-primary)]'>
      <Sidebar />

      <main className='lg:pl-64'>
        <header className='sticky top-0 z-30 h-16 bg-[var(--bg-primary)]/80 backdrop-blur-lg border-b border-[var(--border-color)]'>
          <div className='flex items-center justify-between h-full px-6 lg:px-8'>
            <div className='lg:hidden' /> {/* Spacer for mobile menu button */}
            <div className='hidden lg:block'>
              <h1 className='text-lg font-semibold gradient-text'>
                Leira UI - Componentes React + Tailwind CSS
              </h1>
            </div>
            <div className='flex items-center gap-2'>
              <a
                href='https://buymeacoffee.com/leira_qc'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-sm font-medium hover:from-amber-300 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/25'
              >
                <Coffee className='w-4 h-4' />
                <span className='hidden sm:inline'>Donar</span>
              </a>
              <a
                href='https://github.com/citylightsnewer/leira-ui'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors'
              >
                <Github className='w-5 h-5' />
              </a>
            </div>
          </div>
        </header>

        <div className='p-6 lg:p-8'>
          {children}
        </div>
      </main>
    </div>
  )
}

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader ({ title, description }: PageHeaderProps) {
  return (
    <div className='mb-8'>
      <h1 className='text-3xl font-bold text-[var(--text-primary)] mb-2'>{title}</h1>
      <p className='text-[var(--text-secondary)]'>{description}</p>
    </div>
  )
}

interface SectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function Section ({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className='text-xl font-semibold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border-color)]'>
        {title}
      </h2>
      {children}
    </section>
  )
}
