import React, { type ReactNode } from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  ChakraProvider as _ChakraProvider,
  Text,
  useColorMode
} from '@chakra-ui/react'
import theme from '@/styles/theme'

const colorScheme = (
  status: string,
  isDark: boolean
): { bgColor: string; color: string; icon: ReactNode | null } => {
  switch (status) {
    case 'success':
      return {
        icon: (
          <Text
            as="span"
            fontSize="2.4rem"
            className="icon-check-round"
            color="green.700"
          />
        ),
        bgColor: isDark ? '#1B3830' : '#CFECE2',
        color: isDark ? 'white' : 'black'
      }
    case 'info':
      return {
        icon: (
          <Text
            as="span"
            fontSize="2.4rem"
            className="icon-notification"
            color="blue.300"
          />
        ),
        bgColor: isDark ? '#253046' : '#D3DFFA',
        color: isDark ? 'white' : 'black'
      }
    case 'error':
      return {
        icon: (
          <Text
            as="span"
            fontSize="2.4rem"
            className="icon-notification"
            color="red.700"
          />
        ),
        bgColor: isDark ? '#41292A' : '#F1DBDB',
        color: isDark ? 'white' : 'black'
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
    <_ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          duration: 4000,
          position: 'top-right', // it has styles with this keyword in the globalStyles.ts file
          render(props: any): React.ReactNode {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { colorMode } = useColorMode()
            const isDark = colorMode === 'dark'
            const { bgColor, color, icon } = colorScheme(
              props.status as string,
              isDark
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
  )
}
