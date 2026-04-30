// // React Imports
// import { useState } from 'react'

// // MUI Imports
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import { styled } from '@mui/material/styles'

// // Component Imports
// import CustomInputVertical from '@core/components/custom-inputs/Vertical'
// import DirectionalIcon from '@components/DirectionalIcon'

// // Styled Components
// const Content = styled(Typography, {
//   name: 'MuiCustomInputVertical',
//   slot: 'content'
// })(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center'
// }))

// // Vars
// const customInputData = [
//   {
//     title: 'Basic',
//     value: 'basic',
//     content: (
//       <Content component='div' className='flex justify-center items-center flex-col bs-full gap-2'>
//         <Typography variant='body2' className='mlb-auto'>
//           A simple start for start ups & Students
//         </Typography>
//         <div className='flex items-baseline'>
//           <Typography component='sup' variant='body2' className='self-start' color='primary'>
//             $
//           </Typography>
//           <Typography component='span' variant='h4' color='primary'>
//             0
//           </Typography>
//           <Typography color='text.disabled' component='sub' variant='body2' className='self-baseline'>
//             /month
//           </Typography>
//         </div>
//       </Content>
//     ),
//     isSelected: true
//   },
//   {
//     title: 'Standard',
//     value: 'standard',
//     content: (
//       <Content component='div' className='flex justify-center items-center flex-col bs-full gap-2'>
//         <Typography variant='body2' className='mlb-auto'>
//           For small to medium businesses
//         </Typography>
//         <div className='flex items-baseline'>
//           <Typography component='sup' variant='body2' className='self-start' color='primary'>
//             $
//           </Typography>
//           <Typography component='span' variant='h4' color='primary'>
//             99
//           </Typography>
//           <Typography color='text.disabled' component='sub' variant='body2' className='self-baseline'>
//             /month
//           </Typography>
//         </div>
//       </Content>
//     )
//   },
//   {
//     title: 'Enterprise',
//     value: 'enterprise',
//     content: (
//       <Content component='div' className='flex justify-center items-center flex-col bs-full'>
//         <Typography className='mlb-auto'>Solution for enterprise & organizations</Typography>
//         <div className='flex items-baseline'>
//           <Typography component='sup' variant='body2' className='self-start' color='primary'>
//             $
//           </Typography>
//           <Typography component='span' variant='h4' color='primary'>
//             499
//           </Typography>
//           <Typography color='text.disabled' component='sub' variant='body2' className='self-baseline'>
//             /month
//           </Typography>
//         </div>
//       </Content>
//     )
//   }
// ]

// const StepBillingDetails = ({ handlePrev }) => {
//   const initialSelectedOption = customInputData.filter(item => item.isSelected)[
//     customInputData.filter(item => item.isSelected).length - 1
//   ].value

//   // States
//   const [selectedOption, setSelectedOption] = useState(initialSelectedOption)

//   const handleOptionChange = prop => {
//     if (typeof prop === 'string') {
//       setSelectedOption(prop)
//     } else {
//       setSelectedOption(prop.target.value)
//     }
//   }

//   return (
//     <>
//       <div className='mbe-5'>
//         <Typography variant='h4' className='mbe-1'>
//           Select Plan
//         </Typography>
//         <Typography>Select plan as per your requirement</Typography>
//       </div>
//       <Grid container spacing={5}>
//         {customInputData.map((item, index) => (
//           <CustomInputVertical
//             type='radio'
//             key={index}
//             data={item}
//             gridProps={{ xs: 12, sm: 4 }}
//             selected={selectedOption}
//             name='custom-radios-basic'
//             handleChange={handleOptionChange}
//           />
//         ))}
//       </Grid>
//       <div className='mbs-6 md:mbs-12 mbe-6'>
//         <Typography variant='h4' className='mbe-1'>
//           Payment Information
//         </Typography>
//         <Typography>Enter your card information</Typography>
//       </div>
//       <Grid container spacing={5}>
//         <Grid item xs={12}>
//           <TextField fullWidth label='Card Number' placeholder='1234 1234 1234 1234' />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField fullWidth label='Name on Card' placeholder='John Doe' />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField fullWidth label='Expiry Date' placeholder='MM/YY' />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField fullWidth label='CVV' placeholder='123' />
//         </Grid>
//         <Grid item xs={12} className='flex justify-between'>
//           <Button
//             variant='outlined'
//             color='secondary'
//             onClick={handlePrev}
//             startIcon={<DirectionalIcon ltrIconClass='ri-arrow-left-line' rtlIconClass='ri-arrow-right-line' />}
//           >
//             Previous
//           </Button>
//           <Button
//             variant='contained'
//             color='success'
//             onClick={() => alert('Submitted..!!')}
//             endIcon={<i className='ri-check-line' />}
//           >
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </>
//   )
// }

// export default StepBillingDetails

import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

// Styled Components
const Content = styled(Typography, {
  name: 'MuiCustomInputVertical',
  slot: 'content'
})(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center'
}))

const industries = ['Aerospace', 'Automotive', 'Consumer Products', 'Energy', 'Medical', 'Oil and Gas', 'Others']

const processes = ['CNC Machining', 'Injection Molding', 'Cast Urethane', '3D Printing', 'Sheet Metal', 'Other']

const heardAboutUsOptions = [
  'Email',
  'Facebook',
  'Google/Search Engines',
  'Instagram',
  'LinkedIn',
  'Other',
  'Referral',
  'Research',
  'Trade Show',
  'Twitter'
]

const StepBillingDetails = ({ handlePrev }) => {
  const [industry, setIndustry] = useState('')
  const [process, setProcess] = useState('')
  const [heardAboutUs, setHeardAboutUs] = useState('')

  const handleIndustryChange = event => {
    setIndustry(event.target.value)
  }

  const handleProcessChange = event => {
    setProcess(event.target.value)
  }

  const handleHeardAboutUsChange = event => {
    setHeardAboutUs(event.target.value)
  }

  return (
    <>
      <div className='mbe-5'>
        <Typography variant='h4' className='mbe-1'>
          Company Details
        </Typography>
        <Typography> Please provide the following information about your company.</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label='Industry' value={industry} onChange={handleIndustryChange}>
            {industries.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label='Process' value={process} onChange={handleProcessChange}>
            {processes.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label='Where did you hear about us?'
            value={heardAboutUs}
            onChange={handleHeardAboutUsChange}
          >
            {heardAboutUsOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} className='flex justify-between'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={handlePrev}
            startIcon={<i className='ri-arrow-left-line' />}
          >
            Previous
          </Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => alert('Submitted..!!')}
            endIcon={<i className='ri-check-line' />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default StepBillingDetails
