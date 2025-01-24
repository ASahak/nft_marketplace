'use client'

import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { Container, NotConnected } from '@/components'
import { Spinner } from '@/components/icons'
import { ConnectingStates } from '@/enums/connectors'
import { Preview } from '@/containers/create/preview'

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
          w="30px"
          h="30px"
          size="4px"
          color="var(--chakra-colors-blue-300)"
        />
      </Flex>
    )

  return connectedUser.isDisconnected ? (
    <NotConnected />
  ) : (
    <Container py={10}>
      <Grid
        gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={6}
        h="full"
      >
        <GridItem>
          <Preview />
        </GridItem>
        <GridItem>Form</GridItem>
      </Grid>
    </Container>
  )
}
