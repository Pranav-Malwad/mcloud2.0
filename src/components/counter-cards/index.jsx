// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Icon mappings for different entity types
const iconMapping = {
  Accounts: {
    total: 'ri-group-line',
    monthly: 'ri-user-add-line',
    weekly: 'ri-user-follow-line',
    today: 'ri-user-search-line'
  },
  Quotes: {
    total: 'ri-file-list-line',
    monthly: 'ri-file-copy-line',
    weekly: 'ri-file-chart-line',
    today: 'ri-file-2-line'
  },
  Contacts: {
    total: 'ri-contacts-line',
    monthly: 'ri-phone-line',
    weekly: 'ri-phone-fill',
    today: 'ri-phone-find-line'
  },
  Orders: {
    total: 'ri-shopping-cart-line',
    monthly: 'ri-shopping-bag-line',
    weekly: 'ri-shopping-cart-fill',
    today: 'ri-store-line'
  },
  Leads: {
    total: 'ri-lightbulb-line',
    monthly: 'ri-lightbulb-flash-line',
    weekly: 'ri-lightbulb-fill',
    today: 'ri-lightbulb-flash-fill'
  }
}

// Reusable Card Component
const CardCounters = ({ entityType, counts }) => {
  // Fetch appropriate icons based on the entityType
  const entityIcons = iconMapping[entityType] || iconMapping['Accounts'] // Default to Accounts icons if not found

  // Dynamic data generation based on entity type
  const data = [
    {
      title: `Total `,
      stats: counts.total.toLocaleString(),
      avatarIcon: entityIcons.total, // Dynamic icon for Total
      avatarColor: 'primary',
      trend: 'positive',
      trendNumber: '29%',
      subtitle: `Total ${entityType} Count`
    },
    {
      title: `Monthly `,
      stats: counts.monthly.toLocaleString(),
      avatarIcon: entityIcons.monthly, // Dynamic icon for Monthly
      avatarColor: 'error',
      trend: 'positive',
      trendNumber: '18%',
      subtitle: 'This month analytics'
    },
    {
      title: `Weekly `,
      stats: counts.weekly.toLocaleString(),
      avatarIcon: entityIcons.weekly, // Dynamic icon for Weekly
      avatarColor: 'success',
      trend: 'negative',
      trendNumber: '14%',
      subtitle: 'Last week analytics'
    },
    {
      title: `Today `,
      stats: counts.today.toLocaleString(),
      avatarIcon: entityIcons.today, // Dynamic icon for Today
      avatarColor: 'warning',
      trend: 'positive',
      trendNumber: '42%',
      subtitle: "Today's analytics"
    }
  ]

  return (
    <Grid container spacing={6} >
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardCounters
