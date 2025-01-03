'use client'

import { type ReactNode, FC } from 'react'
import { WagmiProvider, cookieToInitialState } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Popup from '@/components/popup'
import { ChakraProvider, PopupProvider } from '@/providers'
import { config } from '@/wagmi-config'

const queryClient = new QueryClient()

interface RootProviderProps {
  children: ReactNode
  cookie?: string | null
}

export const RootProvider: FC<RootProviderProps> = ({
  children,
  cookie
}: RootProviderProps) => {
  return (
    <ChakraProvider>
      <WagmiProvider
        config={config}
        reconnectOnMount={false}
        initialState={cookieToInitialState(config, cookie)}
      >
        <QueryClientProvider client={queryClient}>
          <PopupProvider>
            {children}
            <Popup />
          </PopupProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  )
}
