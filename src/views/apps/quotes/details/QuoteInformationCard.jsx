// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Quote Data
const quoteData = {
  quoteId: '202154', 
  firstName: 'Ravi',
  lastName: 'Bishnoi',
  email: 'ravibishnoi@gmail.com',
  account: 'RS Pvt Limited'
}

const QuoteInformationCard = ({ orderData }) => {
  orderData = quoteData
  return (
    <Card>
      <CardContent className='flex flex-col gap-4'>
        <Typography variant='h5' gutterBottom>
          Quote Information
        </Typography>

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Quote ID 
          </Typography>
          <Typography variant="body2">{orderData?.quoteId}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            First Name
          </Typography>
          <Typography variant='body2'>{orderData?.firstName}</Typography>
        </div>

        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Last Name
          </Typography>
          <Typography variant='body2'>{orderData?.lastName}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Email
          </Typography>
          <Typography variant='body2'>{orderData?.email}</Typography>
        </div>
        <Divider />

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Account
          </Typography>
          <Typography variant='body2'>{orderData?.account}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default QuoteInformationCard
