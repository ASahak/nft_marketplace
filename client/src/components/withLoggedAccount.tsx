'use client'

import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { NotConnected } from '@/components'
import { Spinner } from '@/components/icons'
import { ConnectingStates } from '@/enums/connectors'

export const WithLoggedAccount = ({ children }: { children: ReactNode }) => {
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

  return connectedUser.isDisconnected ? <NotConnected /> : children
}
