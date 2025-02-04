import React, { memo, useCallback, useEffect, useState } from 'react'
import { Box, Flex, Icon, Text, useToast } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { RiUploadLine } from 'react-icons/ri'
import NextImage from 'next/image'
import { useFormContext } from 'react-hook-form'
import { breakpoints } from '@/styles/theme'
import { Preloader } from '@/components'
import { RemovePreviewButton } from './removePreviewButton'
import { setFormValue } from '@/utils/helpers/global'

export const MAX_FILE_SIZE = 50 * 1024 * 1024
export const fileTypes = ['JPG', 'PNG', 'GIF', 'SVG', 'WEBP']
export const Preview = memo(() => {
  const [srcLoading, setSrcLoading] = useState(false)
  const form = useFormContext()
  const toast = useToast()
  const preview = form.watch('logo')
  const errorPreview = form.formState.errors.logo

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSrcLoading(true)
      setFormValue(form, 'logo', acceptedFiles[0])
    },
    [form]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    accept: {
      'image/*': fileTypes.map((e) => `.${e.toLowerCase()}`)
    }
  })

  const onRemove = () => {
    setFormValue(form, 'logo', '')
  }

  useEffect(() => {
    if (preview && errorPreview) {
      toast({
        title: errorPreview.message as string,
        status: 'error'
      })
    }
  }, [errorPreview, preview])

  return (
    <Box h="full" minH="40rem" maxH="64rem">
      {preview && !errorPreview ? (
        <Box
          h="full"
          w="full"
          border="1px solid"
          borderColor="gray.500"
          overflow="hidden"
          borderRadius=".8rem"
        >
          <Flex alignItems="center" position="relative" w="full" h="full">
            {srcLoading ? (
              <Preloader position="absolute" h="full" w="full" />
            ) : preview ? (
              <RemovePreviewButton onRemove={onRemove} />
            ) : null}
            <NextImage
              src={URL.createObjectURL(preview)}
              onLoadingComplete={() => setSrcLoading(false)}
              onError={() => setSrcLoading(false)}
              alt="Set up wallet"
              fill
              sizes={`(max-width: ${breakpoints.md}) 360px, (max-width: ${breakpoints.lg}) 400px, (max-width: ${breakpoints.xl}) 640px, 250px`}
              priority
              style={{
                objectFit: 'cover'
              }}
            />
          </Flex>
        </Box>
      ) : (
        <Box {...getRootProps()} w="full" h="full" cursor="pointer">
          <input {...getInputProps()} />
          <Flex
            transition=".2s"
            height="full"
            border={isDragActive ? '1px solid' : '1px dashed'}
            borderColor="gray.400"
            borderRadius=".8rem"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            bgColor={isDragActive ? 'gray.600' : 'transparent'}
            _hover={{
              bgColor: 'gray.600',
              border: '1px solid',
              borderColor: 'gray.400'
            }}
          >
            <Icon as={RiUploadLine} fontSize="3rem" mb={6} />
            <Text fontSize="1.8rem" fontWeight={600}>
              Drag and drop media
            </Text>
            <Text fontSize="1.4rem" fontWeight={600} color="blue.250">
              Browse files
            </Text>
            <Text fontSize="1.4rem" color="gray.400">
              Max Size: 5MB
            </Text>
            <Text fontSize="1.4rem" color="gray.400">
              {fileTypes.join(', ')}
            </Text>
          </Flex>
        </Box>
      )}
    </Box>
  )
})
