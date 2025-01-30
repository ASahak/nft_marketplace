'use client'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { Container, NotConnected } from '@/components'
import { Spinner } from '@/components/icons'
import { ConnectingStates } from '@/enums/connectors'
import { Preview } from './preview'
import { Form } from './form'

export const Create = () => {
  const connectedUser = useAccount()

  if (
    connectedUser.status === ConnectingStates.RECONNECTING ||
    connectedUser.status === ConnectingStates.CONNECTING
  )
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="full"
      >
        <Spinner
          w="4rem"
          h="4rem"
          size="4px"
          color="var(--chakra-colors-blue-300)"
        />
      </Flex>
    )

  return connectedUser.isDisconnected ? (
    <NotConnected />
  ) : (
    <Container py={10}>
      <VStack spacing={4} w="full" h="full">
        <Box w="full">
          <Heading fontSize="3rem">Create an NFT</Heading>
          <Text fontSize="1.6rem" mt={4}>
            *Once your item is minted you will not be able to change any of its
            information.
          </Text>
        </Box>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={20}
          h="full"
          w="full"
        >
          <GridItem>
            <Preview />
          </GridItem>

          <GridItem>
            <Form />
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  )
}
