'use client'

// Next Imports
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalizedUrl } from '@/utils/i18n'

// Component Imports
import CustomerDetails from '@/views/apps/contacts/details'

// Data Imports
import { getEcommerceData } from '@/app/server/actions'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/ecommerce` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */
/* const getEcommerceData = () => {
  // Vars
  const res = fetch(`${process.env.API_URL}/apps/ecommerce`)

  if (!res.ok) {
    throw new Error('Failed to fetch ecommerce data')
  }

  return res.json()
} */
const CustomerDetailsPage = ({ params }) => {
  const routeParams = useParams()
  const navigate = useNavigate()
  const [filteredData, setFilteredData] = useState(undefined)

  params = params || routeParams || {}

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      try {
        const data = await getEcommerceData()
        const customer = data?.customerData?.find(item => item.customerId === params.id)

        if (!mounted) return

        if (!customer) {
          navigate(getLocalizedUrl('/not-found', params.lang), { replace: true })
          return
        }

        setFilteredData(customer)
      } catch (error) {
        console.error('Failed to load contact details:', error)
        if (mounted) {
          navigate(getLocalizedUrl('/not-found', params.lang), { replace: true })
        }
      }
    }

    if (params?.id) {
      loadData()
    }

    return () => {
      mounted = false
    }
  }, [navigate, params?.id])

  if (!params?.id || !filteredData) {
    return null
  }

  return <CustomerDetails customerData={filteredData} customerId={params.id} />
}

export default CustomerDetailsPage

