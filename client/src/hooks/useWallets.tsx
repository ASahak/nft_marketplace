import { useMemo } from 'react'
import { Connector, useConnectors } from 'wagmi'

import { ConnectorsWithTypes } from '@/enums/connect'
import { IConnector } from '@/types/connect'

const supportedWallets: Partial<Record<ConnectorsWithTypes, any>> = {
  [ConnectorsWithTypes.ONE_KEY]: {
    name: 'OneKey',
    icon: '/images/onkey.svg'
  },
  [ConnectorsWithTypes.METAMASK]: {
    name: 'Metamask',
    icon: '/images/metamask.svg'
  },
  [ConnectorsWithTypes.WALLET_CONNECT]: {
    name: 'WalletConnect',
    icon: '/images/connectWalletSquare.svg'
  }
}
export const useWallets = (): IConnector[] => {
  const connectors = useConnectors()

  return useMemo(() => {
    ;(window as any)._connectors_ = connectors //temp assignment for checking logs

    const _wallets: IConnector[] = connectors
      .map((connector: Connector) => {
        const walletId = Object.keys(supportedWallets).find(
          // where id is comma seperated list
          (id) =>
            id
              .split(',')
              .map((i) => i.trim())
              .indexOf(connector.id) !== -1
        )
        if (walletId) {
          return {
            ...connector,
            ...supportedWallets[walletId as ConnectorsWithTypes]
          }
        }
      })
      .filter(Boolean)

    ;(window as any)._wallets_ = _wallets //temp assignment for checking logs
    return _wallets
  }, [connectors])
}
