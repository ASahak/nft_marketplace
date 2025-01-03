'use client'

import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, walletConnect, metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
    coinbaseWallet(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
      qrModalOptions: {
        themeVariables: {
          '--wcm-z-index': '100000'
        }
      }
    })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http()
  }
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
