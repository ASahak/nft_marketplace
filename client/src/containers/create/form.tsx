import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react'
import { VStack, Input, Button, Flex, Textarea } from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormFieldWithLabel } from '@/components'
import { CreateCollectionFirst } from './createCollectionFirst'
import { Attributes } from './attributes'
import { createNFTScheme } from '@/utils/validators'
import { isEmpty, isNumber, setFormValue } from '@/utils/helpers/global'

export type IAttr = {
  type: string
  name: string
  id: string
}
export type Inputs = {
  name: string
  royalty: string
  description: string
  externalURL: string
  attributes: IAttr[]
}
export const Form = memo(() => {
  const [formTriggerToValidate, setFormTriggerToValidate] = useState(true)
  const form = useForm<Inputs>({
    resolver: yupResolver(createNFTScheme),
    defaultValues: {
      name: '',
      royalty: '',
      description: '',
      externalURL: '',
      attributes: []
    }
  })
  const [attributesError, setAttributesError] = useState<boolean>(false)
  const values = form.watch()
  const errors = form.formState.errors

  const isDisabled = useMemo(() => {
    return !formTriggerToValidate ? !isEmpty(errors) || attributesError : true
  }, [errors, values, formTriggerToValidate, attributesError])

  const onRoyaltyChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.replace(/\s/g, '')

    if (isNumber(value)) {
      setFormValue(form, 'royalty', value)
    } else if (!value) {
      setFormValue(form, 'royalty', '')
    }
  }

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
              placeholder="Enter your NFT name"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Royalty*">
        <Controller
          control={form.control}
          name="royalty"
          render={({ field: { value } }) => (
            <Input
              variant="base"
              placeholder="e.g. 10%"
              size="lg"
              value={value}
              onChange={onRoyaltyChange}
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
              placeholder="Enter a description"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="External URL">
        <Controller
          control={form.control}
          name="externalURL"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              placeholder="https://collection.io/item/1"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Attributes">
        <Controller
          control={form.control}
          name="attributes"
          render={({ field: { value, name } }) => (
            <Attributes
              onErrorEmit={setAttributesError}
              data={value}
              onChange={(data) => setFormValue(form, name, data)}
            />
          )}
        />
      </FormFieldWithLabel>

      <Flex w="full" justifyContent="end">
        <Button variant="primary" size="lg" isDisabled={isDisabled}>
          Create
        </Button>
      </Flex>
    </VStack>
  )
})
