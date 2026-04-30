import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/navigation'
import { useEdit } from '@/contexts/EditContext'

// Component Imports
import ConfirmationDialog from '@components/dialogs/confirmation-dialog'
import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

export const paymentStatus = {
  1: { text: 'Paid', color: 'success' },
  2: { text: 'Pending', color: 'warning' },
  3: { text: 'Cancelled', color: 'secondary' },
  4: { text: 'Failed', color: 'error' }
}



const QuoteDetailHeader = ({ orderData, order, isEditable, onEditClick, onSaveClick }) => {
  const router = useRouter()

  const handleNewTask = () => {
    router.push('/apps/tasks')
  }
  // const { isEditing, toggleEdit, handleSave } = useEdit() // Access global state
  return (
    <>
      <div className='flex flex-wrap justify-between sm:items-center max-sm:flex-col gap-y-4'>
        <div className='flex flex-col items-start gap-1'>
          <div className='flex items-center gap-2'>
            <Typography variant='h5'>{`Quote #${order}`}</Typography>
            
          </div>
          <Typography>{`${new Date(orderData?.date ?? '').toDateString()}, ${orderData?.time} (ET)`}</Typography>
        </div>

        <div className='flex gap-4'>
          <Button variant='contained' size='small' className='max-sm:is-full'>
            Copy Quote
          </Button>
          <Button variant='contained' size='small' className='max-sm:is-full'>
            Send an Email
          </Button>
          <Button variant='contained' onClick={handleNewTask} size='small' className='max-sm:is-full'>
            New Task
          </Button>

          {/* <Button variant='contained' color={isEditing ? 'secondary' : 'primary'} onClick={toggleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </Button> */}
        </div>
      </div>
    </>
  )
}

export default QuoteDetailHeader
