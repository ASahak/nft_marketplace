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
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, WithLoggedAccount } from '@/components'
import { Preview } from './preview'
import { Form } from './form'
import ROUTE_PATHS from '@/utils/constants/routes'
import { createContractScheme } from '@/utils/validators/createContract'

export type Inputs = {
  name: string
  symbol: string
  blockchain: string
  description: string
  contractType: string
  logo: any
}
export const CreateContract = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const methods = useForm<Inputs>({
    resolver: yupResolver(createContractScheme),
    defaultValues: {
      logo: '',
      name: '',
      symbol: '',
      description: '',
      blockchain: 'ethereum', // todo temp hardcode
      contractType: 'proxy' // todo temp hardcode
    }
  })

  const goBack = () => {
    const cameFromNFTCreation = searchParams.get('from-nft-create') // todo key name is around the app, in case you change it it should be override in the whole app
    if (cameFromNFTCreation) {
      return router.push(ROUTE_PATHS.CREATE_NFT)
    }
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
                <Heading fontSize="3rem">
                  Create a smart contract for your nfts.
                </Heading>
              </Flex>
              <Text fontSize="1.6rem" mt={4}>
                *You’ll need to deploy an ERC-721 contract onto the blockchain
                before you can create a collection.
              </Text>
            </Box>
            <Grid
              gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              gap={20}
              h="full"
              w="full"
              mt={6}
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
