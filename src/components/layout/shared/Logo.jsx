'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Third-party Imports
import styled from '@emotion/styled'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Component Imports
import MaterializeLogo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'
import { getLocalizedUrl } from '@/utils/i18n'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

const LogoText = styled.span`
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.15px;
  text-transform: capitalize;
  color: var(--mui-palette-text-primary);
  color: ${({ color }) => color ?? 'var(--mui-palette-text-primary)'};
  transition: ${({ transitionDuration }) =>
    `margin-inline-start ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`};

  ${({ isHovered, isCollapsed, isBreakpointReached }) =>
    !isBreakpointReached && isCollapsed && !isHovered
      ? 'opacity: 0; margin-inline-start: 0;'
      : 'opacity: 1; margin-inline-start: 8px;'}
`

const Logo = ({ color, href }) => {
  // Refs
  const logoTextRef = useRef(null)

  // Hooks
  const { isHovered, transitionDuration, isBreakpointReached } = useVerticalNav()
  const { settings } = useSettings()
  const { lang: locale } = useParams()

  // Vars
  const { layout } = settings
  const resolvedHref = href || getLocalizedUrl(themeConfig.homePageUrl, locale)

  useEffect(() => {
    if (layout !== 'collapsed') {
      return
    }

    if (logoTextRef && logoTextRef.current) {
      if (!isBreakpointReached && layout === 'collapsed' && !isHovered) {
        logoTextRef.current?.classList.add('hidden')
      } else {
        logoTextRef.current.classList.remove('hidden')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, layout, isBreakpointReached])

  return (
    <Link href={resolvedHref} className='flex items-center min-bs-[24px]'>
      <MaterializeLogo />
      <LogoText
        color={color}
        ref={logoTextRef}
        isHovered={isHovered}
        isCollapsed={layout === 'collapsed'}
        transitionDuration={transitionDuration}
        isBreakpointReached={isBreakpointReached}
      >
        {themeConfig.templateName}
      </LogoText>
    </Link>
  )
}

export default Logo
