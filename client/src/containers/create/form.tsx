import { memo, useEffect, useMemo, useState } from 'react'
import { VStack, Input, Button, Flex, Textarea } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormFieldWithLabel } from '@/components'
import { CreateCollectionFirst } from './createCollectionFirst'
import { createNFTScheme } from '@/utils/validators'
import { isEmpty, setFormValue } from '@/utils/helpers/global'

export type Inputs = {
  name: string
  supply: string
  description: string
}
export const Form = memo(() => {
  const [formTriggerToValidate, setFormTriggerToValidate] = useState(true)
  const form = useForm<Inputs>({
    resolver: yupResolver(createNFTScheme),
    defaultValues: {
      name: '',
      supply: '',
      description: ''
    }
  })
  const values = form.watch()
  const errors = form.formState.errors

  const isDisabled = useMemo(() => {
    return !formTriggerToValidate ? !isEmpty(errors) : true
  }, [errors, values, formTriggerToValidate])

  useEffect(() => {
    ;(async () => {
      // Validate form initially for initialize the errors
      await form.trigger()
      setFormTriggerToValidate(false)
    })()
  }, [])

  return (
    <VStack as="form" spacing="1.8rem">
      <CreateCollectionFirst />

      <FormFieldWithLabel label="Name*">
        <Controller
          control={form.control}
          name="name"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Supply*">
        <Controller
          control={form.control}
          name="supply"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Description">
        <Controller
          control={form.control}
          name="description"
          render={({ field: { value, name } }) => (
            <Textarea
              rows={4}
              variant="base"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
        sss
      </FormFieldWithLabel>

      <Flex w="full" justifyContent="end">
        <Button variant="primary" size="lg" isDisabled={isDisabled}>
          Create
        </Button>
      </Flex>
    </VStack>
  )
})
