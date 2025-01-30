'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useWindowSize } from 'react-use'
import {
  Header,
  Preloader,
  RouterTransition,
  RouterMotion,
  Footer
} from '@/components'
import { dispatchBus, useIsClient } from '@/hooks'
import { EVENT_BUS } from '@/utils/constants/global'

const CustomScrollbar = dynamic(
  () => import('@/components/customScrollbar').then((m) => m.CustomScrollbar),
  {
    loading: () => null
  }
)

type IProps = {
  children: React.ReactNode
}

function BaseLayout({ children }: IProps) {
  const pathname = usePathname()
  const isClient = useIsClient()
  const { height } = useWindowSize()

  useEffect(
    () => () => {
      dispatchBus({ type: EVENT_BUS.reCalcScrollbar }) // should trigger for recalculate the scrollbar thumbs after loading effect
    },
    [pathname]
  )

  return (
    <>
      <CustomScrollbar
        style={{ height: '100%' }}
        autoHeight
        autoHeightMin="100%"
        autoHeightMax="100%"
      >
        <Flex flexDirection="column" minH="full">
          <RouterMotion
            keyProp={isClient.toString()}
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minHeight: height
            }}
          >
            <Header />
            <RouterTransition routerName={pathname} disableMotionOnMount>
              {children}
            </RouterTransition>
            <Footer />
          </RouterMotion>
        </Flex>
      </CustomScrollbar>
      {!isClient && <Preloader bgColor="gray.800" />}
    </>
  )
}

export default BaseLayout
