import OrderList from '../../../../../../../views/apps/leads/apollo_leads/list'
import {getApolloLeadData} from '@/app/server/actions'
const ApolloLeadsPage = () => {
  const data2 = getApolloLeadData()

  return (
    <>
      {/* <h1 className='mb-4'>#Apollo Leads</h1> */}
      <OrderList apolloLeadData={data2} ></OrderList>
    </>
  )
}

export default ApolloLeadsPage

