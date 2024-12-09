import { useRef } from 'react'
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import Connect from './connect'
import { POPUP_TYPE } from '@/utils/constants/popup'
import { usePopup } from '@/hooks'

function Popup() {
  const overlayColor = useColorModeValue(
    'var(--chakra-colors-blackAlpha-600)',
    '#1e20247d'
  )
  const {
    popupData,
    popupSettings,
    popupTitle,
    motionPreset,
    popupType,
    isOpen,
    onCloseComplete,
    onClose
  } = usePopup()
  const modalRef = useRef(null)

  const renderContent = () => {
    switch (popupType) {
      case POPUP_TYPE.CONNECT_WALLET:
        return <Connect {...(popupData as any)} />
      default:
        return <div>Unknown popup type</div>
    }
  }

  return (
    <Modal
      initialFocusRef={modalRef}
      key={motionPreset}
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      onCloseComplete={onCloseComplete}
      preserveScrollBarGap
      motionPreset={motionPreset as any}
    >
      <ModalOverlay bg={overlayColor} backdropFilter="blur(2px)" />
      <ModalContent
        ref={modalRef}
        p="2.4rem"
        borderRadius="xl"
        bg="gray.10"
        w={{
          xs: 'calc(100% - 1.6rem)',
          base: 'calc(100% - 3.9rem)',
          md: 'fit-content'
        }}
        maxW="fit-content"
      >
        {popupTitle ? (
          <ModalHeader p={0}>
            <Heading variant="page-title" fontSize="2rem">
              {popupTitle}
            </Heading>
          </ModalHeader>
        ) : null}
        {!popupSettings.hideCloseIcon && (
          <ModalCloseButton fontSize="1.2rem" top="2.4rem" right="2.4rem" />
        )}
        <ModalBody
          mt={popupSettings.hideCloseIcon ? '0' : '2.4rem'}
          p={0}
          {...popupSettings.modalBodyProps}
        >
          {renderContent()}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Popup
