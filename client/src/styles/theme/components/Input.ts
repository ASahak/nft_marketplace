import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit'
  },
  sizes: {
    md: {
      field: {
        h: '4rem'
      }
    }
  },
  variants: {
    'global-search': () => ({
      field: {
        border: '1px solid',
        borderColor: 'gray.500',
        boxShadow: 'none',
        borderRadius: 'xl',
        fontSize: '1.4rem',
        bgColor: 'transparent',
        color: 'white',
        py: '1.2rem',
        px: '1.4rem',
        pl: 0,
        _placeholder: {
          color: 'gray.400'
        },
        _invalid: {
          borderColor: 'red.400'
        },
        _focus: {
          boxShadow: 'none',
          borderColor: 'gray.200'
        }
      }
    }),
    base: ({ colorMode }) => ({
      field: {
        border: '1px solid',
        borderColor: colorMode === 'dark' ? '#25272D' : '#E3E5E8',
        boxShadow: 'none',
        borderRadius: '0.8rem ',
        bgColor: colorMode === 'dark' ? 'gray.700' : 'white',
        color: colorMode === 'dark' ? 'white' : 'black',
        fontSize: '1.4rem',
        py: '1.2rem',
        px: '1.4rem',
        h: '4rem',
        _placeholder: {
          color: 'gray.400'
        },
        _invalid: {
          borderColor: 'red.400'
        },
        _focus: {
          borderColor: 'blue.300'
        }
      }
    })
  },
  defaultProps: {}
})
