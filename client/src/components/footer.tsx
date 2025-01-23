import React from 'react'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import ROUTE_PATHS, { NAV_ITEMS } from '@/utils/constants/routes'
import { Logo } from '@/components/icons'
import { Container } from '@/components'

export const Footer = () => {
  return (
    <Box as="footer" bgColor="gray.700">
      <Container py={10}>
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          alignItems="center"
          gap="2rem"
        >
          <GridItem>
            <Flex
              gap={10}
              flexDir={{ base: 'column', md: 'row' }}
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Link
                as={NextLink}
                href={ROUTE_PATHS.DASHBOARD}
                aria-label="Logo"
              >
                <Logo mini />
              </Link>
              <Flex fontSize="1.4rem" mt={4} gap={3} alignItems="center">
                <Text>© {new Date().getUTCFullYear()}</Text>|
                <Text>All rights reserved.</Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem>
            <List
              display="flex"
              gap={4}
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-end' }}
            >
              {NAV_ITEMS[0].children?.map((item) => (
                <ListItem key={item.link || item.label}>
                  <Link
                    display="flex"
                    alignItems="center"
                    h="full"
                    as={NextLink}
                    href={item.link}
                    fontSize="1.5rem"
                    color="gray.300"
                    _hover={{ color: 'gray.200' }}
                  >
                    {item.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
