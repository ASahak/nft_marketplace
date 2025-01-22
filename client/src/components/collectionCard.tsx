import { memo } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  VStack
} from '@chakra-ui/react'
import { CollectionType } from '@/types/collection'
import {
  formatNumberWithSuffix,
  replacePathVariables
} from '@/utils/helpers/global'
import ROUTE_PATHS from '@/utils/constants/routes'
import { breakpoints } from '@/styles/theme'

export const CollectionCard = memo(({ data }: { data: CollectionType }) => {
  return (
    <Link
      href={replacePathVariables(ROUTE_PATHS.COLLECTION, { id: data.id })}
      as={NextLink}
      display="block"
      border="1px solid var(--chakra-colors-gray-550)"
      borderRadius="lg"
      transition="transform .2s"
      w="full"
      overflow="hidden"
      bgColor="gray.700"
      willChange="transform"
      _hover={{
        transform: 'scale(1.02)'
      }}
    >
      <Box w="full" h="20rem" position="relative">
        <NextImage
          src={data.avatar}
          fill
          sizes={`(max-width: ${breakpoints.md}) 360px, (max-width: ${breakpoints.lg}) 300px, (max-width: ${breakpoints.xl}) 280px, 250px`}
          priority
          style={{
            objectFit: 'cover'
          }}
          alt="Collection"
        />
      </Box>
      <Box p={6}>
        <Flex justifyContent="space-between" alignItems="center" gap={4}>
          <Flex alignItems="center" gap={3} isTruncated>
            <Box
              rounded="full"
              position="relative"
              w="3.2rem"
              h="3.2rem"
              overflow="hidden"
            >
              <NextImage
                src={data.createdByAvatar}
                alt="Creator"
                fill
                sizes="32px"
                priority
                style={{
                  objectFit: 'cover'
                }}
              />
            </Box>
            <Text fontSize="1.6rem" fontWeight={500} isTruncated>
              {data.createdBy}
            </Text>
          </Flex>
          <Badge variant="gray-outline-filled">{data.nftsCount}</Badge>
        </Flex>
        <Grid gridTemplateColumns="1fr 1fr" mt={6}>
          <GridItem>
            <VStack spacing={1} alignItems="start">
              <Text
                color="gray.300"
                fontSize="1.3rem"
                textTransform="uppercase"
              >
                Floor
              </Text>
              <Text color="gray.100" fontSize="1.5rem">
                {data.floor}
              </Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack spacing={1} alignItems="end">
              <Text
                color="gray.300"
                fontSize="1.3rem"
                textTransform="uppercase"
              >
                Volume
              </Text>
              <Text color="gray.100" fontSize="1.5rem">
                {formatNumberWithSuffix(data.volume, true)}
              </Text>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Link>
  )
})
