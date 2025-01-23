'use client'

import { type ReactNode, FC, useState } from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Popup from '@/components/popup'
import { PopupProvider } from '@/providers'
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
    <WagmiProvider config={config} reconnectOnMount initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>
          {children}
          <Popup />
        </PopupProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
