import { type ReactNode } from 'react'

// Types
interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  icon: ReactNode
  href: string
  label: string
}

// Simple Footer
interface SimpleFooterProps {
  logo?: ReactNode
  copyright?: string
  links?: FooterLink[]
  className?: string
}

export function SimpleFooter({ logo, copyright, links = [], className = '' }: SimpleFooterProps) {
  return (
    <footer className={`bg-[var(--bg-card)] border-t border-[var(--border-color)] ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            {logo || <span className='text-lg font-bold gradient-text'>Logo</span>}
            {copyright && <span className='text-sm text-[var(--text-muted)]'>{copyright}</span>}
          </div>
          {links.length > 0 && (
            <nav className='flex flex-wrap items-center gap-6'>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors'
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}

// Multi-column Footer
interface MultiColumnFooterProps {
  logo?: ReactNode
  description?: string
  sections: FooterSection[]
  socialLinks?: SocialLink[]
  copyright?: string
  className?: string
}

export function MultiColumnFooter({
  logo,
  description,
  sections,
  socialLinks = [],
  copyright,
  className = ''
}: MultiColumnFooterProps) {
  return (
    <footer className={`bg-[var(--bg-card)] border-t border-[var(--border-color)] ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            {logo || <span className='text-xl font-bold gradient-text'>Logo</span>}
            {description && (
              <p className='mt-4 text-sm text-[var(--text-secondary)] leading-relaxed'>
                {description}
              </p>
            )}
            {socialLinks.length > 0 && (
              <div className='mt-6 flex items-center gap-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className='p-2 rounded-lg bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-violet-400 hover:bg-violet-500/10 transition-colors'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className='text-sm font-semibold text-[var(--text-primary)] mb-4'>
                {section.title}
              </h3>
              <ul className='space-y-3'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className='text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        {copyright && (
          <div className='mt-12 pt-8 border-t border-[var(--border-color)]'>
            <p className='text-sm text-[var(--text-muted)] text-center'>
              {copyright}
            </p>
          </div>
        )}
      </div>
    </footer>
  )
}

// Centered Footer
interface CenteredFooterProps {
  logo?: ReactNode
  tagline?: string
  links?: FooterLink[]
  socialLinks?: SocialLink[]
  copyright?: string
  className?: string
}

export function CenteredFooter({
  logo,
  tagline,
  links = [],
  socialLinks = [],
  copyright,
  className = ''
}: CenteredFooterProps) {
  return (
    <footer className={`bg-[var(--bg-card)] border-t border-[var(--border-color)] ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col items-center text-center'>
          {/* Logo & Tagline */}
          {logo || <span className='text-2xl font-bold gradient-text'>Logo</span>}
          {tagline && (
            <p className='mt-2 text-sm text-[var(--text-secondary)]'>
              {tagline}
            </p>
          )}

          {/* Links */}
          {links.length > 0 && (
            <nav className='mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4'>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors'
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className='mt-8 flex items-center gap-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className='p-2 rounded-lg text-[var(--text-secondary)] hover:text-violet-400 hover:bg-violet-500/10 transition-colors'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}

          {/* Copyright */}
          {copyright && (
            <p className='mt-8 text-sm text-[var(--text-muted)]'>
              {copyright}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

// Newsletter Footer
interface NewsletterFooterProps {
  logo?: ReactNode
  title?: string
  description?: string
  inputPlaceholder?: string
  buttonText?: string
  onSubmit?: (email: string) => void
  sections?: FooterSection[]
  copyright?: string
  className?: string
}

export function NewsletterFooter({
  logo,
  title = 'Suscríbete a nuestro newsletter',
  description = 'Recibe las últimas novedades directamente en tu bandeja de entrada.',
  inputPlaceholder = 'tu@email.com',
  buttonText = 'Suscribirse',
  onSubmit,
  sections = [],
  copyright,
  className = ''
}: NewsletterFooterProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    onSubmit?.(email)
  }

  return (
    <footer className={`bg-[var(--bg-card)] border-t border-[var(--border-color)] ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Newsletter Section */}
        <div className='max-w-2xl mx-auto text-center mb-12'>
          {logo || <span className='text-xl font-bold gradient-text'>Logo</span>}
          <h3 className='mt-6 text-xl font-semibold text-[var(--text-primary)]'>
            {title}
          </h3>
          <p className='mt-2 text-sm text-[var(--text-secondary)]'>
            {description}
          </p>
          <form onSubmit={handleSubmit} className='mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input
              type='email'
              name='email'
              placeholder={inputPlaceholder}
              required
              className='flex-1 px-4 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20'
            />
            <button
              type='submit'
              className='px-6 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/25'
            >
              {buttonText}
            </button>
          </form>
        </div>

        {/* Link Sections */}
        {sections.length > 0 && (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[var(--border-color)]'>
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className='text-sm font-semibold text-[var(--text-primary)] mb-4'>
                  {section.title}
                </h4>
                <ul className='space-y-3'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className='text-sm text-[var(--text-secondary)] hover:text-violet-400 transition-colors'
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Copyright */}
        {copyright && (
          <div className='pt-8 border-t border-[var(--border-color)]'>
            <p className='text-sm text-[var(--text-muted)] text-center'>
              {copyright}
            </p>
          </div>
        )}
      </div>
    </footer>
  )
}
