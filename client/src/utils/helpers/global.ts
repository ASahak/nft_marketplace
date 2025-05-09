import BigNumber from 'bignumber.js'
import { isMobile, isSafari } from 'react-device-detect'
import { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form'
import { toBig } from './bignumber'
import { METAMASK_ERRORS, WALLET_CONNECT_ERRORS } from '@/utils/errors/global'
import { METAMASK_DOWNLOAD_URL } from '@/utils/constants/global'

export const trimString = (
  str: string,
  startCount: number = 5,
  endCount: number = 4
) => {
  const start = str.slice(0, startCount)
  const end = str.slice(str.length - endCount, str.length)
  return `${start}...${end}`
}

export const isClient = typeof window !== 'undefined'

export const toHumanReadableSmallNumbers = (
  value: number | string | BigNumber
) => {
  try {
    if (value === '') return value as string
    if (toBig(value).isNaN()) {
      return value as string
    }

    // Page a BigNumber instance
    const bigNum = new BigNumber(value)

    // Convert to fixed-point notation with sufficient precision
    let str = bigNum.toFixed()

    // Remove trailing zeros after the decimal point
    str = str.replace(/(\.\d*?[1-9])0+$/, '$1')

    // Remove the decimal point if it's followed by zeros only
    str = str.replace(/\.0+$/, '')

    return str
  } catch (err) {
    console.error('Failed to format number to human readable due to:', err)
    return value as string
  }
}

export const formatNumberWithSuffix = (
  number: number | string | BigNumber,
  addSuffix?: boolean
): string => {
  if (BigNumber(number).isGreaterThanOrEqualTo(1000000000)) {
    return (
      BigNumber(number).dividedBy(1000000000).toFixed(2) +
      (addSuffix ? 'B' : '')
    )
  } else if (BigNumber(number).isGreaterThanOrEqualTo(1000000)) {
    return (
      BigNumber(number).dividedBy(1000000).toFixed(2) + (addSuffix ? 'M' : '')
    )
  } else if (BigNumber(number).isGreaterThanOrEqualTo(1000)) {
    return BigNumber(number).dividedBy(1000).toFixed(2) + (addSuffix ? 'K' : '')
  } else {
    return toHumanReadableSmallNumbers(number)
  }
}

export const replacePathVariables = (
  path: string,
  variables: Record<string, any>
) => {
  return path.replace(/{(\w+)}/g, (_, key) => {
    if (key in variables) {
      return variables[key]
    }
    throw new Error(`Missing variable for key: ${key}`)
  })
}

export const remToPixel = (value: number, withUnit?: boolean) => {
  // Get the root font size in pixels (in this case, it's 10px)
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  )

  // Convert rem to pixels
  const result = value * rootFontSize
  return withUnit ? result + 'px' : result
}

export const isEmpty = (data: Record<string, any>, widthValues?: boolean) => {
  if (widthValues) {
    return Object.keys(data).length === 0
      ? true
      : Object.values(data).every((value) => value === '')
  }

  return Object.keys(data).length === 0
}

export const setFormValue = <
  TInputs extends FieldValues,
  K extends Path<TInputs>
>(
  form: UseFormReturn<TInputs>,
  key: K,
  value: PathValue<TInputs, K>
) => {
  form.setValue(key, value)
  form.clearErrors(key)
  form.trigger(key)
}

export const isNumber = (value: string | number) => {
  return !isNaN(parseFloat(value as string)) && isFinite(value as number)
}

export const initEruda = () => {
  const src = 'https://cdn.jsdelivr.net/npm/eruda'

  const script = document.createElement('script')
  script.src = src

  document.body.appendChild(script)
  script.onload = () => {
    const eruda = (window as any).eruda
    eruda.init()
  }
}

export const userRejectedTx = (err: any) => {
  if (err.cause && err.cause.walk) {
    const { code } = err.cause.walk()
    if (
      code === METAMASK_ERRORS.userRejectedRequest.code ||
      code === WALLET_CONNECT_ERRORS.USER_REJECTED.code ||
      code === WALLET_CONNECT_ERRORS.USER_REJECTED_REQUEST.code
    ) {
      return true
    }
  }

  return (
    err.code === WALLET_CONNECT_ERRORS.USER_REJECTED.code ||
    err.code === METAMASK_ERRORS.userRejectedRequest.code ||
    err.code === WALLET_CONNECT_ERRORS.USER_REJECTED_REQUEST.code
  )
}

export const getDAppUrl = () => {
  const { host, pathname, search } = window.location
  const pageUrlWithoutProtocol = encodeURI(host + pathname + search)

  const dappURl = isSafari && !isMobile ? METAMASK_DOWNLOAD_URL : 'dapp://'

  return `${dappURl}${pageUrlWithoutProtocol}`
}
