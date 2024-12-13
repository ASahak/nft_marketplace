export const trimString = (
  str: string,
  startCount: number = 5,
  endCount: number = 4
) => {
  const start = str.slice(0, startCount)
  const end = str.slice(str.length - endCount, str.length)
  return `${start}...${end}`
}
