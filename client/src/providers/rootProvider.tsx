import { type ReactNode } from 'react'
import { Buffer } from 'buffer'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Popup from '@/components/popup'
import {
  PopupProvider,
} from '@/providers'
import { config } from '@/wagmi-config'

globalThis.Buffer = Buffer

const queryClient = new QueryClient()

interface RootProviderProps {
  children: ReactNode
}

export const RootProvider: React.FC<RootProviderProps> = ({
                                                            children
                                                          }: RootProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>
          {children}
          <Popup/>
        </PopupProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
