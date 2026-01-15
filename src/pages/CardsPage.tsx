import { PageHeader, Section } from '../components/docs/Layout'
import { CodePreview, PropsTable } from '../components/docs/CodePreview'
import { Card, CardHeader, CardBody, CardFooter, ImageCard } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useInstallMethod } from '../context/InstallMethodContext'

const cardCode = `import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card ({ children, className = '', hover = false, glow = false }: CardProps) {
  return (
    <div
      className={\`
        bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]
        \${hover ? 'transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1' : ''}
        \${glow ? 'animate-pulse-glow' : ''}
        \${className}
      \`}
    >
      {children}
    </div>
  )
}

export function CardHeader ({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={\`px-6 py-4 border-b border-[var(--border-color)] \${className}\`}>
      {children}
    </div>
  )
}

export function CardBody ({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={\`px-6 py-4 \${className}\`}>{children}</div>
}

export function CardFooter ({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={\`px-6 py-4 border-t border-[var(--border-color)] \${className}\`}>
      {children}
    </div>
  )
}

// Card with Image variant
interface ImageCardProps {
  image: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function ImageCard ({ image, title, description, children, className = '' }: ImageCardProps) {
  return (
    <Card hover className={\`overflow-hidden \${className}\`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent" />
      </div>
      <CardBody>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{title}</h3>
        {description && <p className="text-sm text-[var(--text-secondary)]">{description}</p>}
        {children}
      </CardBody>
    </Card>
  )
}`

const cardProps = [
  { name: 'hover', type: 'boolean', default: 'false', description: 'Activa efecto hover con elevación' },
  { name: 'glow', type: 'boolean', default: 'false', description: 'Activa animación de brillo pulsante' },
  { name: 'className', type: 'string', default: "''", description: 'Clases CSS adicionales' }
]

export function CardsPage() {
  const { installMethod } = useInstallMethod()
  const isNpm = installMethod === 'npm'

  const importStatement = isNpm
    ? `import { Card, CardHeader, CardBody, CardFooter, ImageCard } from 'leira-ui'`
    : `import { Card, CardHeader, CardBody, CardFooter, ImageCard } from './components/ui/Card'`

  const basicCode = `${importStatement}

<Card>
  <CardHeader><h3>Título</h3></CardHeader>
  <CardBody><p>Contenido</p></CardBody>
  <CardFooter><Button>Acción</Button></CardFooter>
</Card>`

  const hoverCode = `${importStatement}

<Card hover>
  <CardBody>
    <h4>Hover Effect</h4>
    <p>Pasa el cursor para ver el efecto.</p>
  </CardBody>
</Card>`

  return (
    <>
      <PageHeader title='Card' description='Tarjetas con headers, footers, efectos hover y variantes de imagen.' />

      {!isNpm && (
        <Section title='Código Completo del Componente'>
          <CodePreview code={cardCode} title='Card.tsx - Copia este archivo completo'>
            <div className='text-sm text-[var(--text-secondary)]'>
              Haz clic en &quot;Ver código&quot; para ver el componente completo.
            </div>
          </CodePreview>
        </Section>
      )}

      <Section title='Card Básica'>
        <CodePreview code={basicCode} title='Card con Header, Body y Footer'>
          <Card className='w-full max-w-sm'>
            <CardHeader><h3 className='font-semibold'>Título de la Card</h3></CardHeader>
            <CardBody><p className='text-[var(--text-secondary)] text-sm'>Este es el contenido del body de la card.</p></CardBody>
            <CardFooter><Button size='sm'>Acción</Button></CardFooter>
          </Card>
        </CodePreview>
      </Section>

      <Section title='Card con Hover'>
        <CodePreview code={hoverCode}>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
            <Card hover><CardBody><h4 className='font-semibold mb-2'>Hover Effect</h4><p className='text-sm text-[var(--text-secondary)]'>Pasa el cursor para ver el efecto.</p></CardBody></Card>
            <Card hover><CardBody><h4 className='font-semibold mb-2'>Elevación</h4><p className='text-sm text-[var(--text-secondary)]'>La card se eleva con borde púrpura.</p></CardBody></Card>
            <Card hover><CardBody><h4 className='font-semibold mb-2'>Sombra</h4><p className='text-sm text-[var(--text-secondary)]'>También añade sombra sutil.</p></CardBody></Card>
          </div>
        </CodePreview>
      </Section>

      <Section title='Image Card Simple'>
        <CodePreview code={`${importStatement}

<ImageCard 
  image="https://..." 
  title="Título" 
  description="Descripción" 
/>`}>
          <div className='w-full max-w-sm'>
            <ImageCard
              image='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
              title='Desarrollo Web'
              description='Crea aplicaciones web modernas con React y Tailwind CSS'
            />
          </div>
        </CodePreview>
      </Section>

      <Section title='Grid de Cards'>
        <CodePreview code={`${importStatement}

{/* Contenedor padre con grid de cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ImageCard image="..." title="Card 1" description="..." />
  <ImageCard image="..." title="Card 2" description="..." />
  <ImageCard image="..." title="Card 3" description="..." />
</div>`}>
          <Card className='w-full p-6'>
            <h3 className='text-lg font-semibold mb-4'>Nuestros Servicios</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <ImageCard image='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' title='Desarrollo Web' description='Aplicaciones web modernas' />
              <ImageCard image='https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop' title='Diseño UI/UX' description='Interfaces atractivas' />
              <ImageCard image='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' title='Analytics' description='Visualiza tus datos' />
            </div>
          </Card>
        </CodePreview>
      </Section>

      <Section title='Props'><PropsTable props={cardProps} /></Section>
    </>
  )
}
