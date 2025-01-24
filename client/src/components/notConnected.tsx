import { memo } from 'react'
import { Box, Button, Heading, Text, Icon } from '@chakra-ui/react'
import { FaWallet } from 'react-icons/fa6'
import { Container } from '@/components'
import { usePopup } from '@/providers/popupProvider'
import { POPUP_TITLES, POPUP_TYPE } from '@/utils/constants/popup'

export const NotConnected = memo(() => {
  const { openPopup } = usePopup()

  const connectWallet = () => {
    openPopup(POPUP_TYPE.CONNECT_WALLET, POPUP_TITLES.CONNECT_WALLET)
  }

  return (
    <Container py={10}>
      <Box
        p={10}
        py="6rem"
        border="1px solid"
        borderColor="gray.600"
        bgColor="gray.700"
        borderRadius=".8rem"
      >
        <Icon
          as={FaWallet}
          fontSize="5rem"
          mx="auto"
          color="blue.250"
          display="block"
          mb={10}
        />
        <Heading as="h1" textAlign="center">
          Connect Your Wallet
        </Heading>
        <Text fontSize="1.5rem" textAlign="center" color="gray.200" my={4}>
          Stay connected to view your collections, make transactions, and enjoy
          the full experience of our marketplace.
        </Text>
        <Button
          variant="primary"
          mx="auto"
          mt={10}
          size="lg"
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      </Box>
    </Container>
  )
})
