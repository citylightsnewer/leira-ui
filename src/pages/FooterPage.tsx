import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { SimpleFooter, MultiColumnFooter, CenteredFooter, NewsletterFooter } from '../components/ui/Footer'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { useInstallMethod } from '../context/InstallMethodContext'

const footerCode = `import { type ReactNode } from 'react'

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

// SimpleFooter, MultiColumnFooter, CenteredFooter, NewsletterFooter
// ... full implementation`

const simpleFooterProps = [
  { name: 'logo', type: 'ReactNode', default: '-', description: 'Logo del footer' },
  { name: 'copyright', type: 'string', default: '-', description: 'Texto de copyright' },
  { name: 'links', type: 'FooterLink[]', default: '[]', description: 'Links de navegación' }
]

const multiColumnProps = [
  { name: 'logo', type: 'ReactNode', default: '-', description: 'Logo del footer' },
  { name: 'description', type: 'string', default: '-', description: 'Descripción de la empresa' },
  { name: 'sections', type: 'FooterSection[]', default: '-', description: 'Secciones de links' },
  { name: 'socialLinks', type: 'SocialLink[]', default: '[]', description: 'Links de redes sociales' },
  { name: 'copyright', type: 'string', default: '-', description: 'Texto de copyright' }
]

const simpleLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Nosotros', href: '#' },
  { label: 'Servicios', href: '#' },
  { label: 'Contacto', href: '#' }
]

const footerSections = [
  {
    title: 'Producto',
    links: [
      { label: 'Características', href: '#' },
      { label: 'Precios', href: '#' },
      { label: 'Integraciones', href: '#' },
      { label: 'API', href: '#' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Prensa', href: '#' }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'Documentación', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Estado', href: '#' }
    ]
  }
]

const socialLinks = [
  { icon: <Github className='w-5 h-5' />, href: '#', label: 'GitHub' },
  { icon: <Twitter className='w-5 h-5' />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className='w-5 h-5' />, href: '#', label: 'LinkedIn' },
  { icon: <Mail className='w-5 h-5' />, href: '#', label: 'Email' }
]

export function FooterPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { SimpleFooter, MultiColumnFooter, CenteredFooter, NewsletterFooter } from 'leira-ui'`
    : `import { SimpleFooter, MultiColumnFooter, CenteredFooter, NewsletterFooter } from './components/ui/Footer'`

  const simpleCode = `${importStatement}

<SimpleFooter
  logo={<span className="font-bold">Logo</span>}
  copyright="© 2024 Mi Empresa"
  links={[
    { label: 'Inicio', href: '#' },
    { label: 'Nosotros', href: '#' },
    { label: 'Contacto', href: '#' }
  ]}
/>`

  const multiColumnCode = `${importStatement}
import { Github, Twitter, Linkedin } from 'lucide-react'

<MultiColumnFooter
  logo={<span className="font-bold">Logo</span>}
  description="Tu descripción aquí..."
  sections={[
    { title: 'Producto', links: [...] },
    { title: 'Empresa', links: [...] }
  ]}
  socialLinks={[
    { icon: <Github />, href: '#', label: 'GitHub' }
  ]}
  copyright="© 2024 Mi Empresa"
/>`

  const centeredCode = `${importStatement}

<CenteredFooter
  logo={<span className="font-bold">Logo</span>}
  tagline="Tu eslogan aquí"
  links={[...]}
  socialLinks={[...]}
  copyright="© 2024 Mi Empresa"
/>`

  const newsletterCode = `${importStatement}

<NewsletterFooter
  logo={<span className="font-bold">Logo</span>}
  title="Suscríbete a nuestro newsletter"
  description="Recibe las últimas novedades..."
  onSubmit={(email) => console.log(email)}
  sections={[...]}
  copyright="© 2024 Mi Empresa"
/>`

  return (
    <>
      <PageHeader title='Footer' description='Componentes de footer: Simple, Multi-columna, Centrado y con Newsletter.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={footerCode} title='Footer.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>Haz clic en &quot;Ver código&quot; para ver el componente completo.</div>
          </CodePreview>
        </Section>
      )}

      <Section title='Simple Footer'>
        <CodePreview code={simpleCode}>
          <div className='w-full rounded-xl overflow-hidden border border-[var(--border-color)]'>
            <SimpleFooter
              logo={<span className='text-lg font-bold gradient-text'>LeiraUI</span>}
              copyright='© 2024 Leira UI. Todos los derechos reservados.'
              links={simpleLinks}
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Multi-Column Footer'>
        <CodePreview code={multiColumnCode}>
          <div className='w-full rounded-xl overflow-hidden border border-[var(--border-color)]'>
            <MultiColumnFooter
              logo={<span className='text-xl font-bold gradient-text'>LeiraUI</span>}
              description='Una colección de componentes React + Tailwind CSS listos para usar en tus proyectos.'
              sections={footerSections}
              socialLinks={socialLinks}
              copyright='© 2024 Leira UI. Todos los derechos reservados.'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Centered Footer'>
        <CodePreview code={centeredCode}>
          <div className='w-full rounded-xl overflow-hidden border border-[var(--border-color)]'>
            <CenteredFooter
              logo={<span className='text-2xl font-bold gradient-text'>LeiraUI</span>}
              tagline='Componentes modernos para React'
              links={simpleLinks}
              socialLinks={socialLinks}
              copyright='© 2024 Leira UI. Todos los derechos reservados.'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Newsletter Footer'>
        <CodePreview code={newsletterCode}>
          <div className='w-full rounded-xl overflow-hidden border border-[var(--border-color)]'>
            <NewsletterFooter
              logo={<span className='text-xl font-bold gradient-text'>LeiraUI</span>}
              title='Suscríbete a nuestro newsletter'
              description='Recibe las últimas novedades, tutoriales y actualizaciones directamente en tu bandeja.'
              onSubmit={(email) => alert(`Suscrito: ${email}`)}
              sections={footerSections.slice(0, 2)}
              copyright='© 2024 Leira UI. Todos los derechos reservados.'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='SimpleFooter Props'><PropsTable props={simpleFooterProps} /></Section>
      <Section title='MultiColumnFooter Props'><PropsTable props={multiColumnProps} /></Section>
    </>
  )
}
