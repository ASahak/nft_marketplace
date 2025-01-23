import { memo } from 'react'
import { Box } from '@chakra-ui/react'
import { Container } from '@/components'

export const NotConnected = memo(() => {
  return (
    <Container py={10}>
      <Box
        p={10}
        border="1px solid"
        borderColor="gray.550"
        borderRadius=".8rem"
      >
        Not Connected User
      </Box>
    </Container>
  )
})
