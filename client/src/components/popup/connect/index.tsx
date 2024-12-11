import { ReactNode, useCallback } from "react";
import { Button, HStack, Icon } from '@chakra-ui/react'
import { useConnectors } from 'wagmi'
import { ConnectorsWithTypes } from "@/enums/connectors";
import { MetamaskIcon, WalletConnectIcon } from "@/components/icons";

function Connect() {
  const connectors = useConnectors()
  // const { onClose } = usePopup()

  const renderConnectors = () => {
    return []
    // const connectors = [
    //   {
    //     id: 'wallet-connect',
    //     content: () => (
    //       <Button
    //         aria-label="Connect with wallet connect"
    //         key="wallet-connect"
    //         w="full"
    //         justifyContent={
    //           status === CONNECTION_STATE.INITIALIZING ? 'center' : 'flex-start'
    //         }
    //         isLoading={status === CONNECTION_STATE.INITIALIZING}
    //         spinner={
    //           <Spinner
    //             w="22px"
    //             h="22px"
    //             size="4px"
    //             color="var(--chakra-colors-blue-300)"
    //           />
    //         }
    //         variant="connect"
    //         display="flex"
    //         alignItems="center"
    //         fontSize="1.6rem"
    //         onClick={() => {
    //           handleConnect()
    //         }}
    //         textAlign="center"
    //       >
    //         <Text as="span" display="flex" alignItems="center" gap="inherit">
    //           <Image
    //             boxSize="4rem"
    //             alt="wallet connect"
    //             src={connectWalletSquare}
    //           />
    //           <Text fontSize="1.4rem" fontWeight={400}>
    //             Wallet Connect
    //           </Text>
    //         </Text>
    //       </Button>
    //     )
    //   },
    //   {
    //     id: 'metamask',
    //     content: () => (
    //       <Button
    //         key="metamask"
    //         w="full"
    //         variant="connect"
    //         display="flex"
    //         alignItems="center"
    //         fontSize="1.6rem"
    //         aria-label="Connect with metamask"
    //         onClick={() => {
    //           handleConnect(true)
    //         }}
    //       >
    //         <Image boxSize="4rem" alt="metamask connect" src={metamaskIcon} />
    //         <Text fontSize="1.4rem" fontWeight={400}>
    //           Metamask
    //         </Text>
    //       </Button>
    //     )
    //   },
    //   {
    //     id: 'fastex-wallet',
    //     content: () => (
    //       <Button
    //         key="fastex-wallet"
    //         aria-label="Connect with wallet fastex wallet"
    //         w="full"
    //         variant="connect"
    //         display={{ base: 'flex', md: 'none' }}
    //         alignItems="center"
    //         fontSize="1.6rem"
    //         onClick={goToFastexWallet}
    //         textAlign="center"
    //       >
    //         <Image
    //           boxSize="4rem"
    //           alt="fastex wallet"
    //           src={fastexWalletIconSrc}
    //         />
    //         <Text fontSize="1.4rem" fontWeight={400}>
    //           Fastex Wallet
    //         </Text>
    //       </Button>
    //     )
    //   }
    // ]
    //
    // return walletConnector
    //   .getAvailableConnectors<{
    //     id: string
    //     content: () => ReactNode
    //   }>(connectors)
    //   .map((c) => c.content())
  }

  const getIcon = useCallback((type: ConnectorsWithTypes): ReactNode => {
    switch (type) {
      case ConnectorsWithTypes.METAMASK:
        return <Icon w="4.8rem" h="4.8rem" as={MetamaskIcon}/>
      case ConnectorsWithTypes.WALLET_CONNECT:
        return <Icon w="4.8rem" h="4.8rem" as={WalletConnectIcon}/>
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
      {renderConnectors()}
      {connectors.map(c => <Button
        key={c.type}
        aria-label={`Connect with wallet ${c.name}`}
        w="full"
        variant="connect"
        alignItems="center"
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
