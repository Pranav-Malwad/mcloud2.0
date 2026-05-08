'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import TablePagination from '@mui/material/TablePagination'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import AdvancedFiltersDrawer from '@/components/filters/AdvancedFiltersDrawer'
import PageHeader from '@/components/layout/shared/PageHeader'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import AddUserDrawer from './AddUserDrawer'

export const paymentStatus = {
  1: { text: 'Paid', color: 'success' },
  2: { text: 'Pending', color: 'warning' },
  3: { text: 'Cancelled', color: 'secondary' },
  4: { text: 'Failed', color: 'error' }
}
export const statusChipColor = {
  Delivered: { color: 'success' },
  'Out for Delivery': { color: 'primary' },
  'Ready to Pickup': { color: 'info' },
  Dispatched: { color: 'warning' }
}

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper()

const AccountListTable = ({ customerData }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(Array.isArray(customerData) ? customerData : [])
  const [globalFilter, setGlobalFilter] = useState('')
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
  const [viewFilter, setViewFilter] = useState('all')
  const [activeFilters, setActiveFilters] = useState({})

  const handleViewFilter = (event, newView) => {
    if (newView !== null) {
      setViewFilter(newView)
    }
  }

  const handleApplyFilters = (filters) => {
    setActiveFilters(filters)
  }

  const handleClearFilters = () => {
    setActiveFilters({})
  }

  const handleRemoveFilter = (key) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev }
      delete newFilters[key]
      return newFilters
    })
  }

  const filteredData = useMemo(() => {
    let result = data
    if (activeFilters.status) result = result.filter(item => item.status === activeFilters.status)
    if (activeFilters.industry) result = result.filter(item => item.industry === activeFilters.industry)
    if (activeFilters.accountExecutive) result = result.filter(item => item.accountExecutive === activeFilters.accountExecutive)

    if (viewFilter === 'complete') {
      result = result.filter(item => item.status === 'Active' || item.status === 'Completed')
    } else if (viewFilter === 'incomplete') {
      result = result.filter(item => item.status === 'Pending' || item.status === 'Inactive')
    }
    return result
  }, [data, activeFilters, viewFilter])  // Hooks
  const { lang: locale } = useParams()

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('customer', {
        header: 'Account',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            {getAvatar({ avatar: row.original.avatar, customer: row.original.customer })}
            <div className='flex flex-col items-start'>
              <Typography
                component={Link}
                color='text.primary'
                href={getLocalizedUrl(`/apps/accounts/details/${row.original.customerId}`, locale)}
                className='font-medium hover:text-primary'
              >
                {row.original.customer}
              </Typography>
              <Typography variant='body2'>{row.original.email}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('registrationDate', {
        header: 'Registration Date',
        cell: ({ row }) => <Typography>{new Date(row.original.registrationDate).toLocaleDateString()}</Typography>
      }),
      columnHelper.accessor('firstName', {
        header: 'First Name',
        cell: ({ row }) => <Typography>{row.original.firstName}</Typography>
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        cell: ({ row }) => <Typography>{row.original.lastName}</Typography>
      }),
      columnHelper.accessor('account', {
        header: 'Account',
        cell: ({ row }) => <Typography>{row.original.account}</Typography>
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: ({ row }) => <Typography>{row.original.email}</Typography>
      }),
      columnHelper.accessor('phone', {
        header: 'Phone',
        cell: ({ row }) => <Typography>{row.original.phone}</Typography>
      }),
      columnHelper.accessor('accountExecutive', {
        header: 'Account Executive',
        cell: ({ row }) => <Typography>{row.original.accountExecutive}</Typography>
      }),
      columnHelper.accessor('projectManager', {
        header: 'Project Manager',
        cell: ({ row }) => <Typography>{row.original.projectManager}</Typography>
      }),
      columnHelper.accessor('industry', {
        header: 'Industry',
        cell: ({ row }) => <Typography>{row.original.industry}</Typography>
      }),
      columnHelper.accessor('leadSource', {
        header: 'Lead Source',
        cell: ({ row }) => <Typography>{row.original.leadSource}</Typography>
      }),
      columnHelper.accessor('city', {
        header: 'City',
        cell: ({ row }) => <Typography>{row.original.city}</Typography>
      }),
      columnHelper.accessor('state', {
        header: 'State',
        cell: ({ row }) => <Typography>{row.original.state}</Typography>
      }),
      columnHelper.accessor('owner', {
        header: 'Owner',
        cell: ({ row }) => <Typography>{row.original.owner}</Typography>
      }),
      columnHelper.accessor('accountRevenueYTD', {
        header: 'Account Revenue YTD',
        cell: ({ row }) => (
          <Typography>${row.original.accountRevenueYTD}</Typography>
        )
      }),
      columnHelper.accessor('accountRevenueLifetime', {
        header: 'Account Revenue Lifetime',
        cell: ({ row }) => (
          <Typography>${row.original.accountRevenueLifetime}</Typography>
        )
      }),
      columnHelper.accessor('upsAccount', {
        header: 'UPS Account',
        cell: ({ row }) => <Typography>{row.original.upsAccount}</Typography>
      }),
      columnHelper.accessor('fedexAccount', {
        header: 'FedEx Account',
        cell: ({ row }) => <Typography>{row.original.fedexAccount}</Typography>
      }),
      columnHelper.accessor('creditLimit', {
        header: 'Credit Limit',
        cell: ({ row }) => <Typography>${row.original.creditLimit}</Typography>
      }),
      columnHelper.accessor('notes', {
        header: 'Notes',
        cell: ({ row }) => <Typography>{row.original.notes}</Typography>
      }),
      columnHelper.accessor('nda', {
        header: 'NDA',
        cell: ({ row }) => <Typography>{row.original.nda ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('accountHoldFinance', {
        header: 'Account Hold Finance',
        cell: ({ row }) => <Typography>{row.original.accountHoldFinance ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => <Typography>{row.original.status}</Typography>
      }),
      columnHelper.accessor('customerId', {
        header: 'Customer Id',
        cell: ({ row }) => <Typography color='text.primary'>#{row.original.customerId}</Typography>
      }),
      columnHelper.accessor('country', {
        header: 'Country',
        cell: ({ row }) => (
          <div className='flex items-center gap-2'>
            <img src={row.original.countryFlag} height={22} />
            <Typography>{row.original.country}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('order', {
        header: 'Orders',
        cell: ({ row }) => <Typography>{row.original.order}</Typography>
      }),
      columnHelper.accessor('totalSpent', {
        header: 'Total Spent',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            ${row.original.totalSpent.toLocaleString()}
          </Typography>
        )
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 6
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  const getAvatar = params => {
    const { avatar, customer } = params

    if (avatar) {
      return <CustomAvatar src={avatar} skin='light' size={34} />
    } else {
      return (
        <CustomAvatar skin='light' size={34}>
          {getInitials(customer)}
        </CustomAvatar>
      )
    }
  }

  const contactsCounts = {
    today: 0,
    weekly: 4,
    monthly: 18,
    total: 60
  }

  const activeFiltersCount = Object.values(activeFilters).filter(Boolean).length

  return (
    <>
      <Card className='mt-2'>
        <CardContent className='flex justify-between flex-wrap max-sm:flex-col sm:items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search'
            className='max-sm:is-full'
          />
          <div className='flex gap-4 max-sm:flex-col max-sm:is-full'>
            <Button
              variant='outlined'
              className='max-sm:is-full'
              color='secondary'
              startIcon={<i className='ri-upload-2-line' />}
            >
              Export
            </Button>
            {/* Active filter pills */}
            {Object.entries(activeFilters).map(([key, value]) => {
              if (!value) return null;
              const labelMap = { status: 'Status', industry: 'Industry', accountExecutive: 'Executive' }
              return (
                <Chip
                  key={key}
                  size='small'
                  variant='outlined'
                  label={`${labelMap[key] || key}: ${value}`}
                  onDelete={() => handleRemoveFilter(key)}
                  className='bg-backgroundPaper rounded-[8px] h-[34px]'
                />
              )
            })}
          </div>
          <div className='flex items-center'>
            <Button variant='outlined' color='secondary' startIcon={<i className='ri-layout-column-line' />}>
              Columns
            </Button>
          </div>
        </CardContent>

        {/* Table Container */}
        <div className='flex-1 overflow-y-auto overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead className='sticky top-0 z-10 bg-backgroundPaper border-b'>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className='bg-backgroundPaper whitespace-nowrap py-3'>
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            className={classnames({
                              'flex items-center': header.column.getIsSorted(),
                              'cursor-pointer select-none': header.column.getCanSort()
                            })}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: <i className='ri-arrow-up-s-line text-xl' />,
                              desc: <i className='ri-arrow-down-s-line text-xl' />
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center py-4'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table.getRowModel().rows.map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            )}
          </table>
        </div>

        <TablePagination
          rowsPerPageOptions={[6, 10, 25, 50, 100]}
          component='div'
          className='border-t'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' }
          }}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>

      <AdvancedFiltersDrawer
        open={filterDrawerOpen}
        handleClose={() => setFilterDrawerOpen(false)}
        activeFilters={activeFilters}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
      />
      <AddUserDrawer
        open={addUserOpen}
        handleClose={() => setAddUserOpen(!addUserOpen)}
        quotesData={data}
        setData={setData}
      />
    </>
  )
}

export default AccountListTable
