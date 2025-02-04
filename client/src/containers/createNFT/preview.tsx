import React, { memo, useCallback, useEffect, useState } from 'react'
import { Box, Button, Flex, Icon, Text, useToast } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { RiUploadLine } from 'react-icons/ri'
import { FaRegTrashCan } from 'react-icons/fa6'
import NextImage from 'next/image'
import { useFormContext } from 'react-hook-form'
import { breakpoints } from '@/styles/theme'
import { Preloader } from '@/components'
import { RemovePreviewButton } from './removePreviewButton'
import { setFormValue } from '@/utils/helpers/global'

export const MAX_FILE_SIZE = 50 * 1024 * 1024
export const fileTypes = ['JPG', 'PNG', 'GIF', 'SVG', 'WEBP', 'MP4']
export const Preview = memo(() => {
  const [srcLoading, setSrcLoading] = useState(false)
  const form = useFormContext()
  const toast = useToast()
  const preview = form.watch('logo')
  const errorPreview = form.formState.errors.logo

  const isPreviewVideo = () => {
    return preview.type.includes('video/')
  }

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
      'image/*': fileTypes
        .slice(0, fileTypes.length - 1)
        .map((e) => `.${e.toLowerCase()}`),
      'video/*': [`.${fileTypes[fileTypes.length - 1].toLowerCase()}`]
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
            ) : !isPreviewVideo() ? (
              <RemovePreviewButton onRemove={onRemove} />
            ) : null}
            {!isPreviewVideo() ? (
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
            ) : (
              <Flex flexDir="column" h="full">
                <video
                  onLoadedData={() => setSrcLoading(false)}
                  width="100%"
                  style={{ flex: '1', backgroundColor: 'black' }}
                  controls
                  loop
                  muted
                  playsInline
                  autoPlay={false}
                >
                  <source src={URL.createObjectURL(preview)} type="video/mp4" />
                </video>
                <Button
                  w="full"
                  py={4}
                  bgColor="gray.600 !important"
                  borderRadius={0}
                  _hover={{ bgColor: 'gray.650 !important' }}
                  variant="unstyled"
                  onClick={onRemove}
                >
                  <Icon as={FaRegTrashCan} fontSize="3rem" color="red.400" />
                </Button>
              </Flex>
            )}
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
