import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { credentialsLogin, logout } from '@/services/auth/authService'
import { clearStoredSession, getStoredSession, setStoredSession } from '@/services/auth/sessionStorage'

const SESSION_EVENT = 'mcloud-auth-changed'

const emitSessionUpdate = () => {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(SESSION_EVENT))
}

const SessionContext = createContext({ data: null, status: 'unauthenticated' })

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(() => getStoredSession())

  useEffect(() => {
    const sync = () => setSession(getStoredSession())
    window.addEventListener(SESSION_EVENT, sync)
    window.addEventListener('storage', sync)

    return () => {
      window.removeEventListener(SESSION_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const value = useMemo(
    () => ({
      data: session,
      status: session ? 'authenticated' : 'unauthenticated'
    }),
    [session]
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export const useSession = () => useContext(SessionContext)

export const signIn = async (provider, options = {}) => {
  if (provider === 'credentials') {
    const result = await credentialsLogin({ email: options.email, password: options.password })

    if (result.ok && result.session) {
      setStoredSession(result.session)
      emitSessionUpdate()
    }

    return {
      ok: result.ok,
      error: result.error,
      status: result.status,
      url: result.url
    }
  }

  if (provider === 'google') {
    // Frontend-only fallback to keep current UX stable until OAuth backend is integrated.
    const googleSession = {
      user: {
        id: 'google-demo',
        name: 'Google User',
        email: 'google.user@example.com',
        image: '/images/avatars/1.png'
      }
    }

    setStoredSession(googleSession)
    emitSessionUpdate()

    const callbackUrl = options.callbackUrl || '/en/dashboards/crm'
    if (typeof window !== 'undefined') {
      window.location.assign(callbackUrl)
    }

    return { ok: true, error: null, status: 200, url: callbackUrl }
  }

  return { ok: false, error: JSON.stringify({ message: ['Unsupported auth provider'] }), status: 400, url: null }
}

export const signOut = async ({ callbackUrl } = {}) => {
  const session = getStoredSession()
  await logout(session?.refreshToken)

  clearStoredSession()
  emitSessionUpdate()

  if (typeof window !== 'undefined' && callbackUrl) {
    window.location.assign(callbackUrl)
  }

  return { ok: true, error: null, status: 200, url: callbackUrl || null }
}
