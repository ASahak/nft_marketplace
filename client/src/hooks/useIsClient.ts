import { useState, useEffect } from 'react'

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Update state after the component has mounted
  }, [])

  return isClient
}
