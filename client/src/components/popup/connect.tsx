'use client'

import {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { Box, Button, HStack, Icon, useToast } from '@chakra-ui/react'
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
  const [connectorLoading, setConnectorLoading] = useState<string>('')
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

  const getIcon = useCallback(
    (type: ConnectorsWithTypes): ReactNode => {
      const isLoading = isConnecting || connectorLoading === type
      switch (type) {
        case ConnectorsWithTypes.METAMASK:
          return (
            <Box
              height={isLoading ? '3.6rem' : '4.8rem'}
              width={isLoading ? '3.6rem' : '4.8rem'}
              transition=".1s"
              willChange="width, height"
            >
              <Icon
                as={MetamaskIcon.bind(null, { height: '100%', width: '100%' })}
              />
            </Box>
          )
        case ConnectorsWithTypes.WALLET_CONNECT:
          return (
            <Box
              height={isLoading ? '3.8rem' : '4.8rem'}
              width={isLoading ? '3.8rem' : '4.8rem'}
              transition=".1s"
              willChange="width, height"
            >
              <Icon
                as={WalletConnectIcon.bind(null, {
                  height: '100%',
                  width: '100%'
                })}
              />
            </Box>
          )
        case ConnectorsWithTypes.COINBASE_WALLET:
          return (
            <Box
              height={isLoading ? '2.8rem' : '4.8rem'}
              width={isLoading ? '2.8rem' : '4.8rem'}
              transition=".1s"
              willChange="width, height"
            >
              <Icon
                as={CoinbaseIcon.bind(null, { height: '100%', width: '100%' })}
              />
            </Box>
          )
        default:
          return null
      }
    },
    [connectorLoading, isConnecting]
  )

  const connectHandler = async (c: Connector) => {
    try {
      setConnectorLoading(c.type)
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
    } finally {
      setConnectorLoading('')
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
          position="relative"
        >
          {isConnecting ||
            (connectorLoading === c.type && (
              <Box position="absolute">
                <Spinner
                  w="48px"
                  h="48px"
                  size="4px"
                  color="var(--chakra-colors-blue-300)"
                />
              </Box>
            ))}
          {getIcon(c.type as ConnectorsWithTypes)}
        </Button>
      ))}
    </HStack>
  )
})
