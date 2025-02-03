'use client'

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  RxArrowLeft,
  RxDashboard,
  RxIdCard,
  RxArrowRight
} from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import { Container, WithLoggedAccount } from '@/components'
import ROUTE_PATHS from '@/utils/constants/routes'
import { breakpoints } from '@/styles/theme'

export const Create = () => {
  const router = useRouter()

  const goBack = () => {
    router.push(ROUTE_PATHS.DASHBOARD)
  }

  return (
    <WithLoggedAccount>
      <Box position="relative" w="full" h="full">
        <Container py={10} h="full">
          <Grid
            gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap="5rem"
            h="full"
            w="full"
          >
            <GridItem>
              <VStack spacing={4} w="full" h="full">
                <Flex w="full" alignItems="center" gap={8}>
                  <Button variant="outline" w="4rem" h="4rem" onClick={goBack}>
                    <Icon as={RxArrowLeft} fontSize="1.8rem" />
                  </Button>
                  <Heading fontSize="4rem" fontWeight={500}>
                    Create
                  </Heading>
                </Flex>

                <VStack spacing={12} w="full" h="full" justifyContent="center">
                  <Flex
                    border="1px solid"
                    borderColor="gray.600"
                    rounded="lg"
                    p={10}
                    transition=".2s"
                    bgColor="gray.650"
                    willChange="transform"
                    _hover={{
                      transform: 'scale(1.005)',
                      bgColor: 'gray.700'
                    }}
                    as={NextLink}
                    href={ROUTE_PATHS.CREATE_CONTRACT}
                    alignItems="center"
                    gap={8}
                  >
                    <Box>
                      <Flex alignItems="center" gap={4}>
                        <Icon as={RxDashboard} fontSize="2rem" />
                        <Text fontSize="1.8rem" fontWeight={600}>
                          Collection
                        </Text>
                      </Flex>
                      <Text mt={4} fontSize="1.4rem">
                        A collection is a group of NFTs organized under a common
                        theme or category. This option allows you to create a
                        collection to showcase your digital assets, whether
                        it&#39;s art, music, or other unique items.{' '}
                      </Text>
                    </Box>
                    <Button variant="outline" w="4rem" h="4rem" border="none">
                      <Icon as={RxArrowRight} fontSize="2.5rem" />
                    </Button>
                  </Flex>
                  <Flex
                    border="1px solid"
                    borderColor="gray.600"
                    rounded="lg"
                    p={10}
                    transition=".2s"
                    bgColor="gray.650"
                    willChange="transform"
                    _hover={{
                      transform: 'scale(1.005)',
                      bgColor: 'gray.700'
                    }}
                    as={NextLink}
                    href={ROUTE_PATHS.CREATE_NFT}
                    alignItems="center"
                    gap={8}
                  >
                    <Box>
                      <Flex alignItems="center" gap={4}>
                        <Icon as={RxIdCard} fontSize="2rem" />
                        <Text fontSize="1.8rem" fontWeight={600}>
                          NFT
                        </Text>
                      </Flex>
                      <Text mt={4} fontSize="1.4rem">
                        An NFT represents a unique digital asset, whether
                        it&#39;s a piece of art, a game item, or something else
                        entirely. Create your NFT by defining its properties,
                        uploading artwork, and setting a royalty percentage.
                      </Text>
                    </Box>
                    <Button variant="outline" w="4rem" h="4rem" border="none">
                      <Icon as={RxArrowRight} fontSize="2.5rem" />
                    </Button>
                  </Flex>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem display={{ base: 'none', lg: 'block' }}>
              <Box
                position="absolute"
                left="calc(50% + 2.5rem)"
                w="50%"
                right={0}
                top={0}
                h="full"
              >
                <NextImage
                  fill
                  sizes={`(max-width: ${breakpoints.xl}) 800px, 800px`}
                  priority
                  style={{
                    objectFit: 'cover'
                  }}
                  src="/images/nft.webp"
                  alt="Cover bg"
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </WithLoggedAccount>
  )
}
