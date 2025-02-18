import { extendTheme } from '@chakra-ui/react'
import styles from '@/styles/globalStyles'
import foundations from './foundations'
import * as components from './components'

export const breakpoints = {
  xxs: '350px',
  xs: '481px',
  sm: '577px',
  md: '768px',
  lg: '962px',
  xl: '1200px',
  '2xl': '1352px',
  '4xl': '2500px'
}

const overrides = {
  ...foundations,
  components: { ...components },
  styles,
  breakpoints
}

export default extendTheme(overrides)
