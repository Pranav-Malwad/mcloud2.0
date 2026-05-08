'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { signIn } from 'next-auth/react'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, minLength, string, email, pipe, nonEmpty } from 'valibot'
import classnames from 'classnames'

// Component Imports
import titleLogo from '@/assets/iconify-icons/svg/titlelogo.png'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const schema = object({
  email: pipe(string(), minLength(1, 'This field is required'), email('Please enter a valid email address')),
  password: pipe(
    string(),
    nonEmpty('This field is required'),
    minLength(5, 'Password must be at least 5 characters long')
  )
})

const PARTICLE_COLORS = ['#4F6BFF', '#7C4DFF', '#EC4899', '#EF4444', '#F59E0B', '#67E8F9']
const SEPARATION_RADIUS = 16
const SEPARATION_RADIUS_SQ = SEPARATION_RADIUS * SEPARATION_RADIUS
const GRID_SIZE = 26
const MAX_SPEED = 1.45
const INTERACTION_RADIUS = 220
const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS
const SWIRL_STRENGTH = 0.12
const ATTRACTION_STRENGTH = 0.02
const CURSOR_DIRECTION_STRENGTH = 0.004
const RETURN_STRENGTH = 0.012
const DAMPING = 0.93

const LogoParticleField = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })

    if (!ctx) return

    let rafId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let cursorActive = false
    let cursorX = 0
    let cursorY = 0
    let cursorVX = 0
    let cursorVY = 0
    let prevCursorX = 0
    let prevCursorY = 0
    let particleCount = 0
    let particles = []
    let centerX = 0
    let centerY = 0

    const createParticle = () => {
      // Blend uniform coverage with center-biased placement for denser logo/cursor region.
      const centerBiased = Math.random() < 0.58
      const spreadX = width * 0.22
      const spreadY = height * 0.22
      const x = centerBiased ? centerX + (Math.random() - 0.5) * spreadX * 2 : Math.random() * width
      const y = centerBiased ? centerY + (Math.random() - 0.5) * spreadY * 2 : Math.random() * height

      return {
        x,
        y,
        homeX: x,
        homeY: y,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: 0.7 + Math.random() * 1.1,
        dashLen: 3.2 + Math.random() * 4.8,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.09,
        color: PARTICLE_COLORS[(Math.random() * PARTICLE_COLORS.length) | 0],
        alpha: 0.3 + Math.random() * 0.35
      }
    }

    const resize = () => {
      width = container.clientWidth
      height = container.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const area = width * height
      const density = width < 1000 ? 1 / 6400 : 1 / 3100

      centerX = width / 2
      centerY = height / 2
      particleCount = Math.max(320, Math.min(760, Math.floor(area * density)))
      particles = Array.from({ length: particleCount }, createParticle)
      cursorX = width / 2
      cursorY = height / 2
      prevCursorX = cursorX
      prevCursorY = cursorY
    }

    const onPointerMove = event => {
      const rect = container.getBoundingClientRect()
      cursorX = event.clientX - rect.left
      cursorY = event.clientY - rect.top
      cursorVX = cursorX - prevCursorX
      cursorVY = cursorY - prevCursorY
      prevCursorX = cursorX
      prevCursorY = cursorY
      cursorActive = true
    }

    const onPointerLeave = () => {
      cursorActive = false
      cursorVX = 0
      cursorVY = 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const grid = new Map()

      for (let i = 0; i < particleCount; i += 1) {
        const p = particles[i]
        const gx = (p.x / GRID_SIZE) | 0
        const gy = (p.y / GRID_SIZE) | 0
        const key = `${gx},${gy}`
        const list = grid.get(key)

        if (list) list.push(i)
        else grid.set(key, [i])
      }

      for (let i = 0; i < particleCount; i += 1) {
        const p = particles[i]
        const dx = cursorX - p.x
        const dy = cursorY - p.y
        const distSq = dx * dx + dy * dy
        const homeDx = p.homeX - p.x
        const homeDy = p.homeY - p.y

        // Cursor-following antigravity-like swirl/wave.
        if (cursorActive && distSq < INTERACTION_RADIUS_SQ) {
          const dist = Math.sqrt(distSq) || 1
          const force = 1 - dist / INTERACTION_RADIUS
          const angle = Math.atan2(dy, dx)
          const swirlX = -Math.sin(angle) * force * SWIRL_STRENGTH
          const swirlY = Math.cos(angle) * force * SWIRL_STRENGTH
          const followX = (cursorX - p.x) * force * ATTRACTION_STRENGTH
          const followY = (cursorY - p.y) * force * ATTRACTION_STRENGTH

          p.vx += swirlX + followX + cursorVX * CURSOR_DIRECTION_STRENGTH
          p.vy += swirlY + followY + cursorVY * CURSOR_DIRECTION_STRENGTH
        }

        // Spring back to each particle's own base position to prevent global collapse.
        p.vx += homeDx * RETURN_STRENGTH
        p.vy += homeDy * RETURN_STRENGTH

        // Local separation/repulsion to enforce minimum spacing between nearby particles.
        const gx = (p.x / GRID_SIZE) | 0
        const gy = (p.y / GRID_SIZE) | 0

        for (let ox = -1; ox <= 1; ox += 1) {
          for (let oy = -1; oy <= 1; oy += 1) {
            const neighbors = grid.get(`${gx + ox},${gy + oy}`)
            if (!neighbors) continue

            for (let n = 0; n < neighbors.length; n += 1) {
              const j = neighbors[n]
              if (j <= i) continue

              const other = particles[j]
              const sdx = p.x - other.x
              const sdy = p.y - other.y
              const sepSq = sdx * sdx + sdy * sdy

              if (sepSq > 0.0001 && sepSq < SEPARATION_RADIUS_SQ) {
                const sep = Math.sqrt(sepSq)
                const force = ((SEPARATION_RADIUS - sep) / SEPARATION_RADIUS) * 0.05
                const nx = sdx / sep
                const ny = sdy / sep

                p.vx += nx * force
                p.vy += ny * force
                other.vx -= nx * force
                other.vy -= ny * force
              }
            }
          }
        }

        p.vx += (Math.random() - 0.5) * 0.003
        p.vy += (Math.random() - 0.5) * 0.003
        p.vx *= DAMPING
        p.vy *= DAMPING
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)

        if (speed > MAX_SPEED) {
          const scale = MAX_SPEED / speed
          p.vx *= scale
          p.vy *= scale
        }

        p.x += p.vx
        p.y += p.vy
        p.angle += p.spin + (Math.abs(p.vx) + Math.abs(p.vy)) * 0.02

        // Hard bounds: keep particles strictly in the left panel.
        if (p.x < 2) {
          p.x = 2
          p.vx = Math.abs(p.vx) * 0.35
        }
        if (p.x > width - 2) {
          p.x = width - 2
          p.vx = -Math.abs(p.vx) * 0.35
        }
        if (p.y < 2) {
          p.y = 2
          p.vy = Math.abs(p.vy) * 0.35
        }
        if (p.y > height - 2) {
          p.y = height - 2
          p.vy = -Math.abs(p.vy) * 0.35
        }

        ctx.globalAlpha = p.alpha
        ctx.strokeStyle = p.color
        ctx.lineWidth = p.size
        const halfLen = p.dashLen * 0.5
        const x1 = p.x - Math.cos(p.angle) * halfLen
        const y1 = p.y - Math.sin(p.angle) * halfLen
        const x2 = p.x + Math.cos(p.angle) * halfLen
        const y2 = p.y + Math.sin(p.angle) * halfLen

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      rafId = window.requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener('resize', resize)
    container.addEventListener('pointermove', onPointerMove, { passive: true })
    container.addEventListener('pointerenter', onPointerMove, { passive: true })
    container.addEventListener('pointerleave', onPointerLeave, { passive: true })

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerenter', onPointerMove)
      container.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className='absolute inset-0 overflow-hidden'>
      <canvas ref={canvasRef} className='pointer-events-none block h-full w-full' aria-hidden='true' />
    </div>
  )
}

