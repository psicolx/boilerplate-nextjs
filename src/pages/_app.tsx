import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Psicolx - Plataforma da Saúde Emocional</title>
        {/* <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" /> */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Psicolx onde Psicologos curam a Saúde Emocional"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
