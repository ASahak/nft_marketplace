'use client'

import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import { Header, Preloader, RouterTransition } from '@/components'
import { isClient } from '@/utils/helpers/global'

type IProps = {
  children: React.ReactNode
}
function BaseLayout({ children }: IProps) {
  const pathname = usePathname()

  return (
    <>
      {!isClient && <Preloader bgColor="gray.800" />}
      <Flex flexDirection="column" minH="full">
        <Header />
        <RouterTransition routerName={pathname}>{children}</RouterTransition>
      </Flex>
    </>
  )
}

export default BaseLayout
