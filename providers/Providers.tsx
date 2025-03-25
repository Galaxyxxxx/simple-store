'use client'

import {GlobalProductsContextProvider} from '@/contexts/GlobalItemContext'
import {CartContentContextProvider} from '@/contexts/CartContentContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import {SearchContextProvider} from '@/contexts/SearchContext'
import { GlobalCategoriesContextProvider } from '@/contexts/GlobalCategoryContext'
import { FilterContextProvider } from '@/contexts/FilterContext'

interface ProvidersProps {
    children: ReactNode 
}

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProductsContextProvider>
        <CartContentContextProvider>
          <SearchContextProvider>
            <GlobalCategoriesContextProvider>
              <FilterContextProvider>
        {children}
              </FilterContextProvider>
            </GlobalCategoriesContextProvider>
          </SearchContextProvider>
        </CartContentContextProvider>
      </GlobalProductsContextProvider>
    </QueryClientProvider>
  )
}