const Login = () => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [errorState, setErrorState] = useState(null)

  // Hooks
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const { settings } = useSettings()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: 'admin@materialize.com',
      password: 'admin'
    }
  })

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit = async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res && res.ok && res.error === null) {
      // Vars
      const redirectURL = searchParams.get('redirectTo') ?? '/'

      router.replace(getLocalizedUrl(redirectURL, locale))
    } else {
      if (res?.error) {
        const error = JSON.parse(res.error)

        setErrorState(error)
      }
    }
  }

  return (
    <div className='flex min-bs-[100dvh] bg-backgroundDefault'>
      <div
        className={classnames('relative hidden md:flex md:basis-[60%] md:items-center md:justify-center md:p-10', {
          'border-ie': settings.skin === 'bordered'
        })}
      >
        <LogoParticleField />
        <div className='relative z-[1] flex items-center justify-center gap-3 rounded-2xl bg-backgroundDefault/30 px-5 py-4 backdrop-blur-[1px]'>
          <img src={titleLogo} alt='MCloud logo' className='h-20 w-20 object-contain' />
          <Typography variant='h3' className='font-semibold tracking-[0.2px] text-textPrimary'>
            MCloud
          </Typography>
        </div>
      </div>

      <div className='flex basis-full md:basis-[40%] justify-center items-center min-bs-[100dvh] bg-backgroundPaper p-6 md:p-12 md:border-is md:border-[var(--mui-palette-divider)]'>
        <div className='flex flex-col items-center md:items-stretch gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div className='md:hidden'>
            <Link href={getLocalizedUrl('/', locale)} className='inline-flex items-center justify-center' aria-label='Go to home'>
              <img src={titleLogo} alt='MCloud logo' className='h-14 w-14 object-contain' />
            </Link>
          </div>

          <div>
            <Typography variant='h4'>{`Welcome to MCloud!👋🏻`}</Typography>
            <Typography>Please sign-in to your account and start the adventure</Typography>
          </div>

          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  autoFocus
                  type='email'
                  label='Email'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText: errors?.email?.message || errorState?.message[0]
                  })}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Password'
                  id='login-password'
                  type={isPasswordShown ? 'text' : 'password'}
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowPassword}
                          onMouseDown={e => e.preventDefault()}
                          aria-label='toggle password visibility'
                        >
                          <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  {...(errors.password && { error: true, helperText: errors.password.message })}
                />
              )}
            />
            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
              <Typography
                className='text-end'
                color='primary'
                component={Link}
                href={getLocalizedUrl('/forgot-password', locale)}
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Log In
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>New on our platform?</Typography>
              <Typography component={Link} href={getLocalizedUrl('/register', locale)} color='primary'>
                Create an account
              </Typography>
            </div>
          </form>

          <Divider className='gap-3'>or</Divider>
          <Button
            color='secondary'
            className='self-center text-textPrimary'
            startIcon={<img src='/images/logos/google.png' alt='Google' width={22} />}
            sx={{ '& .MuiButton-startIcon': { marginInlineEnd: 3 } }}
            onClick={() => signIn('google')}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Login
