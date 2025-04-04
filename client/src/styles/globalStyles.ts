import theme from '@/styles/theme'

export default {
  global: (props: any) => ({
    ':root': {
      '--toast-z-index': theme.zIndices.toast
    },
    html: {
      fontSize: '9px',
      [`@media only screen and (min-width: ${props.theme.breakpoints['lg']})`]:
        {
          fontSize: '10px'
        }
    },
    'body *': {
      fontFamily: '"Montserrat", sans-serif'
    },
    body: {
      background: 'gray.800'
    },
    '#chakra-toast-manager-top-right': {
      top: '10rem !important'
    },
    '.w-full': {
      width: '100%'
    },
    '.h-full': {
      height: '100%'
    },
    '.collection-slider': {
      '& .slick-slide > div': {
        padding: '0 1rem'
      },
      '& .slick-list': {
        width: 'calc(100% + 2rem)',
        padding: '0.5rem 0',
        margin: '0 -1rem'
      }
    },
    // Custom scrollbar
    '.increase-height-hover': {
      transition: 'width .1s',
      '&:hover, &:active': {
        width: '.8rem !important'
      }
    },
    '.increase-width-hover': {
      transition: 'height .1s',
      '&:hover, &:active': {
        height: '.8rem !important'
      }
    },
    // _________
    '.sr-only': {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      WebkitClipPath: 'inset(50%) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    },
    '.non-visible-scroll': {
      '@media screen and (hover: hover)': {
        '::-webkit-scrollbar': {
          width: '0px',
          height: '0px'
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent'
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        }
      }
    }
  })
}
