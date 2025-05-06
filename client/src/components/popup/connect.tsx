'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { Box, Button, HStack, useToast } from '@chakra-ui/react'
import { Connector, useAccount } from 'wagmi'
import NextImage from 'next/image'
import { Spinner } from '@/components/icons'
import { usePopup } from '@/providers/popupProvider'
import { useWallets } from '@/hooks'
import {
  getAvailableConnectors,
  isWalletConnectConnector
} from '@/utils/helpers/connect'
import { useWalletConnect } from '@/providers/walletConnectProvider'
import { WALLET_CONNECT_ERRORS } from '@/utils/errors/global'

export const Connect = memo(() => {
  const wallets = useWallets()
  const { isConnected, isConnecting, isDisconnected } = useAccount()
  const { connectWithWalletConnect, connectWithEVMWallet } = useWalletConnect()
  const [connectorLoading, setConnectorLoading] = useState<string>('')
  const { onClose, isOpen } = usePopup()
  const disconnectedState = useRef(isDisconnected)
  const toast = useToast()

  const connectHandler = async (connector: Connector) => {
    try {
      setConnectorLoading(connector.id)

      // WalletConnect
      if (isWalletConnectConnector(connector.id)) {
        await connectWithWalletConnect(connector, (isOpen: boolean) => {
          if (isOpen) {
            onClose()
          }
        })
        return
      }

      await connectWithEVMWallet(connector)
      onClose()
    } catch (err: any) {
      console.log(err)
      setConnectorLoading('')
      if (err.code === WALLET_CONNECT_ERRORS.USER_REJECTED_REQUEST.code) {
        toast({
          title: WALLET_CONNECT_ERRORS.USER_REJECTED_REQUEST.message,
          status: 'warning'
        })
      }
    }
  }

  useEffect(() => {
    if (isConnected && isOpen && disconnectedState.current) {
      onClose()
    }
  }, [isConnected, isOpen])

  return (
    <HStack
      spacing="1.6rem"
      mt={4}
      w={{ base: '30rem', md: '30rem', lg: '35.2rem' }}
    >
      {getAvailableConnectors(wallets).map((wallet) => (
        <Button
          key={wallet.id}
          title={wallet.name}
          aria-label={`Connect with wallet ${wallet.name}`}
          w="full"
          variant="connect"
          justifyContent="center"
          alignItems="center"
          py={8}
          h="9rem"
          fontSize="1.6rem"
          onClick={() => connectHandler(wallet)}
          textAlign="center"
          position="relative"
        >
          {connectorLoading === wallet.id && isConnecting ? (
            <Box position="absolute">
              <Spinner
                w="48px"
                h="48px"
                size="4px"
                color="var(--chakra-colors-blue-300)"
              />
            </Box>
          ) : null}
          {/*<Box*/}
          {/*  height={isLoading ? '3.6rem' : '4.8rem'}*/}
          {/*  width={isLoading ? '3.6rem' : '4.8rem'}*/}
          {/*  transition=".1s"*/}
          {/*  willChange="width, height"*/}
          {/*>*/}
          {/*  <Icon*/}
          {/*    as={MetamaskIcon.bind(null, { height: '100%', width: '100%' })}*/}
          {/*  />*/}
          {/*</Box>*/}
          <Box
            height="4rem"
            width="4rem"
            transition=".1s"
            willChange="width, height"
            position="relative"
          >
            <NextImage
              alt={`Connect wallet icon: ${wallet.name}`}
              fill
              style={{ objectFit: 'cover' }}
              src={wallet.icon}
            />
          </Box>
        </Button>
      ))}
    </HStack>
  )
})
