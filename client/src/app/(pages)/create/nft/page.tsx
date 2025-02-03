import type { Metadata } from 'next'
import { CreateNFT } from '@/containers/createNFT'
import { CreateNFTProvider } from '@/providers'

export const metadata: Metadata = {
  title: 'Create NFT'
}

export default function CreateNFTPage() {
  return (
    <CreateNFTProvider>
      <CreateNFT />
    </CreateNFTProvider>
  )
}
