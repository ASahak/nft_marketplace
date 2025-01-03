import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Flex } from '@chakra-ui/react'
import { headers } from 'next/headers'
import { RootProvider } from '@/providers'
import BaseLayout from '@/components/layout/base'

export const metadata: Metadata = {
  title: 'NFT Marketplace',
  description:
    'Discover, buy, and sell unique digital assets on our cutting-edge NFT marketplace. Join a global community of creators and collectors.',
  keywords:
    'NFT, Non-Fungible Tokens, Crypto, Blockchain, Marketplace, Digital Art, Collectibles',
  robots: 'index, follow'
}
export async function getCookieValue() {
  const headersList = await headers()
  return headersList.get('cookie')
}

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const cookie = await getCookieValue()

  return (
    <html lang="en">
      <body>
        <RootProvider cookie={cookie}>
          <Flex direction="column" h="100vh" id="app">
            <BaseLayout>{children}</BaseLayout>
          </Flex>
        </RootProvider>
      </body>
    </html>
  )
}
