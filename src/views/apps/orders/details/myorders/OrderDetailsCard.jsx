'use client'

// React Imports
import { useState, useMemo } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'

// Component Imports
import Link from '@components/Link'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { Button } from '@mui/material'

// Fuzzy filter function for searching
const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)
  addMeta({
    itemRank,
  })
  return itemRank.passed
}

// Sample order data with new fields
const orderData = [
  {
    line: 1,
    process: 'CNC Machining',
    fn: 'FN001',
    cfn: 'CFN001',
    material: 'Aluminum',
    finish: 'Anodized',
    qty: 2,
    up: 150,
    ld: 5,
    lt: 10,
    attachments: 'doc1.pdf',
    x: 0,
    y: 0,
    z: 0,
    vol: 30,
    leadTime: '2 weeks',
    notes: 'Handle with care',
    specifications: 'Spec details here',
    sr: 'SR001',
    gp: 'GP001',
  },
  {
    line: 2,
    process: 'CNC Machining',
    fn: 'FN001',
    cfn: 'CFN001',
    material: 'Aluminum',
    finish: 'Anodized',
    qty: 2,
    up: 150,
    ld: 5,
    lt: 10,
    attachments: 'doc1.pdf',
    x: 0,
    y: 0,
    z: 0,
    vol: 30,
    leadTime: '2 weeks',
    notes: 'Handle with care',
    specifications: 'Spec details here',
    sr: 'SR001',
    gp: 'GP001',
  },
  {
    line: 3,
    process: 'CNC Machining',
    fn: 'FN001',
    cfn: 'CFN001',
    material: 'Aluminum',
    finish: 'Anodized',
    qty: 2,
    up: 150,
    ld: 5,
    lt: 10,
    attachments: 'doc1.pdf',
    x: 0,
    y: 0,
    z: 0,
    vol: 30,
    leadTime: '2 weeks',
    notes: 'Handle with care',
    specifications: 'Spec details here',
    sr: 'SR001',
    gp: 'GP001',
  },
  {
    line: 4,
    process: 'CNC Machining',
    fn: 'FN001',
    cfn: 'CFN001',
    material: 'Aluminum',
    finish: 'Anodized',
    qty: 2,
    up: 150,
    ld: 5,
    lt: 10,
    attachments: 'doc1.pdf',
    x: 0,
    y: 0,
    z: 0,
    vol: 30,
    leadTime: '2 weeks',
    notes: 'Handle with care',
    specifications: 'Spec details here',
    sr: 'SR001',
    gp: 'GP001',
  },
  // Add more sample data as necessary
]

// Column Definitions
const columnHelper = createColumnHelper()

