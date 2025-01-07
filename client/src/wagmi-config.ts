'use client'

import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, walletConnect } from 'wagmi/connectors'

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
      })
    ],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http()
    }
  })
