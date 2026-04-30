// 'use client'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// import QuoteListTable from './QuoteListTable'
// import CardCounters from '@/components/counter-cards'
// import TabsPanel from '../../../../components/tabs-panel'
// import CustomBreadcrumb from '../../../../components/bread-crumbs'
// const OrderList = ({ orderData }) => {
//   const quotesCount = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }

//   const QuotesTabs = [
//     {
//       label: 'QUOTE LIST',
//       content: (
//         <div>
//           <QuoteListTable orderData={orderData}></QuoteListTable>
//         </div>
//       )
//     },
//     {
//       label: 'FORECAST',
//       content: (
//         <div>
//           {' '}
//           <QuoteListTable orderData={orderData} />{' '}
//         </div>
//       )
//     },

//   ]
//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Quotes', path: '/apps/quotes' },
//   ]
//   return (
//     <Grid container spacing={6}>

//        <Grid item xs={12}>
//         <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//       </Grid>
//       <Grid item xs={12}>
//         <CardCounters  entityType='Quotes' counts={quotesCount} />
//       </Grid>
//       <Grid item xs={12}>
//       <TabsPanel tabs={QuotesTabs}></TabsPanel>
//       </Grid>
//     </Grid>
//   )
// }

// export default OrderList
//////////////////////////////////////////////// shimmer effect code ///////////////////
// 'use client'

// // React Imports
// import React, { Suspense, useEffect, useState } from 'react'

// // MUI Imports
// import Grid from '@mui/material/Grid'

// // Component Imports
// const QuoteListTable = React.lazy(() => import('./QuoteListTable'))
// const CardCounters = React.lazy(() => import('@/components/counter-cards'))
// const TabsPanel = React.lazy(() => import('../../../../components/tabs-panel'))
// const CustomBreadcrumb = React.lazy(() => import('../../../../components/bread-crumbs'))

// // Shimmer Component Import
// import Shimmer from '../../../../components/shimmer-effect'
// import Forecast from './ForeCast'

// const OrderList = ({ orderData }) => {
//   const [isLoaded, setIsLoaded] = useState(false)

//   useEffect(() => {
//     setIsLoaded(true)
//   }, [])

//   const quotesCount = {
//     today: 237,
//     weekly: 860,
//     monthly: 4567,
//     total: 21459
//   }

//   const QuotesTabs = [
//     {
//       label: 'QUOTE LIST',
//       content: (
//         <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
//           <QuoteListTable orderData={orderData} />
//         </Suspense>
//       )
//     },
//     {
//       label: 'FORECAST',
//       content: (
//         <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
//           <Forecast></Forecast>
//         </Suspense>
//       )
//     },
//   ]

//   const breadcrumbs = [
//     { label: 'Home', path: '/' },
//     { label: 'Quotes', path: '/apps/quotes' },
//   ]

//   return (
//     <div className={isLoaded ? 'visible' : 'hidden'}>
//       <Grid container spacing={6}>
//         <Grid item xs={12}>
//           <Suspense fallback={<Shimmer variant="text" width="100%" height={50} />}>
//             <CustomBreadcrumb breadcrumbs={breadcrumbs} />
//           </Suspense>
//         </Grid>
//         <Grid item xs={12}>
//           <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={150} />}>
//             <CardCounters entityType='Quotes' counts={quotesCount} />
//           </Suspense>
//         </Grid>
//         <Grid item xs={12}>
//           <Suspense fallback={<Shimmer variant="rectangular" width="100%" height={400} />}>
//             <TabsPanel tabs={QuotesTabs} />
//           </Suspense>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }

// export default OrderList

'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
const QuoteListTable = React.lazy(() => import('./QuoteListTable'))
const CardCounters = React.lazy(() => import('@/components/counter-cards'))
const TabsPanel = React.lazy(() => import('../../../../components/tabs-panel'))
const CustomBreadcrumb = React.lazy(() => import('../../../../components/bread-crumbs'))
import Shimmer from '../../../../components/shimmer-effect'
import Forecast from './ForeCast'

