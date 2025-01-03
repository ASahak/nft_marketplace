'use client'

import { usePathname } from 'next/navigation'
import { Flex } from '@chakra-ui/react'
import { Header, RouterTransition } from '@/components'

type IProps = {
  children: React.ReactNode
}
function BaseLayout({ children }: IProps) {
  const pathname = usePathname()

  return (
    <Flex flexDirection="column" minH="full">
      <Header />
      <RouterTransition routerName={pathname}>{children}</RouterTransition>
    </Flex>
  )
}

export default BaseLayout
