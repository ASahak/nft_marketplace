// import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { RootProvider } from '@/providers'
import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function App() {
  // const account = useAccount()
  // const { connectors, connect, status, error } = useConnect()
  // const { disconnect } = useDisconnect()

  return (
    <RootProvider>
      <Flex direction="column" h="100vh" id="app">
        <Outlet />
      </Flex>
    </RootProvider>
  )
}

export default App
