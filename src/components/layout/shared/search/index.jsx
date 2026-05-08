'use client'

// React Imports
import { useMemo, useState } from 'react'

// Next Imports
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Data Imports
import data from '@/data/searchData'

const NavSearch = () => {
  const [searchValue, setSearchValue] = useState('')

  // Hooks
  const router = useRouter()
  const { lang: locale } = useParams()

  const normalizedItems = useMemo(
    () =>
      data.map(item => ({
        name: item.name || '',
        shortcut: item.shortcut || '',
        section: item.section || '',
        url: item.url,
        excludeLang: item.excludeLang
      })),
    []
  )

  const getBestMatch = query => {
    const q = query.trim().toLowerCase()

    if (!q) return null

    return (
      normalizedItems.find(item => item.name.toLowerCase() === q || item.shortcut.toLowerCase() === q) ||
      normalizedItems.find(
        item =>
          item.name.toLowerCase().includes(q) ||
          item.shortcut.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q)
      ) ||
      null
    )
  }

  const navigateToMatch = () => {
    const match = getBestMatch(searchValue)

    if (!match || !match.url) return

    if (match.url.startsWith('http')) {
      window.open(match.url, '_blank')
    } else {
      router.push(match.excludeLang ? match.url : getLocalizedUrl(match.url, locale))
    }
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        navigateToMatch()
      }}
      className='flex items-center'
      role='search'
      aria-label='Global search'
    >
      <TextField
        size='small'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder='Search'
        className='is-[180px] sm:is-[220px] lg:is-[260px]'
        inputProps={{ 'aria-label': 'Search' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <i className='ri-search-line text-textDisabled' />
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default NavSearch
