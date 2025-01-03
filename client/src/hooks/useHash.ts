'use client'

import { usePathname } from 'next/navigation'

export const useHash = () => {
  const pathname = usePathname()
  const hashIndex = pathname.indexOf('#')

  // Extract and decode the hash if it exists
  const hash = hashIndex !== -1 ? pathname.substring(hashIndex + 1) : ''

  return decodeURIComponent(hash)
}
