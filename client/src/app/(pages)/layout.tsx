import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { headers } from 'next/headers'
import { RootProvider } from '@/providers'
import BaseLayout from '@/components/layout/base'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default async function PagesLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const wagmiCookie = (await headers()).get('cookie')

  return (
    <RootProvider wagmiCookie={wagmiCookie}>
      <Flex direction="column" h="100vh" id="app" overflow="hidden">
        <BaseLayout>{children}</BaseLayout>
      </Flex>
    </RootProvider>
  )
}
