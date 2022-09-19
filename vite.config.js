import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@navigation',
        replacement: path.resolve(__dirname, 'src/navigation')
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/layouts')
      },
      {
        find: '@i18n',
        replacement: path.resolve(__dirname, 'src/i18n')
      }
    ]
  }
})
