import { type ReactNode, FC } from 'react'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Popup from '@/components/popup'
import {
  PopupProvider,
} from '@/providers'
import { config } from '@/wagmi-config'


const queryClient = new QueryClient()

interface RootProviderProps {
  children: ReactNode
}

export const RootProvider: FC<RootProviderProps> = ({
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
