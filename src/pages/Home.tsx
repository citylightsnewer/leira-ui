import { useState } from 'react'
import { PageHeader, Section } from '../components/docs/Layout'
import { Card, CardBody } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { CodePreview } from '../components/docs/CodePreview'
import { Square, CreditCard, TextCursorInput, AlertCircle, Tag, Layers, PanelTop, ChevronDown, MessageCircle, Loader, GalleryHorizontal, Folder, FileCode, Package, Copy, Terminal, Paintbrush } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface ComponentInfo {
  to: string
  label: string
  icon: typeof Square
  description: string
  dependency?: string
}

const components: ComponentInfo[] = [
  { to: '/buttons', label: 'Buttons', icon: Square, description: 'Botones con variantes, tamaños y estados' },
  { to: '/cards', label: 'Cards', icon: CreditCard, description: 'Tarjetas con headers, footers y efectos hover' },
  { to: '/inputs', label: 'Inputs', icon: TextCursorInput, description: 'Campos de entrada con validación e iconos' },
  { to: '/alerts', label: 'Alerts', icon: AlertCircle, description: 'Alertas de notificación con variantes', dependency: 'lucide-react' },
  { to: '/badges', label: 'Badges', icon: Tag, description: 'Etiquetas y badges con múltiples estilos' },
  { to: '/modals', label: 'Modals', icon: Layers, description: 'Modales con animaciones y tamaños', dependency: 'lucide-react' },
  { to: '/tabs', label: 'Tabs', icon: PanelTop, description: 'Pestañas con diferentes estilos' },
  { to: '/accordion', label: 'Accordion', icon: ChevronDown, description: 'Acordeones colapsables con animaciones', dependency: 'lucide-react' },
  { to: '/tooltips', label: 'Tooltips', icon: MessageCircle, description: 'Tooltips con posicionamiento flexible' },
  { to: '/spinners', label: 'Spinners', icon: Loader, description: 'Indicadores de carga y skeletons' },
  { to: '/carousel', label: 'Carousel', icon: GalleryHorizontal, description: 'Carruseles de imágenes, cards y testimonios', dependency: 'lucide-react' }
]

type InstallMethod = 'npm' | 'manual'

