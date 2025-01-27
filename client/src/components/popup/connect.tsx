'use client'

import { memo, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react'
import { Button, HStack, Icon, useToast } from '@chakra-ui/react'
import { Connector, useAccount, useConnectors } from 'wagmi'
import { ConnectorsWithTypes } from '@/enums/connectors'
import {
  MetamaskIcon,
  WalletConnectIcon,
  CoinbaseIcon,
  Spinner
} from '@/components/icons'
import { usePopup } from '@/providers/popupProvider'
import WalletConnectErrors from '@/utils/errors/walletConnect'

export const Connect = memo(() => {
  const { isConnected, isDisconnected, isConnecting } = useAccount()
  const connectors = useConnectors()
  const { onClose } = usePopup()
  const disconnectedState = useRef(isDisconnected)
  const toast = useToast()

  const filteredConnectors = useMemo(() => {
    const set = new Set()
    return connectors.filter((item: Connector) => {
      if (set.has(item.type)) {
        return false
      }
      set.add(item.type)
      return true
    })
  }, [connectors])

  const getIcon = useCallback((type: ConnectorsWithTypes): ReactNode => {
    switch (type) {
      case ConnectorsWithTypes.METAMASK:
        return <Icon w="4.8rem" h="4.8rem" as={MetamaskIcon} />
      case ConnectorsWithTypes.WALLET_CONNECT:
        return <Icon w="4.8rem" h="4.8rem" as={WalletConnectIcon} />
      case ConnectorsWithTypes.COINBASE_WALLET:
        return <Icon w="4.8rem" h="4.8rem" as={CoinbaseIcon} />
      default:
        return null
    }
  }, [])

  const connectHandler = async (c: Connector) => {
    try {
      if (c.type === ConnectorsWithTypes.METAMASK && isConnected) {
        const provider = await c.getProvider()
        await (provider as unknown as any).request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        })
        return
      }

      await c.connect()
    } catch (err: any) {
      console.log(err)
      if (err.code === WalletConnectErrors.USER_REJECTED_REQUEST.code) {
        toast({
          title: WalletConnectErrors.USER_REJECTED_REQUEST.message,
          status: 'warning'
        })
      }
    }
  }

  useEffect(() => {
    if (isConnected && disconnectedState.current) {
      onClose()
    }
  }, [isConnected])

  return (
    <HStack spacing="1.6rem" mt={4} w={{ base: '25rem', md: '35.2rem' }}>
      {filteredConnectors.map((c) => (
        <Button
          key={c.type}
          title={c.name}
          aria-label={`Connect with wallet ${c.name}`}
          w="full"
          variant="connect"
          justifyContent="center"
          alignItems="center"
          py={8}
          h="9rem"
          fontSize="1.6rem"
          onClick={() => connectHandler(c)}
          textAlign="center"
        >
          {isConnecting ? (
            <Spinner
              w="30px"
              h="30px"
              size="4px"
              color="var(--chakra-colors-blue-300)"
            />
          ) : (
            getIcon(c.type as ConnectorsWithTypes)
          )}
        </Button>
      ))}
    </HStack>
  )
})
