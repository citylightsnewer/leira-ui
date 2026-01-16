# Guía de SEO para Leira UI

## ✅ Implementado

### 1. Meta Tags Mejorados
- ✅ Title optimizado: "Leira UI - Componentes React + Tailwind CSS | Biblioteca de UI Moderna"
- ✅ Meta description completa con keywords
- ✅ Meta keywords relevantes
- ✅ Canonical URL
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags

### 2. Schema Markup (JSON-LD)
- ✅ **WebSite Schema**: Define tu sitio web con acción de búsqueda
- ✅ **SiteNavigationElement**: Lista todos los componentes principales
- ✅ **SoftwareApplication**: Define tu paquete NPM

### 3. Archivos de SEO
- ✅ `sitemap.xml` - Lista todas las páginas con prioridades
- ✅ `robots.txt` - Guía a los crawlers

---

## 📋 Próximos Pasos

### 1. Enviar a Google Search Console

1. Ve a: https://search.google.com/search-console
2. Agrega tu propiedad: `https://leira-ui.vercel.app`
3. Verifica con el meta tag (ya añadido): `XmXw5vI9KWDce3303DW93EJDf1F7E3k51uSuoGkTHnk`
4. Envía tu sitemap: `https://leira-ui.vercel.app/sitemap.xml`

### 2. Optimizar para Sitelinks

Para que Google muestre Sitelinks (enlaces adicionales), necesitas:

#### A. Estructura de URLs Clara ✅
```
leira-ui.vercel.app/           ← Inicio
leira-ui.vercel.app/buttons    ← Componente
leira-ui.vercel.app/cards      ← Componente
```

#### B. Navegación Consistente ✅
Tu Sidebar ya tiene todos los enlaces principales correctamente estructurados.

#### C. Contenido de Calidad
- ✅ Ya tienes ejemplos de código
- ✅ Props documentadas
- ✅ Descripciones claras

#### D. Backlinks y Tráfico
Necesitas obtener enlaces desde:
- GitHub (tu README con enlace al sitio)
- NPM (descripción del paquete con enlace)
- Comunidades de React/Tailwind
- Dev.to, Medium (artículos sobre los componentes)

### 3. Mejoras Adicionales Recomendadas

#### a) Breadcrumbs en cada página
Añade breadcrumbs visuales y con schema:

```tsx
// En cada página de componente
<nav aria-label="Breadcrumb">
  <ol itemScope itemType="https://schema.org/BreadcrumbList">
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
      <a itemProp="item" href="/">
        <span itemProp="name">Inicio</span>
      </a>
      <meta itemProp="position" content="1" />
    </li>
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
      <span itemProp="name">Buttons</span>
      <meta itemProp="position" content="2" />
    </li>
  </ol>
</nav>
```

#### b) Meta Tags Dinámicos por Página
Actualmente, todas las páginas comparten el mismo `<title>`. Para mejorar:

**Opción 1: react-helmet-async**
```bash
npm install react-helmet-async
```

```tsx
// En cada página
import { Helmet } from 'react-helmet-async';

export function ButtonsPage() {
  return (
    <>
      <Helmet>
        <title>Buttons - Leira UI | Componentes React + Tailwind</title>
        <meta name="description" content="Componentes Button con múltiples variantes: primary, secondary, outline, ghost. Incluye estados de carga y disabled." />
        <link rel="canonical" href="https://leira-ui.vercel.app/buttons" />
      </Helmet>
      {/* ... resto del contenido */}
    </>
  )
}
```

**Opción 2: document.title (más simple)**
```tsx
// En cada página
import { useEffect } from 'react';

export function ButtonsPage() {
  useEffect(() => {
    document.title = 'Buttons - Leira UI';
  }, []);
  
  // ... resto
}
```

#### c) Enlaces Internos Descriptivos
Asegúrate de que los anchor texts sean descriptivos:

```tsx
// ❌ Malo
<a href="/buttons">Ver más</a>

// ✅ Bueno
<a href="/buttons">Ver componentes Button</a>
<a href="/cards">Explorar componentes Card</a>
```

#### d) Imágenes Optimizadas
```tsx
// Siempre incluir alt descriptivo
<img 
  src="/preview.png" 
  alt="Preview de componentes Leira UI mostrando Buttons, Cards y Modals" 
  loading="lazy"
/>
```

### 4. Rendimiento (Core Web Vitals)

Vercel ya optimiza muchas cosas, pero verifica:

1. **Lazy Loading de Componentes**
```tsx
import { lazy, Suspense } from 'react';

const ButtonsPage = lazy(() => import('./pages/ButtonsPage'));

<Suspense fallback={<Spinner />}>
  <ButtonsPage />
</Suspense>
```

2. **Minimizar CSS/JS** (Vite ya lo hace en producción ✅)

3. **Preload Critical Resources**
```html
<link rel="preload" href="/leira-ui.svg" as="image" type="image/svg+xml">
```

---

## 📊 Monitoreo

### Herramientas para verificar tu SEO:

1. **Google Search Console** - https://search.google.com/search-console
   - Ver indexación
   - Errores de rastreo
   - Rendimiento de búsqueda

2. **Google PageSpeed Insights** - https://pagespeed.web.dev/
   - Medir Core Web Vitals
   - Sugerencias de optimización

3. **Rich Results Test** - https://search.google.com/test/rich-results
   - Verificar que tu Schema Markup es válido

4. **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly
   - Verificar responsive design

### Comandos útiles:

```bash
# Verificar sitemap localmente
curl https://leira-ui.vercel.app/sitemap.xml

# Verificar robots.txt
curl https://leira-ui.vercel.app/robots.txt

# Ver como Google ve tu página
site:leira-ui.vercel.app
```

---

## 🎯 Expectativas Realistas

Los Sitelinks **NO aparecen inmediatamente**. Google los genera automáticamente basándose en:

1. **Autoridad del sitio** (backlinks, edad, tráfico)
2. **Estructura clara** ✅ Ya la tienes
3. **Contenido de calidad** ✅ Ya lo tienes
4. **Tráfico constante** (necesitas promocionar)

**Timeline esperado:**
- 1-2 semanas: Indexación inicial
- 1-3 meses: Mejora en rankings
- 3-6 meses: Posible aparición de Sitelinks (si hay buen tráfico)

---

## 🚀 Promoción

Para acelerar la aparición de Sitelinks:

1. **Publica en NPM** ✅ Ya lo haces
2. **README de GitHub** - Añade enlace prominente al sitio
3. **Dev.to** - Escribe "Creé una biblioteca de componentes React..."
4. **Reddit** - r/reactjs, r/tailwindcss (sin spam)
5. **Twitter/X** - Comparte con #ReactJS #TailwindCSS
6. **Product Hunt** - Lanza tu producto

---

## ✅ Checklist Final

- [x] Meta tags completos (title, description, OG, Twitter)
- [x] Schema Markup (WebSite, SiteNavigation, SoftwareApplication)
- [x] Sitemap.xml creado
- [x] Robots.txt creado
- [x] Google Site Verification
- [x] Canonical URLs
- [ ] Enviar sitemap a Google Search Console
- [ ] Añadir react-helmet para títulos dinámicos
- [ ] Añadir breadcrumbs con schema
- [ ] Optimizar imágenes con alt tags
- [ ] Crear backlinks (GitHub, NPM, artículos)
- [ ] Monitorear con Google Analytics

---

## 📞 Soporte

Si necesitas más ayuda:
- Google Search Central: https://developers.google.com/search
- Schema.org Docs: https://schema.org/docs/schemas.html
- Vercel SEO Guide: https://vercel.com/guides/how-to-improve-seo
