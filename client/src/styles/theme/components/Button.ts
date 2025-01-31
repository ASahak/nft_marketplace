import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: ({ colorMode }) => ({
    outlineOffset: '1px',
    border: '1px solid',
    borderColor: colorMode === 'dark' ? 'gray.800' : 'gray.120',
    backgroundColor: colorMode === 'dark' ? 'gray.900' : 'white',
    fontSize: '1.6rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '600',
    rounded: '0.5rem',
    h: 'auto',
    gap: '0.1rem',
    _hover: {}
  }),
  sizes: {
    sm: {
      fontSize: '1rem',
      p: '.7rem 1rem',
      rounded: '0.4rem'
    },
    md: {
      fontSize: '1.4rem',
      p: '.9rem 1.2rem',
      rounded: '0.6rem'
    },
    lg: {
      fontSize: '1.6rem',
      p: '1.2rem 1.6rem',
      rounded: '0.8rem'
    }
  },
  variants: {
    unstyled: {
      border: 'none',
      bgColor: 'transparent !important',
      h: 'auto',
      minW: 'auto',
      w: 'auto',
      p: 0
    },
    primary: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      color: 'gray.100',
      bgColor: 'blue.250',
      rounded: '0.6rem',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      _hover: {
        bg: 'blue.350'
      },
      _active: {
        bg: 'blue.450'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline: '1px solid var(--chakra-colors-blue-250)'
      },
      _disabled: {
        opacity: 1,
        bg: 'var(--chakra-colors-blue-600) !important',
        color: 'var(--chakra-colors-gray-300) !important'
      }
    },
    outline: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: '1px solid',
      borderColor: 'gray.560',
      color: 'gray.200',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '20px',
      _hover: {
        borderColor: 'gray.500',
        bgColor: 'transparent'
      },
      _active: {
        borderColor: 'blue.400',
        bgColor: 'gray.550'
      },
      _focus: {
        borderColor: 'blue.300',
        boxShadow: '0px 0px 0px 1px transparent'
      },
      _disabled: {
        _hover: {
          borderColor: 'gray.560'
        }
      }
    },
    connect: () => ({
      fontSize: '1.3rem',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      bg: 'gray.600',
      border: 'none',
      rounded: '1.2rem',
      display: 'flex',
      color: 'white',
      justifyContent: 'flex-start',
      h: 'auto',
      p: '1.2rem',
      gap: '1.2rem',
      _hover: {
        bgColor: 'gray.560'
      }
    }),
    text: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: 'none',
      p: '.2rem .4rem',
      color: colorMode === 'dark' ? '#4B82FB' : '#2366FB',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      _hover: {
        bg: colorMode === 'dark' ? '#293552' : '#BFD3FD'
      },
      _active: {
        bg: colorMode === 'dark' ? '#354569' : '#97B8FC'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #4B82FB' : '1px solid #2366FB'
      },
      _disabled: {
        opacity: 1,
        bg: 'transparent !important',
        color:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
      }
    }),
    inverse: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: 'none',
      p: '.2rem .4rem',
      color: colorMode === 'dark' ? '#F4F4F6' : '#09101C',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      _hover: {
        bg: colorMode === 'dark' ? '#25272D' : '#E3E5E8'
      },
      _active: {
        bg: colorMode === 'dark' ? '#373A43' : '#AFB4BC'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #4B82FB' : '1px solid #2366FB'
      },
      _disabled: {
        opacity: 1,
        bg: 'transparent !important',
        color:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
      }
    })
  },
  defaultProps: {}
})
