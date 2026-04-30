// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Vars
const data = [
  {
    title: 'Total Accounts',
    stats: '21,459',
    avatarIcon: 'ri-group-line',
    avatarColor: 'primary',
    trend: 'positive',
    trendNumber: '29%',
    subtitle: 'Total User'
  },
  {
    title: 'Monthly Accounts',
    stats: '4,567',
    avatarIcon: 'ri-user-add-line',
    avatarColor: 'error',
    trend: 'positive',
    trendNumber: '18%',
    subtitle: 'This month analytics'
  },
  {
    title: 'Weekly Accounts ',
    stats: '860',
    avatarIcon: 'ri-user-follow-line',
    avatarColor: 'success',
    trend: 'negative',
    trendNumber: '14%',
    subtitle: 'Last week analytics'
  },
  {
    title: 'Today Accounts',
    stats: '237',
    avatarIcon: 'ri-user-search-line',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: "today's analytics"
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
// MUI Imports

// import Grid from '@mui/material/Grid'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// // Component Imports
// import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// const UserListCards = () => {
//   // State to store API data
//   const [counts, setCounts] = useState({
//     today: 0,
//     weekly: 0,
//     monthly: 0,
//     total: 0
//   })

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get('../../contactsrest/getcount', {
//         headers: { 'X-CSRF-TOKEN': csrfToken } // Replace csrfToken with actual value
//       })
//       .then((response) => {
//         const data = response.data
//         setCounts({
//           today: data[0]?.count || 0,
//           weekly: data[1]?.count || 0,
//           monthly: data[2]?.count || 0,
//           total: data[3]?.count || 0 // Assuming 4th index has total count
//         })
//       })
//       .catch((error) => {
//         console.error('Error fetching count data:', error)
//       })
//   }, []) // Empty dependency array ensures this runs once when the component mounts

//   // Data for rendering the cards
//   const data = [
//     {
//       title: 'Total Accounts',
//       stats: counts.total.toLocaleString(),
//       avatarIcon: 'ri-group-line',
//       avatarColor: 'primary',
//       trend: 'positive',
//       trendNumber: '29%',
//       subtitle: 'Total User'
//     },
//     {
//       title: 'Monthly Accounts',
//       stats: counts.monthly.toLocaleString(),
//       avatarIcon: 'ri-user-add-line',
//       avatarColor: 'error',
//       trend: 'positive',
//       trendNumber: '18%',
//       subtitle: 'This month analytics'
//     },
//     {
//       title: 'Weekly Accounts ',
//       stats: counts.weekly.toLocaleString(),
//       avatarIcon: 'ri-user-follow-line',
//       avatarColor: 'success',
//       trend: 'negative',
//       trendNumber: '14%',
//       subtitle: 'Last week analytics'
//     },
//     {
//       title: 'Today Accounts',
//       stats: counts.today.toLocaleString(),
//       avatarIcon: 'ri-user-search-line',
//       avatarColor: 'warning',
//       trend: 'positive',
//       trendNumber: '42%',
//       subtitle: "today's analytics"
//     }
//   ]

//   return (
//     <Grid container spacing={6}>
//       {data.map((item, i) => (
//         <Grid key={i} item xs={12} sm={6} md={3}>
//           <HorizontalWithSubtitle {...item} />
//         </Grid>
//       ))}
//     </Grid>
//   )
// }

// export default UserListCards
