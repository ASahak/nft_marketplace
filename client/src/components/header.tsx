import { memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link } from '@chakra-ui/react'
import { Container, ConnectButton } from '@/components'
import { Logo } from '@/components/icons'
import ROUTE_PATHS from '@/utils/constants/routes'

export const HeaderPY = { base: '1.2rem', md: '1.6rem' }
export const Header = memo(() => {
  return (
    <Box
      zIndex={5000}
      position="sticky"
      top={0}
      as="header"
      w="full"
      bgColor="gray.700"
      borderBottom={1}
      borderColor="gray.600"
      borderStyle={'solid'}
    >
      <Container
        py={HeaderPY}
        as={Flex}
        minH={'4rem'}
        align={'center'}
        justifyContent="space-between"
      >
        <>
          <Link as={RouterLink} to={ROUTE_PATHS.DASHBOARD}>
            <Logo />
          </Link>
          <ConnectButton
            borderRadius="0.8rem"
            p={{ base: '1.2rem', md: '1.2rem 1.6rem ' }}
          />
        </>
      </Container>
    </Box>
  )
})
