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

const mockContacts = [
  { id: 1, first_name: 'John', last_name: 'Carter', email: 'john@ey.com', registration_date: '04/27/2026', phone: '(309) 665-9087', company: 'EYA', lead_source: 'Other', industry: 'Consumer Products' },
  { id: 2, first_name: 'Long', last_name: 'Le', email: 'long.le@printform.com', registration_date: '04/27/2026', phone: '(404) 692-5500', company: 'EYA', lead_source: 'Google Search', industry: 'Other' }
]

const columnHelper = createColumnHelper()

const ContactListTable = () => {
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(mockContacts)

  const columns = useMemo(
    () => [
      columnHelper.accessor('first_name', {
        header: 'First Name',
        cell: ({ row }) => <Typography color='primary'>{row.original.first_name}</Typography>
      }),
      columnHelper.accessor('last_name', {
        header: 'Last Name',
        cell: ({ row }) => <Typography color='primary'>{row.original.last_name}</Typography>
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: ({ row }) => <Typography color='primary'>{row.original.email}</Typography>
      }),
      columnHelper.accessor('registration_date', {
        header: 'Registration Date',
        cell: ({ row }) => <Typography>{row.original.registration_date}</Typography>
      }),
      columnHelper.accessor('phone', {
        header: 'Phone',
        cell: ({ row }) => <Typography>{row.original.phone}</Typography>
      }),
      columnHelper.accessor('company', {
        header: 'Company',
        cell: ({ row }) => <Typography>{row.original.company}</Typography>
      }),
      columnHelper.accessor('lead_source', {
        header: 'Lead Source',
        cell: ({ row }) => <Typography>{row.original.lead_source}</Typography>
      }),
      columnHelper.accessor('industry', {
        header: 'Industry',
        cell: ({ row }) => <Typography>{row.original.industry}</Typography>
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
                      <div className="flex flex-col gap-1">
                        <div
                          className={classnames({
                            'flex items-center cursor-pointer select-none': header.column.getCanSort(),
                            'justify-between': true
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <span className="truncate">{flexRender(header.column.columnDef.header, header.getContext())}</span>
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
                            className="w-full bg-backgroundPaper mt-1 [&_.MuiInputBase-input]:p-1 [&_.MuiInputBase-input]:text-xs"
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
                    <i className='ri-contacts-book-2-line text-5xl mb-2 opacity-50' />
                    <Typography variant='h6' color='text.secondary'>No Contacts Found</Typography>
                    <Typography variant='body2' color='text.disabled'>There are currently no contacts associated with this account.</Typography>
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

export default ContactListTable
