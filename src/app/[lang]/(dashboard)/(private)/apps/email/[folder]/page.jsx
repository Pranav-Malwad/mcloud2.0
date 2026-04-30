import { useParams } from 'next/navigation'
// Component Imports
import EmailWrapper from '@views/apps/email'

const EmailFolderPage = ({ params }) => {
  const routeParams = useParams()
  params = params || routeParams || {}
  return <EmailWrapper folder={params.folder} />
}

export default EmailFolderPage
