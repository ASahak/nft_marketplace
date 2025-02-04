'use client'

import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, walletConnect, metaMask } from 'wagmi/connectors'
import { initEruda, isClient } from '@/utils/helpers/global'
if (isClient) {
  initEruda()
}
export const getConfig = () =>
  createConfig({
    chains: [mainnet, sepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage
    }),
    connectors: [
      coinbaseWallet(),
      walletConnect({
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
        qrModalOptions: {
          themeVariables: {
            '--wcm-z-index': '100000'
          }
        }
      }),
      metaMask()
    ],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http()
    }
  })
