import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import '@/app/globals.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@assets/iconify-icons/generated-icons.css'

import Providers from '@/components/Providers'
import AppRoutes from '@/router/AppRoutes'

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Providers direction='ltr'>
        <AppRoutes />
      </Providers>
    </BrowserRouter>
  )
}

export default App
