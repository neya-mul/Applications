import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import AllApps from './pages/AllApps.jsx'
import HomePage from './pages/HomePage.jsx'
import { router } from './router/Router.jsx'
import AppProvider from './contexts/AppProvider.jsx'
import { ToastContainer } from 'react-toastify'
// import { Router, RouterProvider } from 'react-router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AppProvider>

  </StrictMode>,
)
