import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/suitcase.png" />
        <meta name="description" content="I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you." />
        <meta name="page-topic" content="Jsmarenco | Portfolio" />
        <meta name="page-type" content="website" />
        <meta name="page-url" content="https://jsmarenco-dev.web.app" />
        <meta property="og:title" content="Jsmarenco | Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jsmarenco-dev.web.app" />
        <meta property="og:description" content="I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you." />
        <meta property="og:site_name" content="Jsmarenco | Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="twitter:url" content="https://twitter.com/jsmarenco" />
        <meta property="twitter:title" content="Jsmarenco | Portfolio" />
        <meta property="twitter:description" content="I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you." />
        <title>JsMarenco | Portfolio</title>
      </Head>

      <Component {...pageProps} />
    </>)
}
