import { useParams } from 'next/navigation'
// Component Imports
import EmailWrapper from '@views/apps/email'

const EmailLabelPage = ({ params }) => {
  const routeParams = useParams()
  params = params || routeParams || {}
  return <EmailWrapper label={params.label} />
}

export default EmailLabelPage
