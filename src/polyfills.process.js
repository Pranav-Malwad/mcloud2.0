const envSource = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {}

if (typeof globalThis.process === 'undefined') {
  globalThis.process = { env: {} }
}

if (!globalThis.process.env) {
  globalThis.process.env = {}
}

const defaults = {
  NEXTAUTH_BASEPATH: '',
  NEXT_PUBLIC_APP_URL: typeof window !== 'undefined' ? window.location.origin : '',
  NEXT_PUBLIC_DOCS_URL: '#',
  API_URL: ''
}

Object.assign(globalThis.process.env, defaults)

if (envSource.VITE_NEXTAUTH_BASEPATH) globalThis.process.env.NEXTAUTH_BASEPATH = envSource.VITE_NEXTAUTH_BASEPATH
if (envSource.VITE_NEXT_PUBLIC_APP_URL) globalThis.process.env.NEXT_PUBLIC_APP_URL = envSource.VITE_NEXT_PUBLIC_APP_URL
if (envSource.VITE_NEXT_PUBLIC_DOCS_URL) globalThis.process.env.NEXT_PUBLIC_DOCS_URL = envSource.VITE_NEXT_PUBLIC_DOCS_URL
if (envSource.VITE_API_URL) globalThis.process.env.API_URL = envSource.VITE_API_URL
