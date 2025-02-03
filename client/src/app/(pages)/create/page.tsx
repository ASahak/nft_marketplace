import type { Metadata } from 'next'
import { Create } from '@/containers/create'

export const metadata: Metadata = {
  title: 'Create'
}

export default function CreatePage() {
  return <Create />
}
