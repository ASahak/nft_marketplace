import type { Metadata } from 'next'
import { CreateContract } from '@/containers/createContract'

export const metadata: Metadata = {
  title: 'Create Collection'
}

export default function CreateContractPage() {
  return <CreateContract />
}
