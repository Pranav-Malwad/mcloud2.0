// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const CustomerProfileHeader = ({ customerData }) => {
  return (
    <Card>
      <CardContent className='flex flex-wrap items-center justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <CustomAvatar src={customerData?.avatar} variant='rounded' alt='Customer Avatar' size={80} />
          <div className='flex flex-col'>
            <Typography variant='h5'>{customerData?.customer}</Typography>
            <Typography variant='body2' color='text.secondary'>
              Account ID #{customerData?.customerId}
            </Typography>
            <div className='flex items-center gap-2 mt-1'>
              <Chip label='Active' variant='tonal' color='success' size='small' className='h-[20px] text-xs' />
              <Typography variant='body2' className='text-textSecondary'>
                {customerData?.account}
              </Typography>
              <span className='text-textSecondary'>|</span>
              <Typography variant='body2' className='text-textSecondary'>
                {customerData?.email}
              </Typography>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <CustomAvatar variant='rounded' skin='light' color='primary' size={42}>
              <i className='ri-shopping-cart-2-line text-xl' />
            </CustomAvatar>
            <div>
              <Typography variant='h6' className='leading-tight'>
                {customerData?.order}
              </Typography>
              <Typography variant='body2'>Orders</Typography>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <CustomAvatar variant='rounded' skin='light' color='primary' size={42}>
              <i className='ri-money-dollar-circle-line text-xl' />
            </CustomAvatar>
            <div>
              <Typography variant='h6' className='leading-tight'>
                ${customerData?.totalSpent}
              </Typography>
              <Typography variant='body2'>Spent</Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerProfileHeader
