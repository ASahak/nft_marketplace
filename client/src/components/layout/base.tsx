'use client'

import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header, Preloader, RouterTransition, RouterMotion } from '@/components'
import { useIsClient } from '@/hooks'
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

  return (
    <>
      <CustomScrollbar
        disableOnMobile
        style={{ height: '100%' }}
        autoHeight
        autoHeightMin="100%"
        autoHeightMax="100%"
      >
        <Flex flexDirection="column" minH="full">
          <RouterMotion keyProp={isClient.toString()}>
            <Header />
            <RouterTransition routerName={pathname} disableMotionOnMount>
              {children}
            </RouterTransition>
          </RouterMotion>
        </Flex>
      </CustomScrollbar>
      {!isClient && <Preloader bgColor="gray.800" />}
    </>
  )
}

export default BaseLayout
