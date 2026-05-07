// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import EditUserInfo from '@components/dialogs/edit-user-info'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CustomerDetails = ({ customerData }) => {
  // Vars
  const buttonProps = {
    variant: 'contained',
    children: 'Edit Details'
  }

  return (
    <Card>
      <CardContent className='flex flex-col p-5 gap-5'>
        <div className='flex flex-col justify-self-center items-center gap-5'>
          <div className='flex flex-col items-center gap-3'>
            <CustomAvatar src={customerData?.avatar} variant='rounded' alt='Customer Avatar' size={90} />
            <div className='flex flex-col items-center text-center'>
              <Typography variant='h6'>{customerData?.customer}</Typography>
              <Typography variant='body2' color='text.secondary'>Account ID #{customerData?.customerId}</Typography>
            </div>
          </div>
          <div className='flex items-center justify-around gap-2 flex-wrap is-full'>
            <div className='flex items-center gap-2'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={38}>
                <i className='ri-shopping-cart-2-line text-lg' />
              </CustomAvatar>
              <div>
                <Typography variant='h6' className='leading-tight'>{customerData?.order}</Typography>
                <Typography variant='body2'>Orders</Typography>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={38}>
                <i className='ri-money-dollar-circle-line text-lg' />
              </CustomAvatar>
              <div>
                <Typography variant='h6' className='leading-tight'>${customerData?.totalSpent}</Typography>
                <Typography variant='body2'>Spent</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <Typography variant='subtitle1' className='font-medium'>Details</Typography>
          <Divider />
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-1'>
              <Typography variant='body2' color='text.primary' className='font-medium'>
                Email:
              </Typography>
              <Typography variant='body2' className='truncate' title={customerData?.email}>{customerData?.email}</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography variant='body2' color='text.primary' className='font-medium'>
                Account:
              </Typography>
              <Typography variant='body2'>{customerData?.account}</Typography>
            </div>
            <div className='flex items-center gap-1'>
              <Typography variant='body2' color='text.primary' className='font-medium'>
                Status:
              </Typography>
              <Chip label='Active' variant='tonal' color='success' size='small' className='h-[20px] text-xs' />
            </div>
          </div>
        </div>
        {/* <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={EditUserInfo} /> */}
      </CardContent>
    </Card>
  )
}

export default CustomerDetails
