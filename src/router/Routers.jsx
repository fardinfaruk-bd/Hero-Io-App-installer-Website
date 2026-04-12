import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/homepage";
import App from "../pages/apps/App";
import InstallApps from "../pages/installApps/InstallApps";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AppDetails from "../pages/appDetails/AppDetails";

export const router = createBrowserRouter( 
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
            path: '/apps/:id',
            Component: AppDetails,
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