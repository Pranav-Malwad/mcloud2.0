'use client'

import React from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

const PageHeader = ({ title, subtitle, kpis = [], actionButtons }) => {
  return (
    <div className='flex justify-between items-center pb-3 pli-5 pt-3 flex-wrap gap-4'>
      <div className='flex items-center gap-6 flex-wrap'>
        <div>
          <Typography variant='h5' className='font-bold text-xl leading-tight'>{title}</Typography>
          {subtitle && <Typography variant='body2' color='text.disabled'>{subtitle}</Typography>}
        </div>
        
        {kpis.length > 0 && (
          <div className='flex gap-2 items-center flex-wrap'>
            {kpis.map((kpi, index) => (
              <Chip 
                key={index}
                size='medium' 
                variant='outlined' 
                icon={<i className={kpi.icon || 'ri-calendar-line'} />} 
                label={
                  <>
                    <strong className='text-textPrimary mr-1'>{kpi.value}</strong> 
                    {kpi.label}
                  </>
                } 
                className='bg-backgroundPaper rounded-[10px]' 
              />
            ))}
          </div>
        )}
      </div>
      
      {actionButtons && (
        <div className='flex gap-3 items-center'>
          {actionButtons}
        </div>
      )}
    </div>
  )
}

export default PageHeader
