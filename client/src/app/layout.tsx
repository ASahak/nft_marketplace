import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { ChakraProvider } from '@/providers'

export const metadata: Metadata = {
  title: {
    template: '%s | NFT Marketplace', // %s will be replaced by child route's title
    default: 'NFT Marketplace' // Fallback title
  },
  description:
    'Discover, buy, and sell unique digital assets on our cutting-edge NFT marketplace. Join a global community of creators and collectors.',
  keywords:
    'NFT, Non-Fungible Tokens, Crypto, Blockchain, Marketplace, Digital Art, Collectibles',
  robots: 'index, follow'
}

export default async function Layout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
