'use client'

import { Box } from '@chakra-ui/react'
import { useAccount } from 'wagmi'
import { NotConnected } from '@/components'

export default function Create() {
  const connectedUser = useAccount()

  return connectedUser.isDisconnected ? <NotConnected /> : <Box>Create</Box>
}
