'use client'

import { memo } from 'react'
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { POPUP_PADDING } from '@/components/popup'

export const GlobalSearch = memo(() => {
  return (
    <Box w={`calc(80vw - ${POPUP_PADDING})`}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" h="full" w="4rem">
          <Icon as={RxMagnifyingGlass} color="gray.300" fontSize="2rem" />
        </InputLeftElement>
        <Input
          type="text"
          variant="global-search"
          pl="4rem"
          placeholder="Search..."
        />
      </InputGroup>
    </Box>
  )
})
