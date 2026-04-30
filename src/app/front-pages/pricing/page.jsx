// Component Imports
import PricingWrapper from '@/views/front-pages/pricing'

// Data Imports
import { getPricingData } from '@/app/server/actions'

const PricingPage = () => {
  // Vars
  const data = getPricingData()

  return <PricingWrapper data={data} />
}

export default PricingPage

