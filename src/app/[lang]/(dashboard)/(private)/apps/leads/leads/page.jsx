import OrderList from '@/views/apps/leads/leads/list/index'
import { getEcommerceData } from '@/app/server/actions'
import { getLeadsData } from '../../../../../../server/actions'
const OrdersPage = () => {
  const data = getEcommerceData()
const data2 = getLeadsData()
  return (
    <>
      {/* <h1 className='mb-4'>#Leads</h1> */}
      <OrderList leadData={data2}></OrderList>
    </>
  )
}

export default OrdersPage

