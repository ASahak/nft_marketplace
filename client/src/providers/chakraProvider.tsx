'use client'

import React, { type ReactNode } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Icon,
  ChakraProvider as _ChakraProvider
} from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { HiCheckCircle, HiOutlineExclamationCircle } from 'react-icons/hi'
import theme from '@/styles/theme'

const colorScheme = (
  status: string
): { bgColor: string; color: string; icon: ReactNode | null } => {
  switch (status) {
    case 'success':
      return {
        icon: <Icon as={HiCheckCircle} fontSize="2.4rem" color="green.700" />,
        bgColor: '#1B3830',
        color: 'white'
      }
    case 'info':
      return {
        icon: (
          <Icon
            as={HiOutlineExclamationCircle}
            fontSize="2.4rem"
            color="blue.300"
          />
        ),
        bgColor: '#253046',
        color: 'white'
      }
    case 'error':
      return {
        icon: (
          <Icon
            as={HiOutlineExclamationCircle}
            fontSize="2.4rem"
            color="red.700"
          />
        ),
        bgColor: '#41292A',
        color: 'white'
      }
    default:
      return {
        icon: null,
        bgColor: 'initial',
        color: 'initial'
      }
  }
}
export const ChakraProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider>
      <_ChakraProvider
        cssVarsRoot="body"
        theme={theme}
        toastOptions={{
          defaultOptions: {
            duration: 4000,
            position: 'top-right', // it has styles with this keyword in the globalStyles.ts file
            render(props: any): React.ReactNode {
              const { bgColor, color, icon } = colorScheme(
                props.status as string
              )

              return (
                <Alert
                  borderRadius="1.2rem"
                  bgColor={bgColor}
                  color={color}
                  p="1.46rem"
                  fontSize="1.4rem"
                >
                  {icon ? (
                    <AlertIcon
                      boxSize="2.6rem"
                      display="flex"
                      alignItems="center"
                    >
                      {icon}
                    </AlertIcon>
                  ) : null}
                  <AlertTitle m={0} fontSize="1.6rem">
                    {props.title}
                  </AlertTitle>
                </Alert>
              )
            }
          }
        }}
      >
        {children}
      </_ChakraProvider>
    </CacheProvider>
  )
}
