import { memo } from 'react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import {
  formatNumberWithSuffix,
  replacePathVariables
} from '@/utils/helpers/global'
import ROUTE_PATHS from '@/utils/constants/routes'
import { SellerType } from '@/types/seller'

export const SellerCard = memo(({ data }: { data: SellerType }) => {
  return (
    <Link
      href={replacePathVariables(ROUTE_PATHS.SELLER, { id: data.id })}
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
      <Flex gap={8} h="10rem" alignItems="center" p={6}>
        <Box
          w="8rem"
          h="8rem"
          borderRadius="full"
          overflow="hidden"
          position="relative"
        >
          <NextImage
            src={data.avatar}
            fill
            sizes="80px"
            priority
            style={{
              objectFit: 'cover'
            }}
            alt="Collection"
          />
        </Box>
        <VStack spacing={0} alignItems="start">
          <Text fontSize="1.6rem" fontWeight={500} isTruncated>
            {data.seller}
          </Text>
          <Text color="gray.300" fontSize="1.5rem">
            Volume: {formatNumberWithSuffix(data.volume, true)}
          </Text>
        </VStack>
      </Flex>
    </Link>
  )
})
