import { memo } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export const Preview = memo(() => {
  return (
    <Box>
      <Heading fontSize="3rem">Create an NFT</Heading>
      <Text fontSize="1.6rem" mt={4}>
        *Once your item is minted you will not be able to change any of its
        information.
      </Text>
    </Box>
  )
})
