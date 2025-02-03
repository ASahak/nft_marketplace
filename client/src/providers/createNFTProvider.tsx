'use client'

import {
  createContext,
  Dispatch,
  type ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

export interface CreateNFTContextType {
  attributesError: boolean
  setAttributesError: Dispatch<SetStateAction<boolean>>
}

export const CreateNFTContext = createContext<CreateNFTContextType | undefined>(
  undefined
)

export const useCreateNFT = () => {
  const context = useContext(CreateNFTContext)

  if (context === undefined) {
    throw new Error('useCreateNFT must be used within a CreateNFTProvider')
  }

  return context
}

export const CreateNFTProvider = ({ children }: { children: ReactNode }) => {
  const [attributesError, setAttributesError] = useState<boolean>(false)

  return (
    <CreateNFTContext.Provider
      value={{
        attributesError,
        setAttributesError
      }}
    >
      {children}
    </CreateNFTContext.Provider>
  )
}