export function HomePage() {
  const [installMethod, setInstallMethod] = useState<InstallMethod>('npm')

  return (
    <>
      <PageHeader
        title='Leira UI'
        description='Una colección de componentes React + Tailwind CSS listos para copiar y pegar en tus proyectos.'
      />

      {/* Hero */}
      <div className='relative mb-12 p-8 rounded-2xl bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-transparent border border-violet-500/20 overflow-hidden'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className='relative'>
          <h2 className='text-2xl font-bold mb-4 gradient-text'>
            Componentes Modernos y Elegantes
          </h2>
          <p className='text-[var(--text-secondary)] mb-6 max-w-2xl'>
            Diseñados con un enfoque en la experiencia del usuario, estos componentes incluyen animaciones suaves,
            tema oscuro por defecto, y son completamente personalizables.
          </p>
          <div className='flex flex-wrap gap-3'>
            <span className='px-3 py-1.5 rounded-full bg-violet-500/20 text-violet-400 text-sm border border-violet-500/30'>React 19</span>
            <span className='px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 text-sm border border-indigo-500/30'>Tailwind CSS 4</span>
            <span className='px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm border border-emerald-500/30'>TypeScript</span>
            <span className='px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm border border-amber-500/30'>Copy &amp; Paste</span>
          </div>
        </div>
      </div>

      {/* Crear Proyecto Desde Cero */}
      <Section title='Crear Proyecto Nuevo'>
        <Card className='mb-8'>
          <CardBody>
            <div className='text-center mb-6'>
              <div className='inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4'>
                <Terminal className='w-12 h-12 text-blue-400' />
              </div>
              <h3 className='text-xl font-bold text-[var(--text-primary)] mb-2'>Configuración desde Cero</h3>
              <p className='text-[var(--text-secondary)]'>Crea un proyecto nuevo con Vite + React + TypeScript + Tailwind CSS 4</p>
            </div>

            {/* Step 1: Create Vite project */}
            <div className='flex gap-4 mb-6'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold'>1</span>
              <div className='flex-1'>
                <p className='font-medium text-[var(--text-primary)] mb-3'>Crea un nuevo proyecto con Vite</p>
                <CodePreview
                  code={`npm create vite@latest mi-proyecto -- --template react-ts
cd mi-proyecto`}
                  title='Terminal'
                >
                  <span className='text-sm text-[var(--text-muted)]'>Esto crea un proyecto React con TypeScript</span>
                </CodePreview>
              </div>
            </div>

            {/* Step 2: Install Tailwind CSS 4 */}
            <div className='flex gap-4 mb-6'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold'>2</span>
              <div className='flex-1'>
                <p className='font-medium text-[var(--text-primary)] mb-3'>Instala Tailwind CSS 4 y el plugin de Vite</p>
                <CodePreview
                  code='npm install tailwindcss @tailwindcss/vite'
                  title='Terminal'
                >
                  <span className='text-sm text-[var(--text-muted)]'>Tailwind CSS 4 con integración nativa para Vite</span>
                </CodePreview>
              </div>
            </div>

            {/* Step 3: Configure Vite */}
            <div className='flex gap-4 mb-6'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold'>3</span>
              <div className='flex-1'>
                <p className='font-medium text-[var(--text-primary)] mb-3'>Configura el plugin en vite.config.ts</p>
                <CodePreview
                  code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
})`}
                  title='vite.config.ts'
                >
                  <span className='text-sm text-[var(--text-muted)]'>Agrega el plugin de Tailwind CSS</span>
                </CodePreview>
              </div>
            </div>

            {/* Step 4: Update CSS */}
            <div className='flex gap-4 mb-6'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold'>4</span>
              <div className='flex-1'>
                <p className='font-medium text-[var(--text-primary)] mb-3'>Actualiza tu archivo CSS principal</p>
                <CodePreview
                  code={`@import "tailwindcss";`}
                  title='src/index.css'
                >
                  <span className='text-sm text-[var(--text-muted)]'>En Tailwind 4 solo necesitas esta línea</span>
                </CodePreview>
              </div>
            </div>

            {/* Step 5: Run dev server */}
            <div className='flex gap-4'>
              <span className='flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold'>5</span>
              <div className='flex-1'>
                <p className='font-medium text-[var(--text-primary)] mb-3'>¡Inicia el servidor de desarrollo!</p>
                <CodePreview
                  code='npm run dev'
                  title='Terminal'
                >
                  <span className='text-sm text-[var(--text-muted)]'>Tu proyecto está listo en http://localhost:5173</span>
                </CodePreview>
              </div>
            </div>
          </CardBody>
        </Card>
      </Section>

      {/* Installation Guide */}
      <Section title='Instalar Leira UI'>
        {/* Toggle Switch */}
        <div className='flex justify-center mb-8'>
          <div className='relative inline-flex bg-[var(--bg-secondary)] rounded-xl p-1 border border-[var(--border-color)]'>
            {/* Animated background */}
            <div
              className={`
                absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg
                bg-gradient-to-r from-violet-500 to-indigo-500
                transition-all duration-300 ease-out
                ${installMethod === 'npm' ? 'left-1' : 'left-[calc(50%+2px)]'}
              `}
            />

            <button
              onClick={() => setInstallMethod('npm')}
              className={`
                relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
                transition-colors duration-300
                ${installMethod === 'npm' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
              `}
            >
              <Package className='w-4 h-4' />
              Paquete NPM
            </button>

            <button
              onClick={() => setInstallMethod('manual')}
              className={`
                relative z-10 flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
                transition-colors duration-300
                ${installMethod === 'manual' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}
              `}
            >
              <Copy className='w-4 h-4' />
              Copiar y Pegar
            </button>
          </div>
        </div>

        {/* Content with animation */}
        <div className='relative overflow-hidden'>
          {/* NPM Package Method */}
          <div
            className={`
              transition-all duration-500 ease-out
              ${installMethod === 'npm'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none'}
            `}
          >
            <Card>
              <CardBody>
                <div className='text-center mb-6'>
                  <div className='inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 mb-4'>
                    <Package className='w-12 h-12 text-violet-400' />
                  </div>
                  <h3 className='text-xl font-bold text-[var(--text-primary)] mb-2'>Instalación con NPM</h3>
                  <p className='text-[var(--text-secondary)]'>La forma más rápida y sencilla de empezar</p>
                </div>

                {/* Step 1 */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-semibold'>1</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Instala el paquete Leira UI</p>
                    <CodePreview code='npm install leira-ui lucide-react' title='Terminal'>
                      <span className='text-sm text-[var(--text-muted)]'>lucide-react es opcional, solo si usas componentes con iconos</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 2 */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-semibold'>2</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Importa los estilos en tu archivo CSS</p>
                    <CodePreview
                      code={`@import "tailwindcss";

/* Permite que Tailwind genere los estilos de leira-ui */
@source "../node_modules/leira-ui";`}
                      title='src/index.css'
                    >
                      <span className='text-sm text-[var(--text-muted)]'>Agrega @source para que Tailwind incluya los estilos de la librería</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 3 */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-semibold'>3</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Importa los estilos del tema (opcional)</p>
                    <CodePreview
                      code={`// En main.tsx o App.tsx
import 'leira-ui/styles.css'`}
                      title='main.tsx'
                    >
                      <span className='text-sm text-[var(--text-muted)]'>Esto importa las variables CSS y animaciones del tema oscuro</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 4 */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-semibold'>4</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Usa los componentes</p>
                    <CodePreview
                      code={`import { Button, Card, CardBody, Input, Alert } from 'leira-ui'

function App() {
  return (
    <Card hover>
      <CardBody>
        <Input label="Email" placeholder="tu@email.com" />
        <Button variant="primary">Enviar</Button>
        <Alert variant="success">¡Operación exitosa!</Alert>
      </CardBody>
    </Card>
  )
}`} title='App.tsx'
                    >
                      <span className='text-sm text-[var(--text-muted)]'>Importa directamente desde &apos;leira-ui&apos;</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 5 */}
                <div className='flex gap-4'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-semibold'>5</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>¡Listo! Ya puedes usar los componentes</p>
                    <p className='text-sm text-[var(--text-secondary)]'>
                      Todos los componentes están listos para usar. Asegúrate de tener Tailwind CSS configurado en tu proyecto.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Manual Copy/Paste Method */}
          <div
            className={`
              transition-all duration-500 ease-out
              ${installMethod === 'manual'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'}
            `}
          >
            <Card>
              <CardBody>
                <div className='text-center mb-6'>
                  <div className='inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 mb-4'>
                    <Copy className='w-12 h-12 text-emerald-400' />
                  </div>
                  <h3 className='text-xl font-bold text-[var(--text-primary)] mb-2'>Copiar y Pegar</h3>
                  <p className='text-[var(--text-secondary)]'>Control total sobre el código de cada componente</p>
                </div>

                {/* Step 1: Create folder structure */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold'>1</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Crea la estructura de carpetas</p>
                    <p className='text-sm text-[var(--text-secondary)] mb-4'>
                      Dentro de <code className='px-1.5 py-0.5 rounded bg-[var(--bg-hover)]'>src</code>, crea <code className='px-1.5 py-0.5 rounded bg-[var(--bg-hover)]'>components/ui</code>:
                    </p>

                    <div className='bg-[var(--bg-secondary)] rounded-lg p-4 font-mono text-sm border border-[var(--border-color)]'>
                      <div className='flex items-center gap-2 text-[var(--text-primary)]'>
                        <Folder className='w-4 h-4 text-amber-400' />
                        <span>src/</span>
                      </div>
                      <div className='ml-6 mt-1'>
                        <div className='flex items-center gap-2 text-[var(--text-primary)]'>
                          <Folder className='w-4 h-4 text-amber-400' />
                          <span>components/</span>
                        </div>
                        <div className='ml-6 mt-1'>
                          <div className='flex items-center gap-2 text-[var(--text-primary)]'>
                            <Folder className='w-4 h-4 text-amber-400' />
                            <span>ui/</span>
                            <span className='text-[var(--text-muted)]'>← Aquí van los componentes</span>
                          </div>
                          <div className='ml-6 mt-1 space-y-1 text-[var(--text-secondary)]'>
                            <div className='flex items-center gap-2'>
                              <FileCode className='w-4 h-4 text-blue-400' />
                              <span>Button.tsx</span>
                            </div>
                            <div className='flex items-center gap-2'>
                              <FileCode className='w-4 h-4 text-blue-400' />
                              <span>Card.tsx</span>
                            </div>
                            <div className='flex items-center gap-2 text-[var(--text-muted)]'>
                              <span className='ml-6'>...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Install dependencies */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold'>2</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Instala dependencias (si es necesario)</p>
                    <p className='text-sm text-[var(--text-secondary)] mb-3'>
                      Algunos componentes usan iconos de <Badge size='sm' variant='secondary'>lucide-react</Badge>
                    </p>
                    <CodePreview code='npm install lucide-react' title='Opcional'>
                      <span className='text-sm text-[var(--text-muted)]'>Solo si el componente lo requiere</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 3: Copy code */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold'>3</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Copia el código del componente</p>
                    <p className='text-sm text-[var(--text-secondary)] mb-3'>
                      Ve a la página del componente, haz clic en <strong>&quot;Ver código&quot;</strong> y luego en <strong>&quot;Copiar código&quot;</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 4: Create file and paste */}
                <div className='flex gap-4 mb-6'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold'>4</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Crea el archivo y pega el código</p>
                    <CodePreview
                      code={`// src/components/ui/Button.tsx

// Pega aquí el código que copiaste
export function Button({ children, variant = 'primary', ...props }) {
  // ... código del componente
}`} title='Ejemplo'
                    >
                      <span className='text-sm text-[var(--text-muted)]'>Crea un archivo .tsx por cada componente</span>
                    </CodePreview>
                  </div>
                </div>

                {/* Step 5: Import */}
                <div className='flex gap-4'>
                  <span className='flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold'>5</span>
                  <div className='flex-1'>
                    <p className='font-medium text-[var(--text-primary)] mb-3'>Importa y usa</p>
                    <CodePreview
                      code={`import { Button } from './components/ui/Button'

<Button variant="primary">Haz clic</Button>`} title='Uso'
                    >
                      <span className='text-sm text-[var(--text-muted)]'>Importa desde tu carpeta local</span>
                    </CodePreview>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>

      {/* Theme Customization */}
      <Section title='Personalización del Tema'>
        <Card className='mb-8'>
          <CardBody>
            <div className='flex gap-4 mb-4'>
              <div className='inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20'>
                <Paintbrush className='w-6 h-6 text-pink-400' />
              </div>
              <div>
                <h3 className='font-semibold text-[var(--text-primary)] mb-1'>Variables CSS Personalizables</h3>
                <p className='text-sm text-[var(--text-secondary)]'>Agrega estas variables a tu CSS para personalizar los colores</p>
              </div>
            </div>
            <CodePreview
              code={`:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #16161f;
  --bg-hover: #1e1e2a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --text-muted: #666680;
  --border-color: #2a2a3a;
}`}
              title='src/index.css'
            >
              <span className='text-sm text-[var(--text-muted)]'>Modifica los colores según tu diseño</span>
            </CodePreview>
          </CardBody>
        </Card>
      </Section>

      {/* Dependencies Info */}
      <Section title='Dependencias de Componentes'>
        <Card className='mb-8'>
          <CardBody>
            <p className='text-[var(--text-secondary)] mb-4'>
              Los componentes marcados con <Badge size='sm' variant='secondary'>lucide-react</Badge> requieren esta librería de iconos.
              Los demás funcionan solo con React y Tailwind CSS.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section title='Componentes Disponibles'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {components.map((component) => (
            <NavLink key={component.to} to={component.to}>
              <Card hover className='h-full'>
                <CardBody className='flex items-start gap-4'>
                  <div className='p-3 rounded-xl bg-violet-500/10 text-violet-400'>
                    <component.icon className='w-6 h-6' />
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-2 mb-1'>
                      <h3 className='font-semibold text-[var(--text-primary)]'>{component.label}</h3>
                      {component.dependency && (
                        <Badge size='sm' variant='secondary'>{component.dependency}</Badge>
                      )}
                    </div>
                    <p className='text-sm text-[var(--text-secondary)]'>{component.description}</p>
                  </div>
                </CardBody>
              </Card>
            </NavLink>
          ))}
        </div>
      </Section>
    </>
  )
}
