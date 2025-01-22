import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    fontFamily: 'inherit',
    wordBreak: 'break-all',
    padding: '0'
  },
  sizes: {
    sm: {
      fontSize: '0.8rem',
      padding: '0.2rem 0.6rem',
      height: '2.2rem'
    },
    md: {
      fontSize: '1.2rem',
      height: '2.9rem',
      padding: '0.5rem 0.8rem'
    },
    lg: {
      fontSize: '1.5rem',
      height: '3.5rem',
      padding: '0.8rem 1.4rem'
    }
  },
  variants: {
    'gray-outline-filled': {
      border: '1px solid var(--chakra-colors-gray-550)',
      backgroundColor: 'gray.600',
      color: 'gray.100',
      borderRadius: '0.6rem',
      textTransform: 'capitalize',
      display: 'inline-flex',
      alignItems: 'center',
      py: 0,
      fontSize: '1.4rem',
      fontWeight: 500
    }
  },
  defaultProps: {
    size: 'md'
  }
})
