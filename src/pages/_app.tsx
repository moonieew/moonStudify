import store from '@/app/store'
import Layout from '@/components/Layout/Container'
import '@/styles/globals.css'
import { theme } from '@/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import 'react-quill/dist/quill.snow.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </UserProvider>
  )
}
