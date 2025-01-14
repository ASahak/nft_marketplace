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
    'popover-btn': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      color: colorMode === 'dark' ? '#A4AAB7' : '#747D8B',
      bgColor: 'transparent',
      borderColor: colorMode === 'dark' ? '#25272D' : '#E3E5E8',
      border: '1px solid',
      rounded: '0.8rem',
      h: '4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '1.4rem',
      _hover: {
        bgColor: 'transparent',
        borderColor: colorMode === 'dark' ? '#1A60FA' : '#4B82FB'
      },
      _active: {
        bgColor: 'transparent',
        borderColor: colorMode === 'dark' ? '#1A60FA' : '#4B82FB',
        _hover: {
          borderColor: colorMode === 'dark' ? '#1A60FA' : '#4B82FB'
        }
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark'
            ? '1px solid #4B82FB'
            : '1px solid var(--chakra-colors-blue-300)'
      },
      _disabled: {
        opacity: 1,
        borderColor:
          colorMode === 'dark' ? '#373A43 !important' : '#E3E5E8 !important',
        color:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
      },
      _invalid: {
        borderColor: colorMode === 'dark' ? '#DD2C8A' : '#DF4937'
      }
    }),
    'pagination-btn': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      color: colorMode === 'dark' ? '#fff' : '#000',
      bgColor: 'transparent',
      border: 'none',
      h: '4rem',
      w: '4rem',
      rounded: '0.8rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.4rem',
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark'
            ? '1px solid #4B82FB'
            : '1px solid var(--chakra-colors-blue-300)'
      },
      _disabled: {
        opacity: 1,
        color:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
      }
    }),
    primary: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      color: colorMode === 'dark' ? '#F4F4F6' : 'white',
      bgColor: colorMode === 'dark' ? '#4B82FB' : 'blue.300',
      rounded: '0.6rem',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      _hover: {
        bg: colorMode === 'dark' ? '#1A60FA' : 'blue.500'
      },
      _active: {
        bg: colorMode === 'dark' ? '#0441C8' : 'blue.700'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark'
            ? '1px solid #4B82FB'
            : '1px solid var(--chakra-colors-blue-300)'
      },
      _disabled: {
        opacity: 1,
        bg: colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        color:
          colorMode === 'dark' ? '#191B1F !important' : '#E3E5E8 !important'
      }
    }),
    light: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      color: colorMode === 'dark' ? '#4B82FB' : '#2366FB',
      bgColor: colorMode === 'dark' ? '#212B42' : '#DCE7FE',
      h: 'auto',
      rounded: '0.6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '20px',
      border: 'none',
      _hover: {
        bg: colorMode === 'dark' ? '#293552' : '#BFD3FD'
      },
      _active: {
        bg: colorMode === 'dark' ? '#354569' : '#97B8FC'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #2366FB' : '1px solid #4B82FB'
      },
      _disabled: {
        opacity: 1,
        bg: colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        color:
          colorMode === 'dark' ? '#191B1F !important' : '#E3E5E8 !important'
      }
    }),
    outline: ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: '1px solid',
      borderColor: colorMode === 'dark' ? '#4B82FB' : '#2366FB',
      color: colorMode === 'dark' ? '#4B82FB' : '#2366FB',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '20px',
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
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        borderColor:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
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
    'primary-magenta': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      color: colorMode === 'dark' ? '#F4F4F6' : 'white',
      bgColor: colorMode === 'dark' ? '#DD2C8A' : '#A61F67',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      _hover: {
        bg: colorMode === 'dark' ? '#ED5AA8' : '#84104E'
      },
      _active: {
        bg: colorMode === 'dark' ? '#F386C0' : '#650639'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #DD2C8A' : '1px solid #A61F67'
      },
      _disabled: {
        opacity: 1,
        bg: colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        color:
          colorMode === 'dark' ? '#191B1F !important' : '#E3E5E8 !important'
      }
    }),
    'light-magenta': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      color: colorMode === 'dark' ? '#DD2C8A' : '#A61F67',
      bgColor: colorMode === 'dark' ? '#381E30' : '#F1DBE7',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      _hover: {
        bg: colorMode === 'dark' ? '#49273F' : '#E8C4D8'
      },
      _active: {
        bg: colorMode === 'dark' ? '#643556' : '#DBA3C2'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #DD2C8A' : '1px solid #A61F67'
      },
      _disabled: {
        opacity: 1,
        bg: colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        color:
          colorMode === 'dark' ? '#191B1F !important' : '#E3E5E8  !important'
      }
    }),
    'outline-magenta': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: '1px solid',
      borderColor: colorMode === 'dark' ? '#DD2C8A' : '#A61F67',
      color: colorMode === 'dark' ? '#DD2C8A' : '#A61F67',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      _hover: {
        bg: colorMode === 'dark' ? '#49273F' : '#E8C4D8'
      },
      _active: {
        bg: colorMode === 'dark' ? '#643556' : '#DBA3C2'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #DD2C8A' : '1px solid #A61F67'
      },
      _disabled: {
        opacity: 1,
        bg: 'transparent !important',
        color:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important',
        borderColor:
          colorMode === 'dark' ? '#373A43 !important' : '#AFB4BC !important'
      }
    }),
    'text-magenta': ({ colorMode }) => ({
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '600',
      border: 'none',
      p: '.2rem .4rem',
      color: colorMode === 'dark' ? '#DD2C8A' : '#A61F67',
      bgColor: 'transparent',
      h: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      _hover: {
        bg: colorMode === 'dark' ? '#49273F' : '#E8C4D8'
      },
      _active: {
        bg: colorMode === 'dark' ? '#643556' : '#DBA3C2'
      },
      _focus: {
        boxShadow: '0px 0px 0px 1px transparent',
        outline:
          colorMode === 'dark' ? '1px solid #DD2C8A' : '1px solid #A61F67'
      },
      _disabled: {
        opacity: 1,
        bg: 'transparent !important',
        color:
          colorMode === 'dark' ? '#373A43  !important' : '#AFB4BC !important'
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
    }),
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
    })
  },
  defaultProps: {}
})
