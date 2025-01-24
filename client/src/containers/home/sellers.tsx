'use client'

import { useRef, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  useBreakpointValue
} from '@chakra-ui/react'
import Slider from 'react-slick'
import NextLink from 'next/link'
import { isMobile } from 'react-device-detect'
import { RxChevronRight, RxChevronLeft } from 'react-icons/rx'
import { SellerCard, Container } from '@/components'
import { SellerType } from '@/types/seller'
import ROUTE_PATHS from '@/utils/constants/routes'

type IProps = {
  list: SellerType[]
}
const MAX_SLIDES = 4
export const Sellers = ({ list }: IProps) => {
  const slidesToShow: number = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: MAX_SLIDES
  }) as number
  const sliderRef = useRef(null)
  const [sliderIndex, setSliderIndex] = useState(0)

  const goTo = (step: number) => {
    if (sliderRef.current) {
      if (step === -1) {
        ;(sliderRef.current as Slider).slickPrev()
      } else {
        ;(sliderRef.current as Slider).slickNext()
      }
    }
  }

  const afterChange = (currentSlide: number) => {
    setSliderIndex(
      currentSlide === 0 ? currentSlide : currentSlide + slidesToShow
    )
  }

  const renderArrows = () => {
    return (
      <Flex alignItems="center" gap={3}>
        <Button
          isDisabled={sliderIndex === 0}
          variant="unstyled"
          display="flex"
          onClick={() => goTo(-1)}
          title="Previous"
        >
          <Icon as={RxChevronLeft} fontSize="2rem" />
        </Button>
        <Button
          isDisabled={sliderIndex === list.length}
          variant="unstyled"
          display="flex"
          onClick={() => goTo(1)}
          title="Next"
        >
          <Icon as={RxChevronRight} fontSize="2rem" />
        </Button>
      </Flex>
    )
  }

  return (
    <Box w="full">
      <Container>
        <Flex justifyContent="space-between" alignItems="center" gap={4}>
          <Heading as="h1" variant="underline">
            Top Sellers
          </Heading>
          <Flex gap={6} alignItems="center">
            <Link as={NextLink} href={ROUTE_PATHS.SELLERS} fontSize="1.4rem">
              See all
            </Link>
            {slidesToShow < MAX_SLIDES ? renderArrows() : null}
          </Flex>
        </Flex>
        <HStack
          infinite={false}
          ref={sliderRef}
          as={Slider}
          swipe={isMobile && slidesToShow < MAX_SLIDES}
          slidesToShow={slidesToShow}
          w="full"
          arrows={false}
          mt={14}
          className="collection-slider"
          afterChange={afterChange}
        >
          {list.map((c) => (
            <SellerCard key={c.id} data={c} />
          ))}
        </HStack>
      </Container>
    </Box>
  )
}
