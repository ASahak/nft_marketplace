import { errorCodes, getMessageFromCode } from '@metamask/rpc-errors'
import { INTERNAL_ERRORS, SDK_ERRORS } from '@walletconnect/utils'

import CUSTOM_WALLET_CONNECT_ERRORS from './walletConnect'

export enum Errors {
  NO_METAMASK = 'NO_METAMASK',
  ALREADY_CONNECTED = 'ALREADY_CONNECTED',
  METAMASK_ALREADY_PROCESSING = 'METAMASK_ALREADY_PROCESSING'
}

export const METAMASK_ERRORS = (() => {
  const store = { ...errorCodes.rpc, ...errorCodes.provider }
  const collectedErrors: { [key: string]: { code: number; message: string } } =
    {}

  Object.keys(store).forEach((key) => {
    const code = store[key as keyof typeof store]
    const errorValue = getMessageFromCode(code)
    if (errorValue) {
      collectedErrors[key] = {
        code: code,
        message: errorValue
      }
    }
  })

  return collectedErrors
})()

export const CUSTOM_MESSAGES = {
  UNKNOWN_ERROR: 'Something went wrong',
  [METAMASK_ERRORS.internal.code]: 'User denied'
} as const

export const WALLET_CONNECT_ERRORS = {
  ...SDK_ERRORS,
  ...INTERNAL_ERRORS,
  ...CUSTOM_WALLET_CONNECT_ERRORS
}
if (typeof window !== 'undefined') {
  ;(window as any).CONNECTION_ERRORS = {
    WALLET_CONNECT_ERRORS,
    METAMASK_ERRORS
  }
}
