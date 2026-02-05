import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const assetsDir = path.resolve(__dirname, 'src/assets')

export default defineConfig({
  plugins: [
    // Resolve figma:asset/... imports to local src/assets (Figma Make exports)
    {
      name: 'figma-asset-resolver',
      resolveId(id) {
        if (id.startsWith('figma:asset/')) {
          const filename = id.slice('figma:asset/'.length)
          return path.resolve(assetsDir, filename)
        }
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
