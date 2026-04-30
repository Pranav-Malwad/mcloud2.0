// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Quote Data
const quoteData = {
  totalRowCount: '15',
  leadRejectCount: '27',
  leadAcceptCount: '544',
  email: 'ravibishnoi@gmail.com',
  phone: 465484321321,
  createdDate: '12/03/2022',
  updatedDate: '02/02/2024',
  createdBy: 'pranav malwad',
  updatedBy: 'CRM'
}

const ApolloInformationCard = ({ orderData }) => {
  orderData = quoteData
  return (
    <Card>
      <CardContent className='flex flex-col gap-4'>
        <Typography variant='h5' gutterBottom>
          Lead Export Information
        </Typography>

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Total Row Count
          </Typography>
          <Typography variant='body2'>{orderData?.totalRowCount}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Lead Reject Count
          </Typography>
          <Typography variant='body2'>{orderData?.leadRejectCount}</Typography>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Lead Accept Count
          </Typography>
          <Typography variant='body2'>{orderData?.leadAcceptCount}</Typography>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Created By
          </Typography>
          <Typography variant='body2'>{orderData?.createdBy}</Typography>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Updated By
          </Typography>
          <Typography variant='body2'>{orderData?.updatedBy}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default ApolloInformationCard
