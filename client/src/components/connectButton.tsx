import { memo, useRef } from 'react'
import {
  Button,
  Divider, Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast
} from '@chakra-ui/react'
import { useAccount, useDisconnect } from "wagmi";
import { HiOutlineChevronDown, HiOutlineDuplicate } from "react-icons/hi";
import { trimString } from "@/utils/helpers/global";
import {
  usePopup,
} from '@/hooks'
import { POPUP_TYPE, POPUP_TITLES } from '@/utils/constants/popup'

interface IProps {
  mt?: string | number
  h?: string | number
  borderRadius?: string | number
  fontSize?: string | number
  p?: string | number | Record<string, string>
}

export const ConnectButton = memo((props: IProps) => {
  const connectedUser = useAccount()
  const { disconnect } = useDisconnect()
  const { openPopup } = usePopup()
  const toast = useToast()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleOpenConnect = () => {
    openPopup(POPUP_TYPE.CONNECT_WALLET, POPUP_TITLES.CONNECT_WALLET)
  }

  const handleDisconnect = () => {
    disconnect()
  }

  const handleSwitchWallet = () => {
    handleOpenConnect()
  }

  const handleCopyAddress = () => {
    navigator.clipboard
      .writeText(connectedUser?.address || '')
      .then(function () {
        toast({
          status: 'success',
          title: 'Wallet address copied to clipboard'
        })
      })
      .catch(function () {
        toast({
          status: 'error',
          title: 'Failed to copy wallet address to clipboard'
        })
      })
  }

  return (
    <>
      {connectedUser.address ? (
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
            <Text
              display="flex"
              alignItems="center"
            >
              {trimString(connectedUser.address, 4, 4)}
              <Icon
                ml={4}
                as={HiOutlineChevronDown}
                fontSize="1.6rem"
                fontWeight="400"
              />
            </Text>
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
                {trimString(connectedUser.address, 4, 4)}
                <Text as={HiOutlineDuplicate} ml="auto" fontSize="2rem" />
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
