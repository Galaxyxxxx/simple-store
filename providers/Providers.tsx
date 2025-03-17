'use client'

import {GlobalProductsContextProvider} from '@/contexts/GlobalItemContext'
import {CartContentContextProvider} from '@/contexts/CartContentContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface ProvidersProps {
    children: ReactNode 
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProductsContextProvider>
        <CartContentContextProvider>
        {children}
        </CartContentContextProvider>
      </GlobalProductsContextProvider>
    </QueryClientProvider>
  )
}