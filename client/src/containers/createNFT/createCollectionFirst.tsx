import { memo } from 'react'
import { Text, Icon, Flex } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { RxPlus } from 'react-icons/rx'
import { FormFieldWithLabel } from '@/components'
import ROUTE_PATHS from '@/utils/constants/routes'

export const CreateCollectionFirst = memo(() => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const openCreateContract = () => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    )
    currentParams.set('from-nft-create', '1') // todo key name is around the app, in case you change it it should be override in the whole app

    router.push(`${ROUTE_PATHS.CREATE_CONTRACT}?${currentParams.toString()}`)
  }

  return (
    <FormFieldWithLabel label="Collection*">
      <Flex
        role="button"
        tabIndex={0}
        w="full"
        p={6}
        bgColor="gray.600"
        borderRadius=".8rem"
        transition=".2s"
        cursor="pointer"
        alignItems="center"
        gap={4}
        _hover={{ bgColor: 'gray.650' }}
        onClick={openCreateContract}
      >
        <Icon
          as={RxPlus}
          fontSize="2rem"
          w="4rem"
          h="4rem"
          p={4}
          borderRadius=".8rem"
          bgColor="gray.700"
        />
        <Text fontSize="1.6rem" fontWeight="600">
          Create a new collection
        </Text>
      </Flex>
    </FormFieldWithLabel>
  )
})
