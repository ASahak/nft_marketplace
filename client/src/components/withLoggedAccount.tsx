'use client'

import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { NotConnected } from '@/components'
import { useAccount } from 'wagmi'
import { Spinner } from '@/components/icons'
import { ConnectingStates } from '@/enums/connect'

export const WithLoggedAccount = ({ children }: { children: ReactNode }) => {
  const connectedUser = useAccount()

  if (connectedUser.status === ConnectingStates.RECONNECTING)
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

  return connectedUser.isConnected ? children : <NotConnected />
}
