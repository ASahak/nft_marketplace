import React from 'react'
import { Button, Flex, Icon } from '@chakra-ui/react'
import { FaRegTrashCan } from 'react-icons/fa6'

export const RemovePreviewButton = ({ onRemove }: { onRemove: () => void }) => {
  return (
    <Flex
      zIndex={10}
      position="absolute"
      w="full"
      h="full"
      bgColor="#000000c2"
      alignItems="center"
      justifyContent="center"
      opacity={0}
      transition="opacity 0.2s ease-in-out"
      backdropFilter="blur(4px)"
      _hover={{
        opacity: 1
      }}
    >
      <Button variant="unstyled" onClick={onRemove}>
        <Icon as={FaRegTrashCan} fontSize="3rem" color="red.400" />
      </Button>
    </Flex>
  )
}
