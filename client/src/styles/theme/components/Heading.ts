import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    sectionTitle: ({ colorMode }) => ({
      fontSize: '1.25rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '700',
      color: colorMode === 'dark' ? 'gray.10' : 'gray.900'
    }),
    'title-details-page': ({ colorMode }) => ({
      fontSize: '1.8rem',
      fontWeight: '500',
      color: colorMode === 'dark' ? 'white' : 'gray.800'
    }),
    'block-title-dashboard': ({ colorMode }) => ({
      marginBottom: '2rem',
      fontSize: '1.6rem',
      fontWeight: '500',
      lineHeight: '2rem',
      textTransform: 'uppercase',
      color: colorMode === 'dark' ? 'white' : 'gray.800'
    })
  },
  defaultProps: {}
})
