import { Button, Flex, Text, Icon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineWarning } from "react-icons/ai";
import ROUTE_PATHS from '@/utils/constants/routes'

export const RootErrorBoundary = () => {
  const navigate = useNavigate()

  const goToDashboard = () => {
    navigate(ROUTE_PATHS.DASHBOARD)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p="1.2rem"
    >
      <Icon
        as={AiOutlineWarning}
        fontSize="5.2rem"
        color="orange.200"
      />
      <Text
        mt="1.6rem"
        fontSize="1.6rem"
        lineHeight="1.9rem"
        fontWeight="600"
        color="gray.100"
      >
        Something went wrong!
      </Text>
      <Text
        as="span"
        fontSize="1.4rem"
        lineHeight="2.1rem"
        fontWeight={600}
        color="gray.300"
        padding="1.2rem 0"
        textAlign="center"
      >
        There was a problem processing this request. <br />
        Please try again later or go back to the main page.
      </Text>
      <Button
        variant="light"
        onClick={goToDashboard}
        aria-label="Go to Dashboard"
      >
        Go to Dashboard
      </Button>
    </Flex>
  )
}
