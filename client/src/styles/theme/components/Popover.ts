import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    base: ({ colorMode }) => ({
      content: {
        boxShadow: '0px 4px 16px 0px #070F1A29',
        borderRadius: '1.2rem',
        p: '1.6rem',
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        touchAction: 'none',
        width: '100%',
        backgroundColor: colorMode === 'dark' ? 'gray.560' : 'white'
      }
    }),
    'nav-sub-menu': {
      content: {
        boxShadow: '1px 6px 6px 0px #070F1A29',
        borderRadius: '0.8rem',
        py: '0.4rem',
        px: '0.8rem',
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        touchAction: 'none',
        width: '100%',
        backgroundColor: 'gray.560'
      }
    }
  },
  defaultProps: {}
})
