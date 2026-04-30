// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Quote Data
const quoteData = {
  caseId: '202154', 
  contactName: 'Ravi',
  accountName: 'Bishnoi',
  email: 'ravibishnoi@gmail.com',
  phone:465484321321,
  createdDate: '12/03/2022',
  updatedDate: '02/02/2024',
  createdBy:"pranav malwad",
  updatedBy:"CRM"
}

const TasksInformationCard = ({ orderData }) => {
  orderData = quoteData
  return (
    <Card>
      <CardContent className='flex flex-col gap-4'>
        <Typography variant='h5' gutterBottom>
          Case Information
        </Typography>

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Case ID 
          </Typography>
          <Typography variant="body2">{orderData?.caseId}</Typography>
        </div>

        <Divider />

        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Contact Name
          </Typography>
          <Typography variant='body2'>{orderData?.contactName}</Typography>
        </div>

        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Account Name
          </Typography>
          <Typography variant='body2'>{orderData?.accountName}</Typography>
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
            Phone
          </Typography>
          <Typography variant='body2'>{orderData?.phone}</Typography>
        </div>

        <Divider/>


        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Created Date
          </Typography>
          <Typography variant='body2'>{orderData?.createdDate}</Typography>
        </div>
        <Divider />
        <div className='flex flex-col gap-2'>
          <Typography variant='subtitle1' color='text.primary' className='font-medium'>
            Updated Date
          </Typography>
          <Typography variant='body2'>{orderData?.updatedDate}</Typography>
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

export default TasksInformationCard
