import colors from './colors.js'
export default {
  shadows: {
    md: '0 0.9rem 3.4rem -0.4rem rgba(0, 0, 0, 0.05)'
  },
  colors,
  zIndices: {
    modal: 10000,
    toast: 10001
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    disableTransitionOnChange: false
  }
}
