'use client'

import GlobalProductsProvider from '@/contexts/GlobalItemContext'
import CartContentProvider from '@/contexts/CartContentContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import products from '@/app/ProductDatabase'

interface ProvidersProps {
    children: ReactNode 
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProductsProvider value={products}>
        <CartContentProvider>
        {children}
        </CartContentProvider>
      </GlobalProductsProvider>
    </QueryClientProvider>
  )
}