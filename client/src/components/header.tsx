import { memo } from 'react'
import {
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react'
import {
  Container,
} from '@/components'
import { Logo } from '@/components/icons'

export const HeaderPY = { base: '1.2rem', md: '1.6rem' }
export const Header = memo(
  () => {

    return (
      <Box
        zIndex={5000}
        position="sticky"
        top={0}
        as="header"
        w="full"
        bgColor="gray.700"
        borderBottom={1}
        borderColor="gray.600"
        borderStyle={'solid'}
      >
        <Container py={HeaderPY} as={Flex} minH={'4rem'} align={'center'}>
            <>
              <Flex flex={1} gap={{ base: '5rem', lg: '8rem' }}>
                {/*<CustomLink to="/">*/}
                  <Logo />
                {/*</CustomLink>*/}
                <Flex as="nav" display={{ base: 'none', md: 'flex' }}>
                  {/*<DesktopNavbar />*/}
                </Flex>
              </Flex>
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={{ base: '0.8rem', sm: '6', md: '1.2rem' }}
                zIndex={3}
              >
                {/*<ConnectButton*/}
                {/*  borderRadius="0.8rem"*/}
                {/*  p={{ base: '1.2rem', md: '1.2rem 1.6rem ' }}*/}
                {/*/>*/}
              </Stack>
            </>
            {/*<CustomLink to="/">*/}
              {/*<Logo />*/}
            {/*</CustomLink>*/}
        </Container>
      </Box>
    )
  }
)
