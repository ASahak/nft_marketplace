import RouterLink from 'next/link'
import { Box, Heading, Text, Link, VStack } from '@chakra-ui/react'
import ROUTE_PATHS from '@/utils/constants/routes'

const NotFound = () => {
  return (
    <VStack h="100vh" alignItems="center" justifyContent="center">
      <Box textAlign="center" pt={10}>
        <Heading>404 - Page Not Found</Heading>
        <Text my={4} fontSize="1.6rem" textAlign="center">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Link
          as={RouterLink}
          href={ROUTE_PATHS.DASHBOARD}
          fontSize="1.6rem"
          border="1px solid"
          borderColor="gray.500"
          borderRadius="0.4rem"
          px={6}
          py={4}
          mt={6}
          display="inline-block"
        >
          Go to Home
        </Link>
      </Box>
    </VStack>
  )
}

export default NotFound
