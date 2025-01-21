'use client'

import { memo } from 'react'
import { isMobile } from 'react-device-detect'
import {
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue
} from '@chakra-ui/react'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { usePopup } from '@/providers/popupProvider'
import { POPUP_TYPE } from '@/utils/constants/popup'

export const Search = memo(() => {
  const { openPopup } = usePopup()
  const isMobileMD = useBreakpointValue(
    { base: true, md: false },
    { ssr: true }
  )

  const onOpenMobileSearch = () => {
    openPopup(
      POPUP_TYPE.GLOBAL_SEARCH,
      '',
      {},
      { hideCloseIcon: true, placementTop: true }
    )
  }

  return (
    <Box>
      {isMobileMD || isMobile ? (
        <>
          <Button
            variant="unstyled"
            h="4rem"
            w="4rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={() => onOpenMobileSearch()}
          >
            <Icon as={RxMagnifyingGlass} color="gray.300" fontSize="2.5rem" />
          </Button>
        </>
      ) : (
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
      )}
    </Box>
  )
})
