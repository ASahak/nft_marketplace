import { defineStyleConfig } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')
const $arrowShadowColor = cssVar('popper-arrow-shadow-color')
export default defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    base: ({ colorMode }) => ({
      background: colorMode === 'dark' ? 'gray.10' : 'gray.800',
      border: '1px solid',
      color: colorMode === 'dark' ? 'black' : 'white',
      px: 4,
      py: 2,
      wordBreak: 'break-word',
      rounded: 8,
      fontSize: '1.4rem',
      fontWeight: '600',
      borderColor: colorMode === 'dark' ? 'gray.10' : 'gray.800',
      [$arrowBg.variable]:
        colorMode === 'dark'
          ? 'var(--chakra-colors-gray-10)'
          : 'var(--chakra-colors-gray-800)',
      [$arrowShadowColor.variable]:
        colorMode === 'dark'
          ? 'var(--chakra-colors-gray-10)'
          : 'var(--chakra-colors-gray-800)'
    }),
    'health-tooltip': ({ colorMode }) => ({
      background: 'gray.900',
      border: '1px solid',
      color: 'white',
      py: '.6rem',
      px: '1.2rem',
      rounded: '.4rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      borderColor: colorMode === 'dark' ? 'gray.400' : 'gray.100',
      [$arrowBg.variable]: 'var(--chakra-colors-gray-900)',
      [$arrowShadowColor.variable]:
        colorMode === 'dark'
          ? 'var(--chakra-colors-gray-400)'
          : 'var(--chakra-colors-gray-100)'
    }),
    'health-tooltip-danger': ({ colorMode }) => ({
      background: colorMode === 'dark' ? 'gray.900' : 'red.110',
      border: '1px solid',
      color: colorMode === 'dark' ? 'red.300' : 'black',
      py: '.6rem',
      px: '1.2rem',
      rounded: '.4rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      borderColor: 'red.700',
      [$arrowBg.variable]:
        colorMode === 'dark'
          ? 'var(--chakra-colors-gray-900)'
          : 'var(--chakra-colors-red-110)',
      [$arrowShadowColor.variable]: 'var(--chakra-colors-red-700)'
    }),
    'health-tooltip-green': ({ colorMode }) => ({
      background: colorMode === 'dark' ? 'gray.900' : 'green.120',
      border: '1px solid',
      color: colorMode === 'dark' ? 'green.200' : 'black',
      py: '.6rem',
      px: '1.2rem',
      rounded: '.4rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      borderColor: 'green.200',
      [$arrowBg.variable]:
        colorMode === 'dark'
          ? 'var(--chakra-colors-gray-900)'
          : 'var(--chakra-colors-green-120)',
      [$arrowShadowColor.variable]: 'var(--chakra-colors-green-200)'
    })
  },
  defaultProps: {}
})
