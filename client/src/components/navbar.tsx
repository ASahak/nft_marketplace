'use client'

import React, { memo } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { isMobile } from 'react-device-detect'
import { RxChevronDown, RxCross1, RxTextAlignRight } from 'react-icons/rx'
import ROUTE_PATHS, { NAV_ITEMS } from '@/utils/constants/routes'
import RouterLink from 'next/link'
import { Logo } from '@/components/icons'
import { HeaderPY } from '@/components/header'

export const Navbar = () => {
  return null
}

const NavbarDesktop = memo(() => {
  return (
    <List display="flex" alignItems="center" gap={8}>
      {NAV_ITEMS.map((item) => (
        <ListItem key={item.link || item.label} h="full">
          {item.link ? (
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
          ) : item?.children?.length ? (
            <Popover
              openDelay={50}
              closeDelay={100}
              trigger="hover"
              placement="bottom-start"
              offset={[0, 0]}
              variant="nav-sub-menu"
            >
              <PopoverTrigger>
                <Text
                  h="full"
                  fontSize="1.5rem"
                  color="gray.300"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{ color: 'gray.200' }}
                >
                  {item.label}
                  <Icon as={RxChevronDown} fontSize="1.6rem" />
                </Text>
              </PopoverTrigger>
              <PopoverContent w="16rem">
                <PopoverBody>
                  <List spacing={4}>
                    {item.children.map((subLink) => (
                      <ListItem key={subLink.link}>
                        <Link
                          as={NextLink}
                          href={subLink.link}
                          fontSize="1.5rem"
                          color="gray.300"
                          cursor="pointer"
                          _hover={{ color: 'gray.200' }}
                        >
                          {subLink.label}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Text
              h="full"
              fontSize="1.5rem"
              color="gray.300"
              _hover={{ color: 'gray.200' }}
            >
              {item.label}
            </Text>
          )}
        </ListItem>
      ))}
    </List>
  )
})

const NavbarMobile = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobileMD = useBreakpointValue(
    { base: true, md: false },
    { ssr: true }
  )

  return (
    <>
      <Button
        variant="outline"
        p={0}
        w="4rem"
        h="4rem"
        onClick={() => onOpen()}
      >
        <Icon as={RxTextAlignRight} fontSize="3rem" />
      </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} isFullHeight>
        <DrawerOverlay display="none" />
        <DrawerContent boxShadow="none">
          <DrawerHeader borderBottomWidth="1px" py={HeaderPY}>
            <Flex alignItems="center" justifyContent="space-between">
              <Link as={RouterLink} href={ROUTE_PATHS.DASHBOARD}>
                <Logo mini={isMobile || isMobileMD} />
              </Link>
              <Button
                variant="outline"
                p={0}
                w="4rem"
                h="4rem"
                onClick={() => onClose()}
              >
                <Icon as={RxCross1} fontSize="2rem" />
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody py={8}>
            <List spacing={4}>
              {NAV_ITEMS.map((item) => (
                <ListItem key={item.link || item.label} h="full">
                  {item.link ? (
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
                  ) : item?.children?.length ? (
                    <Accordion allowToggle>
                      <AccordionItem border="none">
                        <AccordionButton
                          bgColor="transparent !important"
                          p={0}
                          w="full"
                          justifyContent="space-between"
                          fontSize="1.5rem"
                        >
                          <Text
                            h="full"
                            fontSize="1.5rem"
                            color="gray.300"
                            cursor="pointer"
                            _hover={{ color: 'gray.200' }}
                          >
                            {item.label}
                          </Text>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                          pb={2}
                          motionProps={{ unmountOnExit: true }}
                        >
                          <List spacing={4}>
                            {item.children.map((subLink) => (
                              <ListItem key={subLink.link}>
                                <Link
                                  as={NextLink}
                                  href={subLink.link}
                                  fontSize="1.5rem"
                                  color="gray.300"
                                  cursor="pointer"
                                  _hover={{ color: 'gray.200' }}
                                >
                                  {subLink.label}
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Text
                      h="full"
                      fontSize="1.5rem"
                      color="gray.300"
                      _hover={{ color: 'gray.200' }}
                    >
                      {item.label}
                    </Text>
                  )}
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
})

Navbar.Desktop = NavbarDesktop
Navbar.Mobile = NavbarMobile

export { NavbarDesktop, NavbarMobile }
