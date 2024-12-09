// import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
// import {
//   RouteLoading,
//   Header,
//   RouterTransition
// } from '@/components'

function BaseLayout() {
  return (
    <Flex flexDirection="column" minH="full">
      <Outlet />
      {/*<Header />*/}
      {/*<Suspense fallback={<RouteLoading />}>*/}
      {/*    <RouterTransition routerName={pathname}>*/}
      {/*      <Outlet />*/}
      {/*    </RouterTransition>*/}
      {/*</Suspense>*/}
    </Flex>
  )
}

export default BaseLayout