const OrderTable = () => {
  // States
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(orderData)
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        ),
      },
      columnHelper.accessor('line', {
        header: 'Line',
        cell: ({ row }) => <Typography>{row.original.line}</Typography>,
      }),
      columnHelper.accessor('process', {
        header: 'Process',
        cell: ({ row }) => <Typography>{row.original.process}</Typography>,
      }),
      columnHelper.accessor('fn', {
        header: 'FN',
        cell: ({ row }) => <Typography>{row.original.fn}</Typography>,
      }),
      columnHelper.accessor('cfn', {
        header: 'CFN',
        cell: ({ row }) => <Typography>{row.original.cfn}</Typography>,
      }),
      columnHelper.accessor('material', {
        header: 'Material',
        cell: ({ row }) => <Typography>{row.original.material}</Typography>,
      }),
      columnHelper.accessor('finish', {
        header: 'Finish',
        cell: ({ row }) => <Typography>{row.original.finish}</Typography>,
      }),
      columnHelper.accessor('qty', {
        header: 'Qty',
        cell: ({ row }) => <Typography>{row.original.qty}</Typography>,
      }),
      columnHelper.accessor('up', {
        header: 'UP',
        cell: ({ row }) => <Typography>{`$${row.original.up}`}</Typography>,
      }),
      columnHelper.accessor('ld', {
        header: 'LD',
        cell: ({ row }) => <Typography>{row.original.ld}</Typography>,
      }),
      columnHelper.accessor('lt', {
        header: 'LT',
        cell: ({ row }) => <Typography>{row.original.lt}</Typography>,
      }),
      columnHelper.accessor('attachments', {
        header: 'Attachments',
        cell: ({ row }) => <Typography>{row.original.attachments}</Typography>,
      }),
      columnHelper.accessor('x', {
        header: 'X',
        cell: ({ row }) => <Typography>{row.original.x}</Typography>,
      }),
      columnHelper.accessor('y', {
        header: 'Y',
        cell: ({ row }) => <Typography>{row.original.y}</Typography>,
      }),
      columnHelper.accessor('z', {
        header: 'Z',
        cell: ({ row }) => <Typography>{row.original.z}</Typography>,
      }),
      columnHelper.accessor('vol', {
        header: 'Vol',
        cell: ({ row }) => <Typography>{row.original.vol}</Typography>,
      }),
      columnHelper.accessor('leadTime', {
        header: 'Lead Time',
        cell: ({ row }) => <Typography>{row.original.leadTime}</Typography>,
      }),
      columnHelper.accessor('notes', {
        header: 'Notes',
        cell: ({ row }) => <Typography>{row.original.notes}</Typography>,
      }),
      columnHelper.accessor('specifications', {
        header: 'Specifications',
        cell: ({ row }) => <Typography>{row.original.specifications}</Typography>,
      }),
      columnHelper.accessor('sr', {
        header: 'SR',
        cell: ({ row }) => <Typography>{row.original.sr}</Typography>,
      }),
      columnHelper.accessor('gp', {
        header: 'GP',
        cell: ({ row }) => <Typography>{row.original.gp}</Typography>,
      }),
    ],
    []
  )

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    enableRowSelection: true,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className='overflow-x-auto'>
      <table className={tableStyles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      className={classnames({
                        'flex items-center': header.column.getIsSorted(),
                        'cursor-pointer select-none': header.column.getCanSort(),
                      })}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <i className='ri-arrow-up-s-line text-xl' />,
                        desc: <i className='ri-arrow-down-s-line text-xl' />,
                      }[header.column.getIsSorted()] ?? null}
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
                No data available
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className='border-be'>
            {table
              .getRowModel()
              .rows.slice(0, table.getState().pagination.pageSize)
              .map(row => {
                return (
                  <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className='first:is-14'>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        )}
      </table>
    </div>
  )
}

const OrderDetailsCard = () => {
  return (
    <Card >
      <CardHeader
        title='Order Details'
        
      />
      <OrderTable />
      <CardContent className='flex justify-end'>
  <CardContent>
    <div className='flex items-center gap-12'>
      <Typography color='text.primary' className='min-is-[100px]'>
        Subtotal:
      </Typography>
      <Typography color='text.primary' className='font-medium'>
        $70.69
      </Typography>
    </div>
    <div className='flex items-center gap-12'>
      <Typography color='text.primary' className='min-is-[100px]'>
        Discount:
      </Typography>
      <Typography color='text.primary' className='font-medium'>
        0%
      </Typography>
    </div>
    <div className='flex items-center gap-12'>
      <Typography color='text.primary' className='min-is-[100px]'>
        Shipping:
      </Typography>
      <Typography color='text.primary' className='font-medium'>
        TBD
      </Typography>
    </div>
    <div className='flex items-center gap-12'>
      <Typography color='text.primary' className='min-is-[100px]'>
        Total:
      </Typography>
      <Typography color='text.primary' className='font-medium'>
        $70.69
      </Typography>
    </div>
  </CardContent>
</CardContent>
<div className='flex justify-center gap-4 mb-8'>
<Button variant='outlined' size='small' className='max-sm:is-full'>Edit Order</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Email Order</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Create Shipment</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Download Order</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Packing Slip</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Work Order</Button>
<Button variant='outlined' size='small' className='max-sm:is-full'>Invoice & Bill</Button>
</div>
    </Card>
  )
}

export default OrderDetailsCard

