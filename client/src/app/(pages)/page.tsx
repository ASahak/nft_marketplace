import { unstable_cache } from 'next/cache'
import { Box, VStack } from '@chakra-ui/react'
import { Hero } from '@/containers/home/hero'
import { Steps } from '@/containers/home/steps'
import { Collections } from '@/containers/home/collections'
import { Sellers } from '@/containers/home/sellers'
import { CollectionType } from '@/types/collection'
import { SellerType } from '@/types/seller'
import { faker } from '@faker-js/faker' // todo

const getCollections = unstable_cache(
  async (): Promise<CollectionType[]> => {
    return new Promise((resolve) => {
      // todo
      setTimeout(() => {
        resolve(
          faker.helpers.multiple(
            () => ({
              id: faker.string.uuid(),
              createdByAvatar: faker.image.avatar(),
              createdBy: faker.internet.username(),
              nftsCount: faker.number.int({ min: 1, max: 1000 }),
              floor: faker.number.float({
                min: 1,
                max: 1000,
                fractionDigits: 2
              }),
              volume: faker.number.int({ min: 1, max: 10000000 }),
              avatar: faker.image.urlPicsumPhotos()
            }),
            {
              count: 5
            }
          )
        )
      }, 500)
    })
  },
  ['top-collections'],
  { tags: ['top-collections'], revalidate: 60 }
)

const getSellers = unstable_cache(
  async (): Promise<SellerType[]> => {
    return new Promise((resolve) => {
      // todo
      setTimeout(() => {
        resolve(
          faker.helpers.multiple(
            () => ({
              id: faker.string.uuid(),
              seller: faker.internet.username(),
              volume: faker.number.int({ min: 1, max: 10000000 }),
              avatar: faker.image.urlPicsumPhotos()
            }),
            {
              count: 5
            }
          )
        )
      }, 500)
    })
  },
  ['top-sellers'],
  { tags: ['top-sellers'], revalidate: 60 }
)

export default async function HomePage() {
  const collections = await getCollections()
  const sellers = await getSellers()

  return (
    <Box w="full">
      <Hero />
      <VStack spacing="6rem" w="full">
        <Collections list={collections} />
        <Steps />
        <Sellers list={sellers} />
      </VStack>
    </Box>
  )
}
