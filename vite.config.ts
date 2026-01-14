import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/components/ui/index.ts'),
          name: 'LeiraUI',
          fileName: (format) => `leira-ui.${format}.js`
        },
        outDir: 'dist-lib',
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime',
              'lucide-react': 'LucideReact'
            }
          }
        },
        sourcemap: true,
        minify: 'esbuild'
      }
    }
  }

  return {
    plugins: [
      react(),
      tailwindcss()
    ]
  }
})
