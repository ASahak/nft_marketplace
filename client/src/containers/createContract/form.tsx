import { memo, useEffect, useMemo, useState } from 'react'
import { VStack, Input, Button, Flex, Textarea } from '@chakra-ui/react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormFieldWithLabel } from '@/components'
import { isEmpty, setFormValue } from '@/utils/helpers/global'

export const Form = memo(() => {
  const [formTriggerToValidate, setFormTriggerToValidate] = useState(true)
  const form = useFormContext()
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
      <FormFieldWithLabel label="Name*">
        <Controller
          control={form.control}
          name="name"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              placeholder="Enter collection name"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Symbol*">
        <Controller
          control={form.control}
          name="symbol"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              placeholder="Enter symbol"
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
              placeholder="Enter a description"
              size="lg"
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Blockchain*">
        <Controller
          control={form.control}
          name="blockchain"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              placeholder="Enter blockchain"
              size="lg"
              isDisabled
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
            />
          )}
        />
      </FormFieldWithLabel>

      <FormFieldWithLabel label="Contract Type*">
        <Controller
          control={form.control}
          name="contractType"
          render={({ field: { value, name } }) => (
            <Input
              variant="base"
              placeholder="Enter contract type"
              size="lg"
              isDisabled
              value={value}
              onChange={(e) => setFormValue(form, name, e.target.value)}
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
