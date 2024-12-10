import { memo, useRef } from 'react'
import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast
} from '@chakra-ui/react'
import { useAccount } from "wagmi";
import { trimString } from "@/utils/helpers/global.ts";
// import {
//   usePopup,
// } from '@/hooks'
// import { POPUP_TITLES, POPUP_TYPE } from '@/utils/constants'
// import { trimString } from '@/utils/helpers'

interface IProps {
  mt?: string | number
  h?: string | number
  borderRadius?: string | number
  fontSize?: string | number
  p?: string | number | Record<string, string>
}

export const ConnectButton = memo((props: IProps) => {
  const connectedUser = useAccount()
  // const { openPopup, isOpen } = usePopup()
  const toast = useToast()
  // const { gray120_gray450 } = useThemeColors()
  // const { isMobile } = useGlobalVariables()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleOpenConnect = () => {
    // openPopup(POPUP_TYPE.CONNECT_WALLET, POPUP_TITLES.connect, {
    //   fromSwitch: !!fromSwitch
    // })
  }

  const handleDisconnect = () => {
    // disconnect()
  }

  const handleSwitchWallet = () => {
    handleOpenConnect()
  }

  const handleCopyAddress = () => {
    // navigator.clipboard
    //   .writeText(connectedUser?.address || '')
    //   .then(function () {
    //     toast({
    //       status: 'success',
    //       title: 'Wallet address copied to clipboard'
    //     })
    //   })
    //   .catch(function () {
    //     toast({
    //       status: 'error',
    //       title: 'Failed to copy wallet address to clipboard'
    //     })
    //   })
  }

  return (
    <>
      {connectedUser ? (
        <Menu
          variant="base"
          placement="bottom-end"
          onOpen={() => toast.closeAll()}
          autoSelect={false}
        >
          <MenuButton
            as={Button}
            variant="primary"
            h="4rem"
            aria-label="Connect to"
            ref={buttonRef}
            {...props}
          >
            {trimString(connectedUser.address!, 4, 4)}
            <Text
              ml={4}
              as="i"
              className="icon-arrow-down"
              fontSize="1.1rem"
              fontWeight="400"
            />
          </MenuButton>
          <MenuList w="24rem">
            <MenuItem
              onClick={handleSwitchWallet}
              fontSize="1.6rem"
              aria-label="Switch wallet"
            >
              Switch Wallet
            </MenuItem>
            <MenuItem
              onClick={handleDisconnect}
              fontSize="1.6rem"
              aria-label="Disconnect Wallet"
            >
              Disconnect Wallet
            </MenuItem>
            <Divider
              marginY={4}
              marginX="1.6rem"
              w="calc(100% - 3.2rem)"
              borderColor="gray.450"
            />
            {connectedUser && (
              <MenuItem
                fontSize="1.6rem"
                cursor="pointer"
                onClick={handleCopyAddress}
                aria-label="Copy wallet id"
              >
                {trimString(connectedUser.address!, 4, 4)}
                <Text as="span" className="icon-copy" ml="auto" />
              </MenuItem>
            )}
          </MenuList>
        </Menu>
      ) : (
        <Button
          variant="primary"
          onClick={() => handleOpenConnect()}
          h="4rem"
          aria-label="Connect wallet"
          {...props}
        >
          Connect Wallet
        </Button>
      )}
    </>
  )
})
