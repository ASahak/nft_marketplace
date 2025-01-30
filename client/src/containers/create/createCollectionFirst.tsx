import { memo } from 'react'
import { Text, Icon, Flex } from '@chakra-ui/react'
import { RxPlus } from 'react-icons/rx'
import { FormFieldWithLabel } from '@/components'

export const CreateCollectionFirst = memo(() => {
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
