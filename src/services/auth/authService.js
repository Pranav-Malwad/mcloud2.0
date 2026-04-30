import { users } from '@/app/api/login/users'
import { isApiMode } from '@/services/config/appConfig'
import { httpGet, httpPost } from '@/services/http/client'

const mapBackendUserToSession = user => ({
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image || '/images/avatars/1.png'
  },
  accessToken: user.accessToken,
  refreshToken: user.refreshToken
})

const mockCredentialsLogin = ({ email, password }) => {
  const matchedUser = users.find(user => user.email === email && user.password === password)

  if (!matchedUser) {
    return {
      ok: false,
      error: JSON.stringify({ message: ['Email or Password is invalid'] }),
      status: 401,
      url: null,
      session: null
    }
  }

  return {
    ok: true,
    error: null,
    status: 200,
    url: null,
    session: {
      user: {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
        image: matchedUser.image
      }
    }
  }
}

export const credentialsLogin = async ({ email, password }) => {
  if (!isApiMode()) return mockCredentialsLogin({ email, password })

  try {
    const payload = await httpPost('/auth/login', { email, password })

    return {
      ok: true,
      error: null,
      status: 200,
      url: null,
      session: mapBackendUserToSession(payload)
    }
  } catch (error) {
    return {
      ok: false,
      error: JSON.stringify(error.payload || { message: [error.message] }),
      status: error.status || 500,
      url: null,
      session: null
    }
  }
}

export const fetchMe = async token => {
  if (!isApiMode()) return null

  try {
    return await httpGet('/auth/me', { token })
  } catch {
    return null
  }
}

export const logout = async refreshToken => {
  if (!isApiMode()) return

  try {
    await httpPost('/auth/logout', { refreshToken })
  } catch {
    // Best-effort logout; frontend state is cleared regardless.
  }
}

export const refreshSession = async refreshToken => {
  if (!isApiMode() || !refreshToken) return null

  try {
    const payload = await httpPost('/auth/refresh', { refreshToken })
    return mapBackendUserToSession(payload)
  } catch {
    return null
  }
}
