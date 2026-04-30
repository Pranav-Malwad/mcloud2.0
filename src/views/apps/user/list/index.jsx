// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import UserListTable from './UserListTable'
import CardCounters from '../../../../components/counter-cards'

const UserList = ({ userData }) => {

  const accountsCounts = {
    today: 237,
    weekly: 860,
    monthly: 4567,
    total: 21459
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CardCounters entityType="Accounts" counts={accountsCounts} />
      </Grid>
      <Grid item xs={12}>
        <UserListTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserList
