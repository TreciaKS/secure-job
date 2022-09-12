import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <title>Secure Job</title>
        <meta name="description" content="Job vacancies at your disposal" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
