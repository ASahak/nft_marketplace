'use client'

import { type ReactNode, FC, useState } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ReactSkeletonProvider,
  SKELETON_ANIMATION_VARIANTS
} from 'react-skeleton-builder'
import Popup from '@/components/popup'
import { PopupProvider, WalletConnectProvider } from '@/providers'
import { getConfig } from '@/wagmi-config'

interface RootProviderProps {
  children: ReactNode
  wagmiCookie?: string | null
}

export const RootProvider: FC<RootProviderProps> = ({
  children,
  wagmiCookie
}: RootProviderProps) => {
  const [config] = useState(() => getConfig())
  const initialState = cookieToInitialState(config, wagmiCookie)
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ReactSkeletonProvider
      value={{
        isDark: true,
        skeletonAnimation: SKELETON_ANIMATION_VARIANTS.SLIDE,
        colorTheme: {
          dark: { main: '#282c34', gradient: '#2c303a' },
          light: { main: '#f1f1f1', gradient: '#ececec' }
        }
      }}
    >
      <WagmiProvider
        config={config}
        reconnectOnMount
        initialState={initialState}
      >
        <QueryClientProvider client={queryClient}>
          <WalletConnectProvider>
            <PopupProvider>
              {children}
              <Popup />
            </PopupProvider>
          </WalletConnectProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ReactSkeletonProvider>
  )
}
