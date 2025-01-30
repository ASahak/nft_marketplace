'use client'

import React, { memo } from 'react'
import {
  Flex,
  Heading,
  VStack,
  Text,
  Button,
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { Hero as HeroBG } from '@/components/icons'
import { Container } from '@/components'
import ROUTE_PATHS from '@/utils/constants/routes'

export const Hero = memo(() => {
  const router = useRouter()

  const goToCreate = () => {
    router.push(ROUTE_PATHS.CREATE)
  }

  return (
    <Container zIndex={1}>
      <Grid
        py={{ base: '6rem', lg: '10rem' }}
        w="full"
        position="relative"
        gridTemplateColumns={{ base: '1fr', lg: '1fr .9fr', xl: '1fr 1fr' }}
        gap="2rem"
        overflow="hidden"
        alignItems="center"
      >
        <GridItem overflow="hidden">
          <VStack spacing={10} alignItems="start" w="full">
            <VStack w="full" alignItems="start" spacing={2}>
              <Text fontSize="1.6rem">NFT MARKETPLACE</Text>
              <Heading as="h1" fontSize="5.4rem" fontWeight={700}>
                Discover extraordinary NFTs in the digital world of creativity.
              </Heading>
            </VStack>
            <Text fontSize="2rem">
              Marketplace For Monster Character Collections Non Fungible Token
              NFTs
            </Text>
            <Flex gap={6}>
              <Button variant="outline" w="14rem" onClick={goToCreate}>
                Create
              </Button>
              <Button variant="primary" w="14rem">
                Explore
              </Button>
            </Flex>
          </VStack>
        </GridItem>
        <GridItem overflow="hidden">
          <Box display={{ base: 'none', lg: 'block' }}>
            <HeroBG />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
})
