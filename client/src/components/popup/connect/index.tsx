import { ReactNode, useCallback } from "react";
import { Button, HStack, Icon } from '@chakra-ui/react'
import { useConnectors } from 'wagmi'
import { ConnectorsWithTypes } from "@/enums/connectors";
import { MetamaskIcon, WalletConnectIcon, CoinbaseIcon } from "@/components/icons";

function Connect() {
  const connectors = useConnectors()
  // const { onClose } = usePopup()

  const getIcon = useCallback((type: ConnectorsWithTypes): ReactNode => {
    switch (type) {
      case ConnectorsWithTypes.METAMASK:
        return <Icon w="4.8rem" h="4.8rem" as={MetamaskIcon}/>
      case ConnectorsWithTypes.WALLET_CONNECT:
        return <Icon w="4.8rem" h="4.8rem" as={WalletConnectIcon}/>
      case ConnectorsWithTypes.COINBASE_WALLET:
        return <Icon w="4.8rem" h="4.8rem" as={CoinbaseIcon}/>
      default:
        return null
    }
  }, [])

  // const handleConnect = (isMetamask?: boolean) => {
  //   if (isMetamask) {
  //     connectWithMetamask(fromSwitch)
  //   } else {
  //     connectWithWalletConnect()
  //   }
  // }
  // useDidUpdate(() => {
  //   if (status === CONNECTION_STATE.CONNECTING) {
  //     onClose()
  //   }
  // }, [status])

  return (
    <HStack spacing="1.6rem" mt={4} w={{ base: '25rem', md: '35.2rem' }}>
      {connectors.map(c => <Button
        key={c.type}
        title={c.name}
        aria-label={`Connect with wallet ${c.name}`}
        w="full"
        variant="connect"
        justifyContent="center"
        alignItems="center"
        py={8}
        fontSize="1.6rem"
        onClick={() => c.connect()}
        textAlign="center"
      >
        {getIcon(c.type as ConnectorsWithTypes)}
      </Button>)}
    </HStack>
  )
}

export default Connect
