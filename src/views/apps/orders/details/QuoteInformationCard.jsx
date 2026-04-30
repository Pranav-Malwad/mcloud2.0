// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Quote Data
const quoteData = {
  orderId: '202154',
  firstName: 'Ravi',
  lastName: 'Bishnoi',
  email: 'ravibishnoi@gmail.com',
  account: 'RS Pvt Limited',
  manufacturing: 'Both',
  leadType: 'New',
  itar: 'No',
  createdDate: '23/03/2024',
  industry: 'Medical',
  leadSource: 'Referral'
}

const QuoteInformationCard = ({ orderData }) => {
  orderData = quoteData
  return (
    <Card>
      <CardContent className='flex flex-col gap-4'>
        <Typography variant='h5' gutterBottom>
          Order Information
        </Typography>

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Order ID
          </Typography>
          <Typography variant='body2'>{orderData?.orderId}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            First Name
          </Typography>
          <Typography variant='body2'>{orderData?.firstName}</Typography>
        </div>

        <Divider />
        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Last Name
          </Typography>
          <Typography variant='body2'>{orderData?.lastName}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Email
          </Typography>
          <Typography variant='body2'>{orderData?.email}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Account
          </Typography>
          <Typography variant='body2'>{orderData?.account}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Manufacturing
          </Typography>
          <Typography variant='body2'>{orderData?.manufacturing}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Itar
          </Typography>
          <Typography variant='body2'>{orderData?.itar}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Lead Type
          </Typography>
          <Typography variant='body2'>{orderData?.leadType}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Lead Source
          </Typography>
          <Typography variant='body2'>{orderData?.leadSource}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col '>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Industry
          </Typography>
          <Typography variant='body2'>{orderData?.industry}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Created Date
          </Typography>
          <Typography variant='body2'>{orderData?.createdDate}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default QuoteInformationCard
