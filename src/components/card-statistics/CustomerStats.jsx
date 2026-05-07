// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const CustomerStats = props => {
  // Props
  const { title, avatarIcon, color, description, stats, content, chipLabel } = props

  return (
    <Card>
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }} className='flex flex-col gap-1'>
        <div className='flex items-center gap-3 mb-1'>
          <CustomAvatar variant='rounded' skin='light' color={color} size={34}>
            <i className={avatarIcon} />
          </CustomAvatar>
          <Typography variant='subtitle1' className='capitalize font-medium leading-tight'>
            {title}
          </Typography>
        </div>

        <div className='flex flex-col items-start'>
          {stats ? (
            <div className='flex items-baseline gap-1.5'>
              <Typography variant='subtitle1' className='font-semibold' color={`${color}.main`}>
                {stats}
              </Typography>
              <Typography variant='body2' color='text.secondary'>{content}</Typography>
            </div>
          ) : (
            <Chip variant='tonal' label={chipLabel} color={color} size='small' className='mbe-1' />
          )}
          <Typography variant='caption' color='text.disabled'>{description}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerStats
