export enum ConnectorsWithTypes {
  INJECTED = 'injected',
  METAMASK = 'metaMask,metaMask-io,io.metamask,io.metamask.mobile,metaMaskSDK',
  WALLET_CONNECT = 'walletConnect',
  ONE_KEY = 'oneKey,so.onekey.app.wallet,onekey-io,onekey'
}

export enum ConnectingStates {
  CONNECTING = 'connecting',
  RECONNECTING = 'reconnecting',
  DISCONNECTED = 'disconnected',
  CONNECTED = 'connected'
}
