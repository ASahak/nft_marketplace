import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit'
  },
  sizes: {
    md: {
      fontSize: '1.4rem'
    },
    lg: {
      fontSize: '1.6rem'
    }
  },
  variants: {
    base: {
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
  },
  defaultProps: {
    size: 'md'
  }
})
