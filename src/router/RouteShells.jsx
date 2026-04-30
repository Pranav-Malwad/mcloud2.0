import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom'

import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'
import BlankLayout from '@layouts/BlankLayout'

import Navigation from '@components/layout/vertical/Navigation'
import Header from '@components/layout/horizontal/Header'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import FrontLayout from '@components/layout/front-pages'
import Customizer from '@core/components/customizer'
import ScrollToTop from '@core/components/scroll-to-top'
import AuthGuard from '@/hocs/AuthGuard'
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

import { i18n } from '@configs/i18n'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

import enDict from '@/data/dictionaries/en.json'
import frDict from '@/data/dictionaries/fr.json'
import arDict from '@/data/dictionaries/ar.json'

const dictionaries = {
  en: enDict,
  fr: frDict,
  ar: arDict
}

const getDictionaryByLang = lang => dictionaries[lang] || dictionaries.en

export const DashboardShell = ({ children, lang }) => {
  const routeParams = useParams()
  const activeLang = lang || routeParams.lang || 'en'
  const direction = i18n.langDirection[activeLang] || 'ltr'
  const mode = getMode()
  const systemMode = getSystemMode()
  const dictionary = getDictionaryByLang(activeLang)

  return (
    <AuthGuard locale={activeLang}>
      <LayoutWrapper
        systemMode={systemMode}
        verticalLayout={
          <VerticalLayout
            navigation={<Navigation dictionary={dictionary} mode={mode} systemMode={systemMode} />}
            navbar={<Navbar />}
            footer={<VerticalFooter />}
          >
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
            {children}
          </HorizontalLayout>
        }
      />
      <ScrollToTop className='mui-fixed'>
        <Button variant='contained' className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'>
          <i className='ri-arrow-up-line' />
        </Button>
      </ScrollToTop>
      <Customizer dir={direction} />
    </AuthGuard>
  )
}

export const BlankShell = ({ children }) => {
  const systemMode = getSystemMode()
  return <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
}

export const GuestShell = ({ children, lang }) => {
  const routeParams = useParams()
  const activeLang = lang || routeParams.lang || 'en'

  return (
    <BlankShell>
      <GuestOnlyRoute lang={activeLang}>{children}</GuestOnlyRoute>
    </BlankShell>
  )
}

export const FrontPagesShell = ({ children }) => {
  const systemMode = getSystemMode()

  return (
    <BlankLayout systemMode={systemMode}>
      <FrontLayout>{children}</FrontLayout>
    </BlankLayout>
  )
}
