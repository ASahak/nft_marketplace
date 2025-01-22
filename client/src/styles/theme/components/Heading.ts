import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    underline: {
      position: 'relative',
      _after: {
        content: '""',
        position: 'absolute',
        height: '2px',
        width: '50%',
        maxW: '10rem',
        bgColor: 'blue.250',
        bottom: '-1rem',
        left: 0
      }
    }
  },
  defaultProps: {}
})
