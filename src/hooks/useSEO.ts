import { useEffect } from 'react'

interface SEOProps {
  title: string
  description?: string
  canonical?: string
}

/**
 * Hook para actualizar meta tags de SEO dinámicamente
 * Uso:
 * useSEO({
 *   title: 'Buttons',
 *   description: 'Componentes Button con múltiples variantes',
 *   canonical: 'https://leira-ui.vercel.app/buttons'
 * })
 */
export function useSEO ({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} - Leira UI | Componentes React + Tailwind CSS`
    document.title = fullTitle

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)
    }

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.href = canonical
    }

    return () => {
      document.title = 'Leira UI - Componentes React + Tailwind CSS | Biblioteca de UI Moderna'
    }
  }, [title, description, canonical])
}
