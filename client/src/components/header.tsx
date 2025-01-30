'use client'

import { memo } from 'react'
import RouterLink from 'next/link'
import { Box, Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import dynamic from 'next/dynamic'
import Skeleton from 'react-skeleton-builder'
import { Container, ConnectButton, Search } from '@/components'
import { Logo } from '@/components/icons'
import ROUTE_PATHS from '@/utils/constants/routes'
const NavbarDesktop = dynamic(
  () => import('@/components/navbar').then((r) => r.NavbarDesktop),
  {
    loading: () => null
  }
)
const NavbarMobile = dynamic(
  () => import('@/components/navbar').then((r) => r.NavbarMobile),
  {
    loading: () => (
      <Skeleton
        styles={{ width: '4rem', height: '4rem' }}
        grid={{ children: [{ skeletons: [{ r: '.8rem' }] }] }}
      />
    )
  }
)

export const HeaderPY = { base: '1.2rem', md: '1.6rem' }
export const Header = memo(() => {
  const isMobileLG = useBreakpointValue(
    { base: true, lg: false },
    { ssr: true }
  )
  const isMobileMD = useBreakpointValue(
    { base: true, md: false },
    { ssr: true }
  )

  return (
    <Box
      zIndex={5000}
      position="sticky"
      top={0}
      as="header"
      w="full"
      bgColor="#1e2024e0"
      borderBottom={1}
      borderColor="gray.600"
      borderStyle={'solid'}
      backdropFilter="blur(5px)"
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
            <Link
              as={RouterLink}
              href={ROUTE_PATHS.DASHBOARD}
              aria-label="Logo"
            >
              <Logo mini={isMobile || isMobileMD} />
            </Link>
            {!isMobileLG && !isMobile ? <NavbarDesktop /> : null}
          </Flex>
          <Flex gap={4}>
            <Search />
            <ConnectButton
              borderRadius="0.8rem"
              p={{ base: '1.2rem', md: '1.2rem 1.6rem ' }}
            />
            {isMobile || isMobileLG ? <NavbarMobile /> : null}
          </Flex>
        </>
      </Container>
    </Box>
  )
})