const OrderList = ({ orderData }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [counts, setCounts] = useState({ day: 0, week: 0, month: 0 })
  // const csrf = '9dc0bdb2-53b3-4fd8-b609-23b570116be9'; // Ideally, fetch this dynamically
  useEffect(() => {
    setIsLoaded(true)

    // Fetch counts from the backend
    // const fetchCounts = async () => {
    //   try {
    //     const myHeaders = new Headers()
    //     myHeaders.append('Accept', 'application/json, text/plain, */*')
    //     myHeaders.append('Accept-Language', 'en-US,en;q=0.9')
    //     myHeaders.append('Connection', 'keep-alive')
    //     myHeaders.append(
    //       'Cookie',
    //       'CookieBy=Printform; JSESSIONID=02E13F1949772D86091C54B0DB7BB25A; _ga=GA1.1.1614002359.1723452165; _gcl_au=1.1.1028227209.1723452165; _fbp=fb.0.1723452166441.769535167399618807; colorPref=dark; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=af632d9c4da2effc2a69aeb64026297412b50cfa831a68df7d41d1faf535f9d4%7Caab11794f1c9582b664a94e33d80da0fe56f30bbcf192a8de760d0ed30cf9152; next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..oa3gqazgar3bgBQN.Z2HTUfOf_nR3gkWOVK8F-hWWb1NiWbpoPn4-WC7rart8xA1s2RXi0hCtUU-mFdPFoDaf_omdhgheU87e-Mx-JI9_cN4zMCh3DmwRWeJBpvKHCYQI6DCEItoYR8Lj6s8CkBctZ671xHYcFVpqcfcupu8czNJESiHL-6TwwQuitQz-Lb3Hh2-dryfq73noWKDPR_j-qGWAjynSTGdrXEh9NQIZ5-WNHtiwBPzqVszo.jMbPvf6nrlCJCGOAdqn0Ew; _gid=GA1.1.1553884520.1730091242; _gat_UA-113799841-1=1; _clck=11umgkl%7C2%7Cfqe%7C0%7C1685; _ga_LP6MPKCBRF=GS1.1.1730091242.117.0.1730091242.60.0.0; _ga_X87SZ60JV2=GS1.1.1730091242.117.0.1730091242.60.0.0; _clsk=uscvfd%7C1730091242632%7C1%7C1%7Cw.clarity.ms%2Fcollect; _ga_3S5HMHKDYY=GS1.1.1730091239.122.1.1730091250.49.0.0; _dd_s=logs=1&id=20f25c73-0caa-4c29-be0f-c79f2d4e408b&created=1730090684531&expire=1730092157308'
    //     )
    //     myHeaders.append('Referer', 'http://localhost:8081/paasport/main/crm/opportunities')
    //     myHeaders.append('Sec-Fetch-Dest', 'empty')
    //     myHeaders.append('Sec-Fetch-Mode', 'cors')
    //     myHeaders.append('Sec-Fetch-Site', 'same-origin')
    //     // myHeaders.append(
    //     //   'User-Agent',
    //     //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
    //     // )
    //     // myHeaders.append('sec-ch-ua', '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"')
    //     // myHeaders.append('sec-ch-ua-mobile', '?0')
    //     // myHeaders.append('sec-ch-ua-platform', '"Windows"')

    //     const requestOptions = {
    //       method: 'GET',
    //       headers: myHeaders,
    //       redirect: 'follow'
    //     }
    //     const response = await fetch('http://localhost:8081/paasport/contactsrest/listContacts/1', requestOptions)

    //     const result = await response.text()
    //     console.log("This is the response from the api " , result )

    //     // if (!response.ok) {
    //     //   throw new Error(`Error: ${response.status}`);
    //     // }
    //     // const data = await response.json();
    //     // console.log('getcount', data);
    //     // setCounts({
    //     //   day: data[0]?.count || 0,
    //     //   week: data[1]?.count || 0,
    //     //   month: data[2]?.count || 0
    //     // });
    //   } catch (error) {
    //     console.error('Failed to fetch counts:', error)
    //   }
    // }

    // fetchCounts()
  }, [])

  const quotesCount = {
    today: counts.day,
    weekly: counts.week,
    monthly: counts.month,
    total: 21459 // Example total, replace with actual total if available
  }

  const QuotesTabs = [
    {
      label: 'QUOTE LIST',
      content: (
        <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={400} />}>
          <QuoteListTable orderData={orderData} />
        </Suspense>
      )
    },
    {
      label: 'FORECAST',
      content: (
        <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={400} />}>
          <Forecast />
        </Suspense>
      )
    }
  ]

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quotes', path: '/apps/quotes' }
  ]

  return (
    <div className={isLoaded ? 'visible' : 'hidden'}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Suspense fallback={<Shimmer variant='text' width='100%' height={50} />}>
            <CustomBreadcrumb breadcrumbs={breadcrumbs} />
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={150} />}>
            <CardCounters entityType='Quotes' counts={quotesCount} />
          </Suspense>
        </Grid>
        <Grid item xs={12}>
          <Suspense fallback={<Shimmer variant='rectangular' width='100%' height={400} />}>
            <TabsPanel tabs={QuotesTabs} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderList
