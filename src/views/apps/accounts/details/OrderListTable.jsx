'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import TablePagination from '@mui/material/TablePagination'
import Button from '@mui/material/Button'
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
import OptionMenu from '@core/components/option-menu'

// Style Imports
import tableStyles from '@core/styles/table.module.css'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)
  addMeta({ itemRank })
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' variant='outlined' />
}

const mockQuotes = [
  { id: 1, quote_number: '107736', created_date: '04/30/2026', stage: 'Quote', reason: '', process: 'Compression Mold', amount: '$0.00', status: 'Active' },
  { id: 2, quote_number: '107728', created_date: '04/28/2026', stage: 'Pending further details from sup...', reason: '', process: 'SLS', amount: '$0.00', status: 'Active' },
  { id: 3, quote_number: '107727', created_date: '04/28/2026', stage: 'Quote', reason: '', process: 'SLA', amount: '$0.00', status: 'Active' },
]

const columnHelper = createColumnHelper()

const OrderListTable = () => {
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(mockQuotes)

  const columns = useMemo(
    () => [
      columnHelper.accessor('quote_number', {
        header: 'Quote #',
        cell: ({ row }) => <Typography color='primary'>{row.original.quote_number}</Typography>
      }),
      columnHelper.accessor('created_date', {
        header: 'Created Date',
        cell: ({ row }) => <Typography>{row.original.created_date}</Typography>
      }),
      columnHelper.accessor('stage', {
        header: 'Stage',
        cell: ({ row }) => <Typography>{row.original.stage}</Typography>
      }),
      columnHelper.accessor('reason', {
        header: 'Reason',
        cell: ({ row }) => <Typography>{row.original.reason}</Typography>
      }),
      columnHelper.accessor('process', {
        header: 'Process',
        cell: ({ row }) => <Typography>{row.original.process}</Typography>
      }),
      columnHelper.accessor('amount', {
        header: 'Amount',
        cell: ({ row }) => <Typography>{row.original.amount}</Typography>
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => <Typography>{row.original.status}</Typography>
      })
    ],
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
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    enableRowSelection: true,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <div className='overflow-x-auto overflow-y-auto' style={{ maxHeight: '450px' }}>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="py-2 px-3 align-top bg-transparent border-b text-xs font-semibold uppercase">
                    {header.isPlaceholder ? null : (
                      <div className="flex w-full flex-col items-start gap-1">
                        <div
                          className={classnames({
                            'flex w-full items-center justify-start cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <span className="truncate text-left">{flexRender(header.column.columnDef.header, header.getContext())}</span>
                          {{
                            asc: <i className='ri-arrow-up-s-line text-lg ml-1' />,
                            desc: <i className='ri-arrow-down-s-line text-lg ml-1' />
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <DebouncedInput
                            value={(header.column.getFilterValue() ?? '')}
                            onChange={value => header.column.setFilterValue(value)}
                            placeholder=''
                            fullWidth
                            margin='none'
                            className="w-full bg-backgroundPaper mt-1 [&_.MuiInputBase-input]:p-1 [&_.MuiInputBase-input]:text-xs"
                            sx={{ m: 0 }}
                          />
                        ) : null}
                      </div>
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
                  <div className='flex flex-col items-center justify-center p-10 text-textSecondary'>
                    <i className='ri-file-list-3-line text-5xl mb-2 opacity-50' />
                    <Typography variant='h6' color='text.secondary'>No Quotes Found</Typography>
                    <Typography variant='body2' color='text.disabled'>There are currently no quotes associated with this account.</Typography>
                  </div>
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
                         <td key={cell.id} className="px-3 py-2 whitespace-nowrap">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
  )
}

export default OrderListTable
