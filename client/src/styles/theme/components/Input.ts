import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit'
  },
  sizes: {
    md: {
      field: {
        h: '4rem',
        fontSize: '1.4rem'
      }
    },
    lg: {
      field: {
        h: '5rem',
        fontSize: '1.6rem'
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
    base: {
      field: {
        border: '1px solid',
        borderColor: 'gray.600',
        boxShadow: 'none',
        borderRadius: '0.8rem ',
        bgColor: 'gray.700',
        color: 'white',
        py: '1.2rem',
        px: '1.4rem',
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
    }
  },
  defaultProps: {
    size: 'md'
  }
})
