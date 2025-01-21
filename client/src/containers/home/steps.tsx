import React, { memo } from 'react'
import {
  VStack,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image
} from '@chakra-ui/react'
import { Container } from '@/components'

export const Steps = memo(() => {
  return (
    <Box bgColor="gray.700">
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
              <Image w="5rem" src="/images/wallet.svg" alt="Set up wallet" />
              <Heading as="h3">Set Up Your Wallet</Heading>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                The First Step to Owning NFTs: Set Up Your Wallet for a Smooth
                Start
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Image w="5rem" src="/images/cards.svg" alt="Create collection" />
              <Heading as="h3">Create Your Collection</Heading>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                Design a Collection That Tells Your Story in the NFT World
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Image w="5rem" src="/images/asset.svg" alt="Add nfts" />
              <Heading as="h3">Add Your NFTs</Heading>
              <Text color="gray.300" fontSize="1.5rem" textAlign="center">
                Bring Your Digital Assets to Life by Adding Your NFTs
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={6} w="full">
              <Image w="5rem" src="/images/sale.svg" alt="Sale" />
              <Heading as="h3">List Them For Sale</Heading>
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
