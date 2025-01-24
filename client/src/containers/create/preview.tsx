import { memo, useCallback } from 'react'
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import { RiUploadLine } from 'react-icons/ri'

const fileTypes = ['JPG', 'PNG', 'GIF', 'SVG', 'MP4']
export const Preview = memo(() => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Flex flexDirection="column" h="full">
      <Box>
        <Heading fontSize="3rem">Create an NFT</Heading>
        <Text fontSize="1.6rem" mt={4}>
          *Once your item is minted you will not be able to change any of its
          information.
        </Text>
      </Box>
      <Box {...getRootProps()} h="full" mt={6} cursor="pointer">
        <input {...getInputProps()} />
        <Flex
          transition=".3s"
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
    </Flex>
  )
})
