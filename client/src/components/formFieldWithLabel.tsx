import { memo, ReactNode } from 'react'
import { FormLabel, VStack } from '@chakra-ui/react'

type IProps = {
  label?: string
  children: ReactNode
}
export const FormFieldWithLabel = memo(({ label, children }: IProps) => {
  return (
    <VStack spacing=".2rem" w="full">
      {label && (
        <FormLabel w="full" fontSize="1.8rem" mx={0}>
          {label}
        </FormLabel>
      )}
      {children}
    </VStack>
  )
})
