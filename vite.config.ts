import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [
        react(),
        {
          name: 'copy-styles',
          closeBundle() {
            // Copy styles.css to dist-lib
            copyFileSync(
              resolve(__dirname, 'src/components/ui/styles.css'),
              resolve(__dirname, 'dist-lib/styles.css')
            )
          }
        }
      ],
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
        minify: 'esbuild',
        cssCodeSplit: false
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
