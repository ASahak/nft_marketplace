import ReactDOM from 'react-dom/client'
import { RouterProvider, ChakraProvider } from '@/providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <RouterProvider />
  </ChakraProvider>
)
