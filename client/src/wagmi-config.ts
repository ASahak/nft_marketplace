'use client'

import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia, bahamut } from 'wagmi/chains'
import { coinbaseWallet, walletConnect, metaMask } from 'wagmi/connectors'
import { initEruda, isClient } from '@/utils/helpers/global'

if (isClient) {
  // view console in mobile
  initEruda()
}

export const getConfig = () =>
  createConfig({
    chains: [mainnet, sepolia, bahamut],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage
    }),
    connectors: [
      coinbaseWallet(),
      walletConnect({
        projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
        qrModalOptions: {
          explorerRecommendedWalletIds: [
            '6db5c2cd78ea5a09e820b7543dacc90bf3b1727e5bbaddff544b301de1f74f39',
            'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
          ],
          themeVariables: {
            '--wcm-z-index': '100000'
          }
        }
      }),
      metaMask()
    ],
    transports: {
      [bahamut.id]: http(),
      [mainnet.id]: http(),
      [sepolia.id]: http()
    }
  })
