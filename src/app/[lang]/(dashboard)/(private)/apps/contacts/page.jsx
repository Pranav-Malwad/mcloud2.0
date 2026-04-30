
// Data Imports
import { getEcommerceData } from '@/app/server/actions'
import ContactList from '../../../../../../views/apps/contacts/list'

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
const CustomerListTablePage = () => {
  // Vars
  const data = getEcommerceData()

  return (
    <>
      {/* <h1 className='mb-4'>#Contacts</h1> */}
      <ContactList customerData={data?.customerData} />
    </>
  )
}

export default CustomerListTablePage

