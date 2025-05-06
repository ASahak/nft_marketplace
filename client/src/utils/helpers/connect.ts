import { isMobile, isMobileSafari, isSafari } from 'react-device-detect'

import { ConnectorsWithTypes } from '@/enums/connect'
import { IConnector } from '@/types/connect'

export const isWalletConnectConnector = (connectorId?: string) =>
  ConnectorsWithTypes.WALLET_CONNECT.indexOf(
    connectorId as ConnectorsWithTypes
  ) > -1

export const isMetaMaskConnector = (connectorId?: string) =>
  ConnectorsWithTypes.METAMASK.indexOf(connectorId as ConnectorsWithTypes) > -1

export const isInjectedConnector = (connectorId?: string) =>
  ConnectorsWithTypes.INJECTED.indexOf(connectorId as ConnectorsWithTypes) > -1

export const isOneKeyConnector = (connectorId?: string) =>
  ConnectorsWithTypes.ONE_KEY.indexOf(connectorId as ConnectorsWithTypes) > -1

export const isMetaMaskAvailable = () => window?.ethereum?.isMetaMask
export const isOneKeyAvailable = () =>
  Object.hasOwn(window.ethereum || {}, 'isOneKey')

export const isOneKeyWalletBrowser: boolean = isMobile && isOneKeyAvailable()

export function getAvailableConnectors(wallets: IConnector[]): IConnector[] {
  const isDesktopSafari = isSafari && !isMobileSafari

  return wallets.filter((wallet, _, self) => {
    if (isMetaMaskConnector(wallet.id)) {
      if (isDesktopSafari) return false
      if (isMobile && self.some((w) => isOneKeyConnector(w.id))) {
        return !isOneKeyWalletBrowser
      }

      return true
    } else if (isOneKeyConnector(wallet.id)) {
      return isMobile ? isOneKeyWalletBrowser : isOneKeyAvailable()
    }

    return true
  })
}
