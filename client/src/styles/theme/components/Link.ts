import { defineStyleConfig } from '@chakra-ui/react'

export default defineStyleConfig({
  baseStyle: {
    textDecoration: 'none',
    _hover: {
      textDecoration: 'none'
    }
  },
  sizes: {},
  variants: {
    'nav-item-mobile': ({ colorMode }) => ({
      fontSize: 'inherit',
      w: '100%',
      p: '1.6rem',
      display: 'flex',
      alignItems: 'center',
      color: colorMode === 'dark' ? 'white' : 'black',
      _active: {
        boxShadow: 'none',
        bgColor: 'transparent !important'
      },
      _activeLink: {
        fontWeight: 700,
        color: 'blue.300',
        bgColor: colorMode === 'dark' ? '#202A3E' : '#E6EEFE',
        borderRadius: '1rem',
        fontSize: '1.8rem'
      }
    }),
    footerMenuItem: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '1.2rem',
      fontWeight: '500',
      color: colorMode === 'dark' ? 'gray.400' : 'gray.450',
      _active: {
        boxShadow: 'none',
        bgColor: 'transparent !important'
      },
      _activeLink: {
        color: colorMode === 'dark' ? 'white' : 'gray.900'
      }
    }),
    button: ({ colorMode }) => ({
      fontFamily: 'Raleway, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.8rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      color: colorMode === 'dark' ? 'white' : 'gray.900',
      bg: colorMode === 'dark' ? 'gray.600' : 'gray.50',
      rounded: '0.8rem',
      p: '0.8rem 1.6rem'
    }),
    link: ({ colorMode }) => ({
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
      rounded: '0.5rem',
      gap: '0.1rem',
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
    })
  },
  defaultProps: {}
})
