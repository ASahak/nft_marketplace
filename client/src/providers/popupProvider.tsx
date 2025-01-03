'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import { type ChakraProps, useDisclosure } from '@chakra-ui/react'
import { useStateWithCallback } from '@/hooks'

export interface PopupSettingsType {
  hideCloseIcon?: boolean
  modalBodyProps?: ChakraProps
}

export interface PopupContextType {
  openPopup: (
    type: string,
    title: string | null,
    data?: Record<string, any>,
    popupSettings?: PopupSettingsType
  ) => void
  onClose: () => void
  onCloseComplete: () => void
  onCloseWithNoAnimation: (cb: () => void) => void
  popupData: Record<string, any>
  popupSettings: PopupSettingsType
  popupType: string
  motionPreset: string
  isOpen: boolean
  popupTitle: string
}

export const PopupContext = createContext<PopupContextType>({
  openPopup: () => void 0,
  onClose: () => void 0,
  onCloseComplete: () => void 0,
  onCloseWithNoAnimation: () => void 0,
  popupData: {},
  popupSettings: {
    hideCloseIcon: false,
    modalBodyProps: {}
  },
  popupType: '',
  motionPreset: 'scale',
  isOpen: false,
  popupTitle: ''
})

export const usePopup = () => {
  return useContext(PopupContext)
}

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [popupType, setPopupType] = useState('')
  const [motionPreset, setMotionPreset] = useStateWithCallback('scale')
  const [popupTitle, setPopupTitle] = useState('')
  const [popupData, setPopupData] = useState<Record<string, any>>({})
  const [popupSettings, setPopupSettings] = useState<Record<string, any>>({})

  const openPopup = (
    type: string,
    title: string | null,
    data?: Record<string, unknown>,
    popupSettings?: PopupSettingsType
  ) => {
    onOpen()
    setPopupTitle(title ?? '')
    setPopupType(type)
    if (data) {
      setPopupData(data)
    }
    if (popupSettings) {
      setPopupSettings(popupSettings)
    }
  }

  const onCloseComplete = () => {
    setPopupType('')
    setPopupTitle('')
    setPopupData({})
    setPopupSettings({})
    setMotionPreset('scale')
  }

  const onCloseWithNoAnimation = (cb: () => void) => {
    setMotionPreset('none', () => {
      onClose()
      onCloseComplete()
      cb()
    })
  }

  return (
    <PopupContext.Provider
      value={{
        openPopup,
        onCloseComplete,
        onClose,
        onCloseWithNoAnimation,
        popupData,
        popupSettings,
        motionPreset,
        popupType,
        popupTitle,
        isOpen
      }}
    >
      {children}
    </PopupContext.Provider>
  )
}
