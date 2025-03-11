'use client'

import {GlobalProductsContextProvider} from '@/contexts/GlobalItemContext'
import {CartContentContextProvider} from '@/contexts/CartContentContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import products from '@/app/ProductDatabase'
import Store from '@/types/store'
import useProducts from '@/data-hooks/useProducts'

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