import BigNumber from 'bignumber.js'

export const formatNumberWithPrecision = (value: number | string): string => {
  const res = new BigNumber(value)

  return res.toFormat()
}

export const toBig = (
  value: string | number | BigNumber,
  handleEmptyValue?: boolean
): BigNumber => {
  if (
    handleEmptyValue &&
    (value === '' || (value instanceof BigNumber && value.toString() === ''))
  ) {
    return new BigNumber(0)
  }

  return new BigNumber(value)
}
