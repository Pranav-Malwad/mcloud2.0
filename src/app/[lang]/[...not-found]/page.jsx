// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import NotFound from '@views/NotFound'
import { useParams } from 'next/navigation'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getServerMode, getSystemMode } from '@core/utils/serverHelpers'

const NotFoundPage = ({ params }) => {
  const routeParams = useParams()
  params = params || routeParams || {}

  // Vars
  const lang = params?.lang || routeParams?.lang || 'en'
  const direction = i18n.langDirection[lang] || i18n.langDirection.en
  const mode = getServerMode()
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <BlankLayout systemMode={systemMode}>
        <NotFound mode={mode} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
