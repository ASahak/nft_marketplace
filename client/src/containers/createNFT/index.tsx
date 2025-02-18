'use client'

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'
import { RxArrowLeft } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, WithLoggedAccount } from '@/components'
import { Preview } from './preview'
import { Form } from './form'
import ROUTE_PATHS from '@/utils/constants/routes'
import { createNFTScheme } from '@/utils/validators'

export type IAttr = {
  type: string
  name: string
  id: string
}
export type Inputs = {
  contract: string
  name: string
  logo: any
  description: string
  externalURL: string
  attributes: IAttr[]
}
export const CreateNFT = () => {
  const router = useRouter()
  const methods = useForm<Inputs>({
    resolver: yupResolver(createNFTScheme),
    defaultValues: {
      contract: '',
      name: '',
      logo: '',
      description: '',
      externalURL: '',
      attributes: []
    }
  })

  const goBack = () => {
    router.push(ROUTE_PATHS.CREATE)
  }

  return (
    <WithLoggedAccount>
      <FormProvider {...methods}>
        <Container py={10}>
          <VStack spacing={4} w="full" h="full">
            <Box w="full">
              <Flex w="full" alignItems="center" gap={8}>
                <Button variant="outline" w="4rem" h="4rem" onClick={goBack}>
                  <Icon as={RxArrowLeft} fontSize="1.8rem" />
                </Button>
                <Heading fontSize="3rem">Create an NFT</Heading>
              </Flex>
              <Text fontSize="1.6rem" mt={4}>
                *Once your item is minted you will not be able to change any of
                its information.
              </Text>
            </Box>
            <Grid
              mt={6}
              gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              gap={20}
              h="full"
              w="full"
            >
              <GridItem>
                <Preview />
              </GridItem>

              <GridItem>
                <Form />
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </FormProvider>
    </WithLoggedAccount>
  )
}
