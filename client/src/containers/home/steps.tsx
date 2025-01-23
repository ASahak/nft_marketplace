'use client'

import React, { memo } from 'react'
import { VStack, Box, Grid, GridItem, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import { Container } from '@/components'

export const Steps = memo(() => {
  return (
    <Box bgColor="gray.700" w="full">
      <Container zIndex={1}>
        <Grid
          py="6rem"
          w="full"
          position="relative"
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)'
          }}
          gap="3rem"
        >
          <GridItem>
            <VStack spacing={6} w="full">
              <Box position="relative" w="5rem" h="5rem" overflow="hidden">
                <NextImage
                  src="/images/wallet.svg"
                  alt="Set up wallet"
                  fill
                  sizes="50px"
                  priority
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Text fontSize="2.25rem" fontWeight={600}>
                Set Up Your Wallet
              </Text>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                The First Step to Owning NFTs: Set Up Your Wallet for a Smooth
                Start
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Box position="relative" w="5rem" h="5rem" overflow="hidden">
                <NextImage
                  src="/images/cards.svg"
                  alt="Create collection"
                  fill
                  sizes="50px"
                  priority
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Text fontSize="2.25rem" fontWeight={600}>
                Create Your Collection
              </Text>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                Design a Collection That Tells Your Story in the NFT World
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Box position="relative" w="5rem" h="5rem" overflow="hidden">
                <NextImage
                  src="/images/asset.svg"
                  alt="Add nfts"
                  fill
                  sizes="50px"
                  priority
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Text fontSize="2.25rem" fontWeight={600}>
                Add Your NFTs
              </Text>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                Bring Your Digital Assets to Life by Adding Your NFTs
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Box position="relative" w="5rem" h="5rem" overflow="hidden">
                <NextImage
                  src="/images/sale.svg"
                  alt="Sale"
                  fill
                  sizes="50px"
                  priority
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <Text fontSize="2.25rem" fontWeight={600}>
                List Them For Sale
              </Text>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                Launch Your NFTs into the Marketplace and Watch Them Thrive
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
})
