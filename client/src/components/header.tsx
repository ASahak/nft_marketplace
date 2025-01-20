'use client'

import { memo } from 'react'
import RouterLink from 'next/link'
import { Box, Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import { Container, ConnectButton, Search, Navbar } from '@/components'
import { Logo } from '@/components/icons'
import ROUTE_PATHS from '@/utils/constants/routes'

export const HeaderPY = { base: '1.2rem', md: '1.6rem' }
export const Header = memo(() => {
  const isMobileLG = useBreakpointValue(
    { base: true, lg: false },
    { ssr: true }
  )

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
        minH={'4rem'}
        as={Flex}
        align={'center'}
        justifyContent="space-between"
      >
        <>
          <Flex gap={20}>
            <Link as={RouterLink} href={ROUTE_PATHS.DASHBOARD}>
              <Logo />
            </Link>
            {!isMobileLG && !isMobile ? <Navbar.Desktop /> : null}
          </Flex>
          <Flex gap={4}>
            <Search />
            <ConnectButton
              borderRadius="0.8rem"
              p={{ base: '1.2rem', md: '1.2rem 1.6rem ' }}
            />
            {isMobile || isMobileLG ? <Navbar.Mobile /> : null}
          </Flex>
        </>
      </Container>
    </Box>
  )
})
