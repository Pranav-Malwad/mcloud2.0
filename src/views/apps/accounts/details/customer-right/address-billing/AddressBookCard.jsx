// // React Imports
// import { useState } from 'react'

// // MUI Imports
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardHeader from '@mui/material/CardHeader'
// import Chip from '@mui/material/Chip'
// import Collapse from '@mui/material/Collapse'
// import Divider from '@mui/material/Divider'
// import Typography from '@mui/material/Typography'
// import { useTheme } from '@mui/material/styles'
// import IconButton from '@mui/material/IconButton'
// import Button from '@mui/material/Button'

// // Component Imports
// import OptionMenu from '@core/components/option-menu'
// import AddNewAddress from '@components/dialogs/add-edit-address'
// import OpenDialogOnElementClick from '@components/dialogs/OpenDialogOnElementClick'

// const propData = [
//   {
//     typeOfAddress: 'Home',
//     isDefaultAddress: true,
//     name: 'Violet Mendoza',
//     streetAddress: '23 Shatinon Mekalan',
//     area: 'Melbourne, VIC 3000,',
//     city: 'London'
//   },
//   {
//     typeOfAddress: 'Office',
//     isDefaultAddress: false,
//     name: 'Archie Mendoza',
//     streetAddress: '45 Roker Terrace',
//     area: 'Latheronwheel',
//     city: 'London'
//   },
//   {
//     typeOfAddress: 'Family',
//     isDefaultAddress: false,
//     name: 'George Mendoza',
//     streetAddress: '512 Water Plant',
//     area: 'Melbourne, VIC 3000',
//     city: 'London'
//   }
// ]

// // Vars
// const data = {
//   firstName: 'Violet',
//   lastName: 'Mendoza',
//   email: 'sbaser0@boston.com',
//   country: 'UK',
//   address1: '23 Shatinon Mekalan',
//   address2: 'Melbourne, VIC 3000',
//   landmark: 'Near Water Plant',
//   city: 'London',
//   state: 'Capholim',
//   zipCode: '403114',
//   taxId: 'TAX-875623',
//   vatNumber: 'SDF754K77',
//   contact: '+1 (234) 464-0600'
// }

// const CustomerAddress = props => {
//   // Props
//   const { typeOfAddress, isDefaultAddress, name, streetAddress, area, city } = props

//   // States
//   const [expanded, setExpanded] = useState(isDefaultAddress ? true : false)

//   // Vars
//   const iconButtonProps = {
//     children: <i className='ri-edit-box-line' />,
//     className: 'text-textSecondary'
//   }

//   // Hooks
//   const theme = useTheme()

//   return (
//     <>
//       <div className='flex flex-wrap justify-between items-center mlb-3 gap-y-2'>
//         <div className='flex items-center gap-2'>
//           <IconButton
//             size='large'
//             sx={{
//               '& i': {
//                 transition: 'transform 0.3s',
//                 transform: expanded ? 'rotate(0deg)' : theme.direction === 'ltr' ? 'rotate(-90deg)' : 'rotate(90deg)'
//               }
//             }}
//             onClick={() => setExpanded(!expanded)}
//           >
//             <i className='ri-arrow-down-s-line text-textPrimary' />
//           </IconButton>
//           <div className='flex flex-col items-start gap-1'>
//             <div className='flex items-center gap-2'>
//               <Typography color='text.primary' className='font-medium'>
//                 {typeOfAddress}
//               </Typography>
//               {isDefaultAddress && <Chip variant='tonal' color='success' label='Default Address' size='small' />}
//             </div>
//             <Typography>{streetAddress}</Typography>
//           </div>
//         </div>
//         <div className='mis-10'>
//           <OpenDialogOnElementClick
//             element={IconButton}
//             elementProps={iconButtonProps}
//             dialog={AddNewAddress}
//             dialogProps={{ data }}
//           />
//           <IconButton>
//             <i className='ri-delete-bin-7-line text-textSecondary' />
//           </IconButton>
//           <OptionMenu
//             iconClassName='text-textSecondary'
//             iconButtonProps={{ size: 'medium' }}
//             options={['Set as Default Address']}
//           />
//         </div>
//       </div>
//       <Collapse in={expanded} timeout={300}>
//         <div className='flex flex-col gap-1 pb-3 pis-12'>
//           <Typography color='text.primary' className='font-medium'>
//             {name}
//           </Typography>
//           <div>
//             <Typography>{streetAddress}</Typography>
//             <Typography>{area}</Typography>
//             <Typography>{city}</Typography>
//           </div>
//         </div>
//       </Collapse>
//     </>
//   )
// }

