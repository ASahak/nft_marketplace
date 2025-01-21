'use client'

import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import { Header, Preloader, RouterTransition, RouterMotion } from '@/components'
import { useIsClient } from '@/hooks'

type IProps = {
  children: React.ReactNode
}

function BaseLayout({ children }: IProps) {
  const pathname = usePathname()
  const isClient = useIsClient()

  return (
    <>
      {!isClient && <Preloader bgColor="gray.800" />}
      <Flex flexDirection="column" minH="full">
        <RouterMotion keyProp={isClient.toString()}>
          <Header />
          <RouterTransition routerName={pathname} disableMotionOnMount>
            {children}
          </RouterTransition>
        </RouterMotion>
      </Flex>
    </>
  )
}

export default BaseLayout
