'use client'

import React, { useState, Suspense } from 'react'
import { Card, Tabs, Tab } from '@mui/material'
import dynamic from 'next/dynamic'
import Shimmer from '@components/shimmer-effect'

const OrderListTable = dynamic(() => import('@views/apps/accounts/details/OrderListTable'), { ssr: false, loading: () => <Shimmer variant='rectangular' width='100%' height={400} /> })
const ContactListTable = dynamic(() => import('@views/apps/accounts/details/ContactListTable'), { ssr: false, loading: () => <Shimmer variant='rectangular' width='100%' height={400} /> })

const AssociatedInfoTab = ({ tableData }) => {
  const [currentTab, setCurrentTab] = useState('contacts')

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <Card>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        className='px-5 mt-2'
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab value='contacts' label='Associated Contacts' />
        <Tab value='quotes' label='Associated Quotes' />
      </Tabs>
      
      <div className="[&>.MuiCard-root]:shadow-none [&>.MuiCard-root]:border-none [&>.MuiCard-root]:rounded-none pt-2">
        <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={400} />}>
          {currentTab === 'contacts' && <ContactListTable orderData={tableData?.orderData} />}
          {currentTab === 'quotes' && <OrderListTable orderData={tableData?.orderData} />}
        </Suspense>
      </div>
    </Card>
  )
}

export default AssociatedInfoTab