// const AddressBook = () => {
//   // Vars
//   const buttonProps = {
//     variant: 'outlined',
//     children: 'Add New Address',
//     size: 'small'
//   }

//   return (
//     <Card>
//       <CardHeader
//         title='Address Book'
//         action={<OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={AddNewAddress} />}
//       />
//       <CardContent>
//         {propData.map((address, index) => (
//           <div key={index}>
//             <CustomerAddress {...address} />
//             {index !== propData.length - 1 && <Divider />}
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   )
// }

// export default AddressBook

// React Imports
// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Divider from '@mui/material/Divider'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import AddNewAddress from '@components/dialogs/add-edit-address'

// Sample Address Data
const initialAddressData = [
  {
    typeOfAddress: 'Shipping',
    addresses: [
      {
        id: 1,
        isDefaultAddress: true,
        firstName: 'Violet',
        lastName: 'Mendoza',
        phone: '+1 (234) 464-0600',
        country: 'UK',
        address1: '23 Shatinon Mekalan',
        address2: 'Melbourne, VIC 3000',
        landmark: 'Near Water Plant',
        city: 'London',
        state: 'Capholim',
        zipCode: '403114'
      },
      {
        id: 2,
        isDefaultAddress: false,
        firstName: 'Archie',
        lastName: 'Mendoza',
        phone: '+1 (123) 456-7890',
        country: 'UK',
        address1: '45 Roker Terrace',
        address2: 'Latheronwheel',
        landmark: 'Opposite Park',
        city: 'London',
        state: 'Capholim',
        zipCode: '403115'
      },
    ],
  },
  {
    typeOfAddress: 'Billing',
    addresses: [
      {
        id: 3,
        isDefaultAddress: true,
        firstName: 'George',
        lastName: 'Mendoza',
        phone: '+1 (987) 654-3210',
        country: 'UK',
        address1: '512 Water Plant',
        address2: 'Melbourne, VIC 3000',
        landmark: 'Next to Station',
        city: 'London',
        state: 'Capholim',
        zipCode: '403116'
      },
    ],
  },
]

