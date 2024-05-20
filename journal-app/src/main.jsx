import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'
import { AppTheme } from './theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={router}/>
    </AppTheme>
  </React.StrictMode>,
)
