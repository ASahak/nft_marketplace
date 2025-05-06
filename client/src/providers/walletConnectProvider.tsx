'use client'

import { createContext, type ReactNode, useContext } from 'react'
import {
  Connector,
  useAccount,
  useConfig,
  useConnect,
  useDisconnect
} from 'wagmi'
import { isMobile } from 'react-device-detect'

import { useToast } from '@chakra-ui/react'

import { METAMASK_DOWNLOAD_URL } from '@/utils/constants/global'
import { Errors, WALLET_CONNECT_ERRORS } from '@/utils/errors/global'
import { getDAppUrl, userRejectedTx } from '@/utils/helpers/global'
import { isMetaMaskAvailable } from '@/utils/helpers/connect'
import { errorToUserReadable } from '@/utils/helpers/errors'

export interface WalletConnectContextType {
  disconnect: () => Promise<void>
  connectWithEVMWallet: (
    connector: Connector,
    fromSwitch?: boolean
  ) => Promise<void>
  connectWithWalletConnect: (
    connector: Connector,
    modalDisclosure: (isOpen: boolean) => void
  ) => Promise<void>
}

export const WalletConnectContext = createContext<
  WalletConnectContextType | undefined
>(undefined)

export const useWalletConnect = (): WalletConnectContextType => {
  const context = useContext(WalletConnectContext)

  if (context === undefined) {
    throw new Error(
      'useWalletConnect must be used within a WalletConnectProvider'
    )
  }

  return context
}

export const WalletConnectProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const { connector } = useAccount()
  const { connectAsync } = useConnect()
  const config = useConfig()
  const { disconnectAsync: disconnectWagmi } = useDisconnect()
  const toast = useToast()

  const subscribeWalletConnectModal = (
    provider: any,
    cb: (isOpen: boolean) => void
  ) => {
    provider.modal.subscribeModal((state: { open: boolean }) => {
      cb(state.open)
    })
  }

  const connectWithWalletConnect = async (
    connector: Connector,
    modalDisclosure: (isOpen: boolean) => void
  ) => {
    try {
      await disconnect()
      const provider: any = await connector.getProvider()
      if (provider.modal) {
        subscribeWalletConnectModal(provider, modalDisclosure)
      }

      await connectAsync({ connector })
    } catch (error: any) {
      console.error(
        `Failed to connect with wallet connect: ${error.message ?? error}`
      )
      if (
        userRejectedTx(error) ||
        error.code === WALLET_CONNECT_ERRORS.USER_REJECTED_METHODS.code
      ) {
        toast({
          title: 'Wallet connection canceled!',
          status: 'error'
        })
      } else {
        await disconnect()
        const errorMessage = errorToUserReadable(error)
        toast({
          status: 'error',
          title: errorMessage
        })
      }
    }
  }

  const connectWithEVMWallet = async (
    connector: Connector,
    fromSwitch?: boolean
  ) => {
    try {
      if (!fromSwitch) {
        await disconnect()
      }
      if (!isMetaMaskAvailable()) {
        if (!isMobile) {
          window.open(METAMASK_DOWNLOAD_URL, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = getDAppUrl()
        }
      } else {
        if (fromSwitch) {
          // switch wallet
          const provider = await connector.getProvider()
          await (provider as unknown as any).request({
            method: 'wallet_requestPermissions',
            params: [{ eth_accounts: {} }]
          })
        } else {
          await connectAsync({ connector })
        }
      }
    } catch (error: any) {
      console.log(error)
      if (error.type === Errors.METAMASK_ALREADY_PROCESSING) {
        toast({
          title: error.message,
          status: 'error'
        })
      } else {
        if (userRejectedTx(error)) {
          toast({
            title: 'User rejected request',
            status: 'error'
          })
        } else {
          await disconnect()
          const errorMessage = errorToUserReadable(error)
          toast({
            status: 'error',
            title: errorMessage
          })
        }
      }
    }
  }

  const disconnect = async () => {
    try {
      await disconnectWagmi(
        { connector },
        {
          onError() {
            setTimeout(disconnect, 0)
          }
        }
      )

      // We have to be make sure that all the connections terminated
      // We have injected case and sometimes there show up multiple connections
      // That is why we have to remove by custom way as well
      // This code belongs to wagmi
      config.setState((x) => ({
        ...x,
        connections: new Map(),
        current: null,
        status: 'disconnected'
      }))
      // ----
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <WalletConnectContext.Provider
      value={{
        disconnect,
        connectWithEVMWallet,
        connectWithWalletConnect
      }}
    >
      {children}
    </WalletConnectContext.Provider>
  )
}
