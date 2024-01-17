import { defineConfig } from 'vite'
import { resolve } from 'path'

const build = {
  sourcemap: true,
}

if (process.env.LIB_OUTPUT == 'true') {
  (build as any).lib = {
    entry: resolve(__dirname, 'lib/main.ts'),
    name: 'DSB',
    fileName: 'dsb',
  }
}

export default defineConfig({
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version)
  },
  build
})
