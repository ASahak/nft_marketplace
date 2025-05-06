import { Connector } from 'wagmi'

export type IConnector = Connector & {
  name: string
  icon: string
}
