import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
    textAlign: 'left'
  },
  sizes: {},
  variants: {
    infoTitle: ({ colorMode }) => ({
      fontSize: '1.4rem',
      fontWeight: '400',
      color: colorMode === 'dark' ? 'gray.300' : 'gray.450'
    })
  },
  defaultProps: {}
})
