'use client'

import { Box } from '@chakra-ui/react'
import { Spinner } from '@/components/icons'

export const RouteLoading = () => (
  <Box
    position="fixed"
    h="100vh"
    w="100vw"
    top={0}
    left={0}
    zIndex={9999}
    display="flex"
    alignItems="center"
    justifyContent="center"
    backdropFilter="blur(2px)"
  >
    <Spinner
      w="50px"
      h="50px"
      size="4px"
      color="var(--chakra-colors-blue-300)"
    />
  </Box>
)
