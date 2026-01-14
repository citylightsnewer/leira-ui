# Leira UI

<p align="center">
  <img src="./public/leira-ui.svg" alt="Leira UI Logo" width="200" />
</p>

<p align="center">
  <strong>Biblioteca de componentes React + Tailwind CSS</strong>
</p>

<p align="center">
  Componentes modernos, elegantes y listos para usar en tus proyectos.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/leira-ui"><img src="https://img.shields.io/npm/v/leira-ui?color=violet" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/leira-ui"><img src="https://img.shields.io/npm/dm/leira-ui?color=blue" alt="npm downloads" /></a>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript" alt="TypeScript" />
</p>

---

## 📸 Vista Previa

<p align="center">
  <img src="./src/assets/image.png" alt="Leira UI Preview" width="100%" />
</p>

---

## ✨ Características

- 🎨 **Tema oscuro premium** por defecto
- ⚡ **React 19** compatible
- 🌊 **Tailwind CSS 4** optimizado  
- 📦 **TypeScript** con tipos incluidos
- 🎭 **Animaciones suaves** y transiciones elegantes
- 📱 **Responsive** y accesible
- 📋 **Copy & Paste** - Copia el código directamente

---

## 📦 Instalación

### Opción 1: Paquete NPM (Recomendado)

```bash
npm install leira-ui
```

```bash
pnpm add leira-ui
```

```bash
yarn add leira-ui
```

### Opción 2: Copiar y Pegar

Visita la [documentación](https://leira-ui.vercel.app) y copia el código de cada componente directamente a tu proyecto.

---

## ⚡ Inicio Rápido

### 1. Instala las dependencias

```bash
npm install leira-ui lucide-react
```

### 2. Importa y usa los componentes

```tsx
import { Button, Card, CardBody, Input, Alert } from 'leira-ui'

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
}
```

---

## 🧩 Componentes Disponibles

| Componente | Descripción | Requiere lucide-react |
|------------|-------------|:---------------------:|
| `Button` | Botones con variantes, tamaños y estados de carga | ❌ |
| `Card` | Tarjetas con header, body, footer y hover effects | ❌ |
| `Input` | Campos de entrada con validación e iconos | ❌ |
| `Textarea` | Área de texto con validación | ❌ |
| `Alert` | Alertas de notificación con variantes | ✅ |
| `Modal` | Modales con animaciones | ✅ |
| `Badge` | Etiquetas y badges con estilos | ❌ |
| `Tabs` | Pestañas con estilos pill y underline | ❌ |
| `Accordion` | Acordeones colapsables con animaciones | ✅ |
| `Tooltip` | Tooltips con posicionamiento flexible | ❌ |
| `Spinner` | Indicadores de carga y skeletons | ❌ |
| `Carousel` | Carruseles de imágenes, cards y testimonios | ✅ |

---

## 📖 Documentación

Visita nuestra documentación completa con ejemplos interactivos:

🔗 **[leira-ui.vercel.app](https://leira-ui.vercel.app)**

En la documentación encontrarás:
- ✅ Ejemplos interactivos de cada componente
- ✅ Código completo para copiar
- ✅ Guía de instalación paso a paso
- ✅ Props y variantes de cada componente

---

## 🎨 Personalización

Los componentes usan variables CSS que puedes personalizar en tu proyecto:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #16161f;
  --bg-hover: #1e1e2a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --text-muted: #666680;
  --border-color: #2a2a3a;
}
```

---

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/leira-ui.git
cd leira-ui

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build documentación (Vercel)
pnpm build

# Build paquete NPM
pnpm build:lib
```

---

## 📁 Estructura del Proyecto

```
leira-ui/
├── src/
│   ├── components/
│   │   ├── ui/              # 📦 Componentes (NPM)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   └── docs/            # 🌐 Solo documentación
│   └── pages/               # 🌐 Páginas de docs
├── dist/                    # Build Vercel
├── dist-lib/                # Build NPM
└── package.json
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para nuevos componentes o mejoras:

1. Haz fork del repositorio
2. Crea una rama (`git checkout -b feature/nuevo-componente`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nuevo componente'`)
4. Push a la rama (`git push origin feature/nuevo-componente`)
5. Abre un Pull Request

---

## 📄 Licencia

MIT © Leira UI

---

<p align="center">
  Hecho con 💜 para la comunidad React
</p>
