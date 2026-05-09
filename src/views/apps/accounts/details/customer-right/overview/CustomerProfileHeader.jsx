// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

const CustomerProfileHeader = ({ customerData }) => {
  return (
    <Card className='h-full relative'>
      <CardContent className='flex flex-col items-center justify-center gap-4 h-full text-center pt-8'>
        <div className='absolute top-4 right-4'>
          <OpenDialogOnElementClick
            element={Button}
            elementProps={{ 
              children: 'Delete', 
              color: 'error', 
              variant: 'outlined', 
              size: 'small',
              startIcon: <i className='ri-delete-bin-7-line' />
            }}
            dialog={ConfirmationDialog}
            dialogProps={{ type: 'delete-customer' }}
          />
        </div>

        <CustomAvatar src={customerData?.avatar} variant='rounded' alt='Customer Avatar' size={80} />
        <div className='flex flex-col gap-1 items-center'>
          <Typography variant='h5'>{customerData?.customer}</Typography>
          <div className='flex flex-wrap items-center justify-center gap-2'>
            <Chip label='Active' variant='tonal' color='success' size='small' className='h-[20px] text-[10px] uppercase font-medium' />
            <Typography variant='body2' className='text-textSecondary font-medium'>
              Account #{customerData?.customerId}
            </Typography>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-3 mt-1'>
            <div className='flex items-center gap-1'>
              <i className='ri-building-line text-textSecondary text-sm' />
              <Typography variant='body2' className='text-textSecondary'>
                {customerData?.account || 'No Account Name'}
              </Typography>
            </div>
            <div className='flex items-center gap-1'>
              <i className='ri-mail-line text-textSecondary text-sm' />
              <Typography variant='body2' className='text-textSecondary'>
                {customerData?.email}
              </Typography>
            </div>
            <div className='flex items-center gap-1'>
              <i className='ri-phone-line text-textSecondary text-sm' />
              <Typography variant='body2' className='text-textSecondary'>
                {customerData?.phone || '(989) 898-8899'}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerProfileHeader
