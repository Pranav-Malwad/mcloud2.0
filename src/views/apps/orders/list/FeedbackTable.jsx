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
import Chip from '@mui/material/Chip'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import TableFilters from '../../ecommerce/products/list/TableFilters'
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
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

export const paymentStatus = {
  1: { text: 'Paid', color: 'success', colorClassName: 'text-success' },
  2: { text: 'Pending', color: 'warning', colorClassName: 'text-warning' },
  3: { text: 'Cancelled', color: 'secondary', colorClassName: 'text-secondary' },
  4: { text: 'Failed', color: 'error', colorClassName: 'text-error' }
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

const FeedbackTable = ({ orderData }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [advanceSearchVisibility, setAdvanceSearchVisibility] = useState(false)


  const [data, setData] = useState(...[orderData])
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang: locale } = useParams()

  // Vars
  const paypal = '/images/apps/ecommerce/paypal.png'
  const mastercard = '/images/apps/ecommerce/mastercard.png'

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
      columnHelper.accessor('order', {
        header: 'Order',
        cell: ({ row }) => (
          <Typography
            component={Link}
            href={getLocalizedUrl(`/apps/orders/details/feedback/${row.original.order}`, locale)}
            color='primary'
          >{`#${row.original.order}`}</Typography>
        )
      }),
      columnHelper.accessor('date', {
        header: 'Date',
        cell: ({ row }) => (
          <Typography>{`${new Date(row.original.date).toDateString()}, ${row.original.time}`}</Typography>
        )
      }),
      columnHelper.accessor('customer', {
        header: 'Account',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            {getAvatar({ avatar: row.original.avatar, customer: row.original.customer })}
            <div className='flex flex-col'>
              <Typography
                component={Link}
                href={getLocalizedUrl('/apps/contacts/details/879861', locale)}
                color='text.primary'
                className='font-medium hover:text-primary'
              >
                {row.original.customer}
              </Typography>
              <Typography variant='body2'>{row.original.email}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('accountExecutive', {
        header: 'Account Executive',
        cell: ({ row }) => <Typography>{row.original.accountExecutive}</Typography>
      }),
      columnHelper.accessor('nextFollowUpDate', {
        header: 'Next Follow-Up Date',
        cell: ({ row }) => <Typography>{new Date(row.original.nextFollowUpDate).toLocaleDateString()}</Typography>
      }),
      columnHelper.accessor('stage', {
        header: 'Stage',
        cell: ({ row }) => <Typography>{row.original.stage}</Typography>
      }),
      columnHelper.accessor('itar', {
        header: 'ITAR',
        cell: ({ row }) => <Typography>{row.original.itar ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('leadType', {
        header: 'Lead Type',
        cell: ({ row }) => <Typography>{row.original.leadType}</Typography>
      }),
      columnHelper.accessor('account', {
        header: 'Account',
        cell: ({ row }) => <Typography>{row.original.account}</Typography>
      }),
      columnHelper.accessor('process', {
        header: 'Process',
        cell: ({ row }) => <Typography>{row.original.process}</Typography>
      }),
      columnHelper.accessor('amount', {
        header: 'Amount',
        cell: ({ row }) => <Typography>{`$${row.original.amount}`}</Typography>
      }),
      columnHelper.accessor('shippingCharge', {
        header: 'Shipping Charge',
        cell: ({ row }) => <Typography>{`$${row.original.shippingCharge}`}</Typography>
      }),
      columnHelper.accessor('invoiceAmount', {
        header: 'Invoice Amount',
        cell: ({ row }) => <Typography>{`$${row.original.invoiceAmount}`}</Typography>
      }),
      columnHelper.accessor('netTerms', {
        header: 'Net Terms',
        cell: ({ row }) => <Typography>{row.original.netTerms}</Typography>
      }),
      columnHelper.accessor('supplier', {
        header: 'Supplier',
        cell: ({ row }) => <Typography>{row.original.supplier}</Typography>
      }),
      columnHelper.accessor('supplierType', {
        header: 'Supplier Type',
        cell: ({ row }) => <Typography>{row.original.supplierType}</Typography>
      }),
      columnHelper.accessor('supplierAmount', {
        header: 'Supplier Amount',
        cell: ({ row }) => <Typography>{`$${row.original.supplierAmount}`}</Typography>
      }),
      columnHelper.accessor('shippingCost', {
        header: 'Shipping Cost',
        cell: ({ row }) => <Typography>{`$${row.original.shippingCost}`}</Typography>
      }),
      columnHelper.accessor('projectAmount', {
        header: 'Project Amount',
        cell: ({ row }) => <Typography>{`$${row.original.projectAmount}`}</Typography>
      }),
      columnHelper.accessor('supplierNetTerms', {
        header: 'Supplier Net Terms',
        cell: ({ row }) => <Typography>{row.original.supplierNetTerms}</Typography>
      }),
      columnHelper.accessor('shippingAccount', {
        header: 'Shipping Account',
        cell: ({ row }) => <Typography>{row.original.shippingAccount}</Typography>
      }),
      columnHelper.accessor('gpPercentage', {
        header: 'GP%',
        cell: ({ row }) => <Typography>{`${row.original.gpPercentage}%`}</Typography>
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
      columnHelper.accessor('email', {
        header: 'Email',
        cell: ({ row }) => <Typography>{row.original.email}</Typography>
      }),
      columnHelper.accessor('phone', {
        header: 'Phone',
        cell: ({ row }) => <Typography>{row.original.phone}</Typography>
      }),
      columnHelper.accessor('firstName', {
        header: 'First Name',
        cell: ({ row }) => <Typography>{row.original.firstName}</Typography>
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        cell: ({ row }) => <Typography>{row.original.lastName}</Typography>
      }),

      columnHelper.accessor('customerPo', {
        header: 'Customer PO',
        cell: ({ row }) => <Typography>{row.original.customerPo}</Typography>
      }),
      columnHelper.accessor('trackingId', {
        header: 'Tracking ID',
        cell: ({ row }) => <Typography>{row.original.trackingId}</Typography>
      }),
      columnHelper.accessor('invoiceStatus', {
        header: 'Invoice Status',
        cell: ({ row }) => <Typography>{row.original.invoiceStatus}</Typography>
      }),
      columnHelper.accessor('paymentReceived', {
        header: 'Payment Received',
        cell: ({ row }) => <Typography>{row.original.paymentReceived ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('commissionPaid', {
        header: 'Commission Paid',
        cell: ({ row }) => <Typography>{row.original.commissionPaid ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('billPaid', {
        header: 'Bill Paid',
        cell: ({ row }) => <Typography>{row.original.billPaid ? 'Yes' : 'No'}</Typography>
      }),
      columnHelper.accessor('nps', {
        header: 'NPS',
        cell: ({ row }) => <Typography>{row.original.nps}</Typography>
      }),
      columnHelper.accessor('commissionRate', {
        header: 'Commission Rate',
        cell: ({ row }) => <Typography>{`${row.original.commissionRate}%`}</Typography>
      }),
      columnHelper.accessor('woAudit', {
        header: 'WO Audit',
        cell: ({ row }) => <Typography>{row.original.woAudit}</Typography>
      }),
      columnHelper.accessor('poAudit', {
        header: 'PO Audit',
        cell: ({ row }) => <Typography>{row.original.poAudit}</Typography>
      }),
      columnHelper.accessor('invoicingStage', {
        header: 'Invoicing Stage',
        cell: ({ row }) => <Typography>{row.original.invoicingStage}</Typography>
      }),
      columnHelper.accessor('actualShipDate', {
        header: 'Actual Ship Date',
        cell: ({ row }) => <Typography>{new Date(row.original.actualShipDate).toLocaleDateString()}</Typography>
      }),
      columnHelper.accessor('customerShip', {
        header: 'Customer Ship',
        cell: ({ row }) => <Typography>{row.original.customerShip}</Typography>
      }),
      columnHelper.accessor('supplierShip', {
        header: 'Supplier Ship',
        cell: ({ row }) => <Typography>{row.original.supplierShip}</Typography>
      }),
      columnHelper.accessor('commissionsAmount', {
        header: 'Commissions Amount',
        cell: ({ row }) => <Typography>{`$${row.original.commissionsAmount}`}</Typography>
      }),
      columnHelper.accessor('payment', {
        header: 'Payment',
        cell: ({ row }) => (
          <div className='flex items-center gap-1'>
            <i
              className={classnames('ri-circle-fill bs-2.5 is-2.5', paymentStatus[row.original.payment].colorClassName)}
            />
            <Typography color={`${paymentStatus[row.original.payment].color}.main`} className='font-medium'>
              {paymentStatus[row.original.payment].text}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => (
          <Chip
            label={row.original.status}
            color={statusChipColor[row.original.status].color}
            variant='tonal'
            size='small'
          />
        )
      }),
      columnHelper.accessor('method', {
        header: 'Method',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <div className='flex justify-center items-center bg-[#F6F8FA] rounded-sm is-[29px] bs-[18px]'>
              <img
                src={row.original.method === 'mastercard' ? mastercard : paypal}
                height={row.original.method === 'mastercard' ? 11 : 14}
              />
            </div>
            <Typography>
              {`...${row.original.method === 'mastercard' ? row.original.methodNumber : '@gmail.com'}`}
            </Typography>
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        cell: ({ row }) => (
          <div className='flex items-center'>
            <OptionMenu
              iconButtonProps={{ size: 'medium' }}
              iconClassName='text-[22px]'
              options={[
                {
                  text: 'View',
                  icon: 'ri-eye-line',
                  href: getLocalizedUrl(`/apps/orders/details/${row.original.order}`, locale),
                  linkProps: { className: 'flex items-center gap-2 is-full plb-2 pli-4' }
                },
                {
                  text: 'Delete',
                  icon: 'ri-delete-bin-7-line text-[22px]',
                  menuItemProps: {
                    onClick: () => setData(data?.filter(order => order.id !== row.original.id)),
                    className: 'flex items-center gap-2 pli-4'
                  }
                }
              ]}
            />
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  const table = useReactTable({
    data: data,
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
        pageSize: 10
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

  const handleAdvanceSearch = () => {
    setAdvanceSearchVisibility(prev => !prev) // Toggle visibility
  }

  return (
    <>
      <Card>
        <CardContent className='flex justify-between max-sm:flex-col sm:items-center gap-4'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Search Order'
            className='sm:is-auto'
          />

          <Button className='mr-4' variant='outlined' color='secondary' startIcon={<i className='ri-upload-2-line' />}>
            Export
          </Button>
        </CardContent>
        <CardContent>
          {advanceSearchVisibility && <TableFilters setData={setData} productData={orderData} currentPage='Quotes' />}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <Button
              variant={advanceSearchVisibility ? 'outlined' : 'contained'}
              className='max-sm:is-full'
              onClick={handleAdvanceSearch}
            >
              {advanceSearchVisibility ? 'Close' : 'Advance Search'}
            </Button>
          </div>
        </CardContent>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
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
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
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
          rowsPerPageOptions={[10, 25, 50, 100]}
          component='div'
          className='border-bs'
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
      
    </>
  )
}

export default FeedbackTable
