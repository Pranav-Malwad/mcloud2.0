import React from 'react'
import ReactDOM from 'react-dom/client'
import './polyfills.process'
import App from './App'

ReactDOM.createRoot(document.getElementById('__next')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
