import { useState, type ReactNode } from 'react'
import { Check, Copy, Eye, Code as CodeIcon } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'

interface CodePreviewProps {
  children: ReactNode
  code: string
  title?: string
  language?: string
}

export function CodePreview ({ children, code, title, language = 'tsx' }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden'>
      {/* Header */}
      {title && (
        <div className='px-4 py-3 border-b border-[var(--border-color)]'>
          <span className='text-sm font-medium text-[var(--text-secondary)]'>{title}</span>
        </div>
      )}

      {/* Preview */}
      <div className='p-6 bg-[var(--bg-secondary)]/50'>
        <div className='flex flex-wrap items-center gap-4'>
          {children}
        </div>
      </div>

      {/* Actions */}
      <div className='flex items-center justify-between px-4 py-2 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/50'>
        <button
          onClick={() => setShowCode(!showCode)}
          className='flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors'
        >
          {showCode ? <Eye className='w-4 h-4' /> : <CodeIcon className='w-4 h-4' />}
          {showCode ? 'Vista previa' : 'Ver código'}
        </button>
        <button
          onClick={copyToClipboard}
          className={`
            flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-all duration-200
            ${copied
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
            }
          `}
        >
          {copied ? <Check className='w-4 h-4' /> : <Copy className='w-4 h-4' />}
          {copied ? '¡Copiado!' : 'Copiar código'}
        </button>
      </div>

      {/* Code with Syntax Highlighting */}
      {showCode && (
        <div className='border-t border-[var(--border-color)] overflow-x-auto'>
          <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre
                style={{ ...style, margin: 0, padding: '1rem', background: '#011627' }}
                className='text-sm leading-relaxed'
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className='inline-block w-8 text-right mr-4 text-gray-500 select-none text-xs'>
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      )}
    </div>
  )
}

// Props Table component
interface PropDefinition {
  name: string
  type: string
  default?: string
  description: string
}

interface PropsTableProps {
  props: PropDefinition[]
}

export function PropsTable ({ props }: PropsTableProps) {
  return (
    <div className='overflow-x-auto rounded-xl border border-[var(--border-color)]'>
      <table className='w-full text-sm'>
        <thead>
          <tr className='bg-[var(--bg-secondary)]'>
            <th className='px-4 py-3 text-left font-medium text-[var(--text-primary)]'>Prop</th>
            <th className='px-4 py-3 text-left font-medium text-[var(--text-primary)]'>Tipo</th>
            <th className='px-4 py-3 text-left font-medium text-[var(--text-primary)]'>Default</th>
            <th className='px-4 py-3 text-left font-medium text-[var(--text-primary)]'>Descripción</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-[var(--border-color)]'>
          {props.map((prop) => (
            <tr key={prop.name} className='bg-[var(--bg-card)]'>
              <td className='px-4 py-3'>
                <code className='px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-400 text-xs'>
                  {prop.name}
                </code>
              </td>
              <td className='px-4 py-3'>
                <code className='text-xs text-amber-400'>{prop.type}</code>
              </td>
              <td className='px-4 py-3'>
                <code className='text-xs text-emerald-400'>{prop.default || '-'}</code>
              </td>
              <td className='px-4 py-3 text-[var(--text-secondary)]'>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
