import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@core', replacement: fileURLToPath(new URL('./src/@core', import.meta.url)) },
      { find: '@layouts', replacement: fileURLToPath(new URL('./src/@layouts', import.meta.url)) },
      { find: '@menu', replacement: fileURLToPath(new URL('./src/@menu', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@configs', replacement: fileURLToPath(new URL('./src/configs', import.meta.url)) },
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
      { find: 'next/link', replacement: fileURLToPath(new URL('./src/compat/next/link.jsx', import.meta.url)) },
      { find: 'next/navigation', replacement: fileURLToPath(new URL('./src/compat/next/navigation.jsx', import.meta.url)) },
      { find: 'next/dynamic', replacement: fileURLToPath(new URL('./src/compat/next/dynamic.jsx', import.meta.url)) },
      { find: 'next/headers', replacement: fileURLToPath(new URL('./src/compat/next/headers.js', import.meta.url)) },
      { find: 'next/font/google', replacement: fileURLToPath(new URL('./src/compat/next/font-google.js', import.meta.url)) },
      { find: 'next-auth/react', replacement: fileURLToPath(new URL('./src/compat/next-auth/react.jsx', import.meta.url)) },
      { find: 'next-auth', replacement: fileURLToPath(new URL('./src/compat/next-auth/index.js', import.meta.url)) },
      { find: '@mui/material-nextjs/v14-appRouter', replacement: fileURLToPath(new URL('./src/compat/mui/AppRouterCacheProvider.jsx', import.meta.url)) }
    ]
  }
})
