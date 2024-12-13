import { Link as RouterLink } from 'react-router-dom'
import { Box, Heading, Text, Link } from '@chakra-ui/react'
import ROUTE_PATHS from '@/utils/constants/routes'

const NotFound = () => {
  return (
    <Box textAlign="center" pt={10}>
      <Heading>404 - Page Not Found</Heading>
      <Text my={4} fontSize="1.6rem" textAlign="center">
        Sorry, the page you are looking for does not exist.
      </Text>
      <Link as={RouterLink} to={ROUTE_PATHS.DASHBOARD} fontSize="1.6rem">
        Go to Home
      </Link>
    </Box>
  )
}

export default NotFound
