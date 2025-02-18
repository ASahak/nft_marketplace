import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react'
import { VStack, Input, Button, Flex, Textarea, Box } from '@chakra-ui/react'
import {
  Controller,
  SubmitHandler,
  FieldValues,
  useFormContext
} from 'react-hook-form'
import { FormFieldWithLabel } from '@/components'
import { isEmpty, isNumber, setFormValue } from '@/utils/helpers/global'

export const Form = memo(() => {
  const [formTriggerToValidate, setFormTriggerToValidate] = useState(true)
  const form = useFormContext()
  const values = form.watch()
  const errors = form.formState.errors

  const isDisabled = useMemo(() => {
    return !formTriggerToValidate ? !isEmpty(errors) : true
  }, [errors, values, formTriggerToValidate])

  const onCreateContract: SubmitHandler<FieldValues> = (formState) => {
    console.log(formState)
  }

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
    <VStack
      as="form"
      spacing="1.8rem"
      onSubmit={form.handleSubmit(onCreateContract)}
    >
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

      <Flex gap={4} w="full">
        <Box flexBasis="70%">
          <FormFieldWithLabel label="Recipient Address*">
            <Controller
              control={form.control}
              name="recipientAddress"
              render={({ field: { value, name } }) => (
                <Input
                  variant="base"
                  placeholder="Address"
                  size="lg"
                  value={value}
                  onChange={(e) => setFormValue(form, name, e.target.value)}
                />
              )}
            />
          </FormFieldWithLabel>
        </Box>
        <Box flexBasis="30%">
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
        </Box>
      </Flex>
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

      <Flex w="full" justifyContent="end">
        <Button
          variant="primary"
          size="lg"
          isDisabled={isDisabled}
          type="submit"
        >
          Create
        </Button>
      </Flex>
    </VStack>
  )
})
