import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import {
  RouteLoading,
  Header,
  RouterTransition
} from '@/components'

function BaseLayout() {
  const { pathname } = useLocation()

  return (
    <Flex flexDirection="column" minH="full">
      <Header/>
      <Suspense fallback={<RouteLoading/>}>
        <RouterTransition routerName={pathname}>
          <Outlet/>
        </RouterTransition>
      </Suspense>
    </Flex>
  )
}

export default BaseLayout
