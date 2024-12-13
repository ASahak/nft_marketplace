import { ReactNode, useCallback, useEffect, useRef } from 'react'
import { Button, HStack, Icon } from '@chakra-ui/react'
import { Connector, useAccount, useConnectors } from 'wagmi'
import { ConnectorsWithTypes } from '@/enums/connectors'
import {
  MetamaskIcon,
  WalletConnectIcon,
  CoinbaseIcon,
  Spinner
} from '@/components/icons'
import { usePopup } from '@/providers/popupProvider'

function Connect() {
  const { isConnected, isDisconnected, isConnecting } = useAccount()
  const connectors = useConnectors()
  const { onClose } = usePopup()
  const disconnectedState = useRef(isDisconnected)

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
    if (c.type === ConnectorsWithTypes.METAMASK && isConnected) {
      const provider = await c.getProvider()
      await (provider as unknown as any).request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }]
      })
      return
    }

    c.connect()
  }

  useEffect(() => {
    if (isConnected && disconnectedState.current) {
      onClose()
    }
  }, [isConnected])

  return (
    <HStack spacing="1.6rem" mt={4} w={{ base: '25rem', md: '35.2rem' }}>
      {connectors.map((c) => (
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
}

export default Connect
