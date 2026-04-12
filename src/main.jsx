import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import App from './pages/apps/App'
import InstallApps from './pages/installApps/InstallApps'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Homepage from './pages/homepage/homepage'

const router = createBrowserRouter( 
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Homepage
        },
        {
          path: '/apps',
          Component: App,
        },
        {
          path: '/installedApps',
          Component: InstallApps,
        }
      ],
      errorElement: <ErrorPage />,
    }
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
