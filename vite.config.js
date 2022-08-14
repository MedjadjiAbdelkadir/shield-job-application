import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        '@': path.resolve(__dirname, 'src')
      },
      {
        '@components': path.resolve(__dirname, 'src/components')
      },
      {
        '@pages': path.resolve(__dirname, 'src/pages')
      },
      {
        '@assets': path.resolve(__dirname, 'src/assets')
      },
      {
        '@hooks': path.resolve(__dirname, 'src/hooks')
      },
      {
        '@layouts': path.resolve(__dirname, 'src/layouts')
      },
      {
        '@navigation': path.resolve(__dirname, 'src/navigation')
      },
      {
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    ]
  }
})
