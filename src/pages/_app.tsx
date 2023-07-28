import { CartProvider } from '@/context/cart/CartProvider'
import { UiProvider } from '@/context/ui/UiProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr/_internal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig
        value={{ fetcher: (resource, init) => fetch(resource, init).then(res => res.json()) }}
      >
        <UiProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </UiProvider>
        
      </SWRConfig>
    </>
  )
}
