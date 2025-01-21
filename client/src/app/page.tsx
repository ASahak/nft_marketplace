'use client'

import { Box } from '@chakra-ui/react'
import { Hero } from '@/containers/home/hero'
import { Steps } from '@/containers/home/steps'

export default function Home() {
  return (
    <Box w="full">
      <Hero />
      <Steps />
    </Box>
  )
}
