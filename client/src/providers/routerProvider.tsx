import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  type RouteProps,
  RouterProvider as NativeRouterProvider
} from 'react-router-dom'
import ROUTE_PATHS from '@/utils/constants/routes'
import App from '@/App'
import BaseLayout from '@/components/layout/base'

const Dashboard = lazy(async () => await import('../pages/dashboard'))
type IRoutes = Array<RouteProps>
export const routes: IRoutes = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: <Dashboard />
  },
]

const createRoutes = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<BaseLayout />} errorElement={null}>
          {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
        <Route path="*" element={<Dashboard />} />
      </Route>
    ),
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true
      }
    }
  )
export const RouterProvider = () => {
  return (
    <NativeRouterProvider
      router={createRoutes()}
      future={{
        v7_startTransition: true
      }}
    />
  )
}