const CustomerAddressCard = ({ address, addressType, onEdit, onDelete, onSetDefault }) => {
  const theme = useTheme()

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderColor: address.isDefaultAddress ? 'primary.main' : 'divider',
        borderWidth: address.isDefaultAddress ? 2 : 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: theme.shadows[4],
          borderColor: 'primary.main'
        }
      }}
    >
      <CardContent className="flex flex-col gap-3 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Typography variant="h6" color="text.primary">
                {address.firstName} {address.lastName}
              </Typography>
              {address.isDefaultAddress && (
                <Chip variant='tonal' color='success' label='Default' size='small' />
              )}
            </div>
            <Typography variant="body2" color="text.secondary">
              {address.phone}
            </Typography>
          </div>
          <div className="flex -mr-2">
            <IconButton size="small" onClick={() => onEdit(address, addressType)}>
              <i className='ri-edit-box-line text-textSecondary' />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(address.id, addressType)}>
              <i className='ri-delete-bin-7-line text-textSecondary' />
            </IconButton>
            <OptionMenu
              iconClassName='text-textSecondary'
              iconButtonProps={{ size: 'small' }}
              options={[
                {
                  text: 'Set as Default',
                  menuItemProps: {
                    onClick: () => onSetDefault(address.id, addressType),
                    disabled: address.isDefaultAddress
                  }
                }
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col text-sm">
          <Typography>{address.address1}</Typography>
          {address.address2 && <Typography>{address.address2}</Typography>}
          <Typography>{address.city}, {address.state} {address.zipCode}</Typography>
          <Typography>{address.country}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

const AddressBook = () => {
  const [data, setData] = useState(initialAddressData)
  const [openAddressModal, setOpenAddressModal] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const [addressTypeToEdit, setAddressTypeToEdit] = useState('Shipping')
  const [currentTab, setCurrentTab] = useState('Shipping')
  const [showAll, setShowAll] = useState(false)

  const handleAddNew = () => {
    setEditingAddress(null)
    setAddressTypeToEdit(currentTab)
    setOpenAddressModal(true)
  }

  const handleEditAddress = (address, type) => {
    setEditingAddress(address)
    setAddressTypeToEdit(type)
    setOpenAddressModal(true)
  }

  const handleDeleteAddress = (id, type) => {
    setData(prevData =>
      prevData.map(section => {
        if (section.typeOfAddress === type) {
          return {
            ...section,
            addresses: section.addresses.filter(addr => addr.id !== id)
          }
        }
        return section
      })
    )
  }

  const handleSetDefault = (id, type) => {
    setData(prevData =>
      prevData.map(section => {
        if (section.typeOfAddress === type) {
          return {
            ...section,
            addresses: section.addresses.map(addr => ({
              ...addr,
              isDefaultAddress: addr.id === id
            }))
          }
        }
        return section
      })
    )
  }

  const handleSaveAddress = (savedAddress) => {
    const addressType = savedAddress.typeOfAddress
    const isNew = !savedAddress.id

    setData(prevData => {
      let newData = [...prevData]
      
      // Ensure the category exists
      if (!newData.find(s => s.typeOfAddress === addressType)) {
        newData.push({ typeOfAddress: addressType, addresses: [] })
      }

      // If it's an edit and the type changed, we must remove it from the old category
      if (!isNew) {
        newData = newData.map(section => ({
          ...section,
          addresses: section.addresses.filter(a => a.id !== savedAddress.id)
        }))
      }

      return newData.map(section => {
        if (section.typeOfAddress === addressType) {
          let updatedAddresses = [...section.addresses]
          
          if (isNew) {
            const newId = Math.max(0, ...newData.flatMap(s => s.addresses.map(a => a.id || 0))) + 1
            updatedAddresses.push({ ...savedAddress, id: newId })
          } else {
            updatedAddresses.push(savedAddress)
          }

          // Handle 'isDefaultAddress'
          if (savedAddress.isDefaultAddress) {
            updatedAddresses = updatedAddresses.map(addr => ({
              ...addr,
              isDefaultAddress: addr.id === (isNew ? updatedAddresses[updatedAddresses.length - 1].id : savedAddress.id)
            }))
          }

          return { ...section, addresses: updatedAddresses }
        }
        return section
      })
    })
    
    setCurrentTab(addressType)
  }

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
    setShowAll(false)
  }

  const currentSection = data.find(s => s.typeOfAddress === currentTab)
  const addressesToDisplay = showAll ? currentSection?.addresses : currentSection?.addresses.slice(0, 4)

  return (
    <Card>
      <CardHeader
        title='Address Book'
        action={
          <Button variant='outlined' size='small' onClick={handleAddNew}>
            Add New Address
          </Button>
        }
      />
      
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        className='px-5'
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {data.map(section => (
          <Tab 
            key={section.typeOfAddress} 
            value={section.typeOfAddress} 
            label={`${section.typeOfAddress} (${section.addresses.length})`} 
          />
        ))}
      </Tabs>
      
      <CardContent className="pt-6">
        {currentSection && (
          <div className="flex flex-col">
            <Grid container spacing={4}>
              {addressesToDisplay?.map((address) => (
                <Grid item xs={12} md={6} key={address.id}>
                  <CustomerAddressCard
                    address={address}
                    addressType={currentSection.typeOfAddress}
                    onEdit={handleEditAddress}
                    onDelete={handleDeleteAddress}
                    onSetDefault={handleSetDefault}
                  />
                </Grid>
              ))}
              {currentSection.addresses.length === 0 && (
                <Grid item xs={12}>
                  <Typography color="text.secondary" className="italic">No {currentSection.typeOfAddress.toLowerCase()} addresses found.</Typography>
                </Grid>
              )}
            </Grid>
            
            {currentSection.addresses.length > 4 && (
              <>
                <Divider className="my-6" />
                <div className="flex justify-center">
                  <Button 
                    variant="text" 
                    color="primary" 
                    onClick={() => setShowAll(!showAll)}
                    endIcon={<i className={showAll ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} />}
                  >
                    {showAll ? 'Show Less' : `Show All ${currentSection.addresses.length} Addresses`}
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </CardContent>

      <AddNewAddress
        open={openAddressModal}
        setOpen={setOpenAddressModal}
        data={editingAddress}
        addressType={addressTypeToEdit}
        onSave={handleSaveAddress}
      />
    </Card>
  )
}

export default AddressBook
