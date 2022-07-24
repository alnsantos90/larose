import type { AppProps } from 'next/app'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { WhatsappLogo } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  const [scrollTop, setScrollTop] = useState(false)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosition(window.scrollY)
      if (window.scrollY > 180) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    })
  }, [scrollTop])

  const router = useRouter()

  function handleWhatsApp() {
    router.push(
      `https://wa.me/5519988990107?text=Olá,%20gostaria%20de%20agendar%20um%20horário!!`
    )
  }
  return (
    <>
      <Head>
        <title>La Rose Beleza</title>
        <meta property="og:title" content="Procedimentos | Larosebeleza" />
        <meta
          property="og:url"
          content="https://www.larosebeleza.com/proceeding"
        />
        <meta
          property="og:image"
          content="/assets/procedimentos/preenchimento.jpeg"
        />
        <meta property="og:site_name" content="Larosebeleza" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Procedimentos | Larosebeleza" />
        <meta
          name="description"
          content="A clinica La Rose oferece tratamentos rápidos ou terapêuticos, que objetivam a reabilitação ou melhora estética e da saúde de seus clientes, através de aplicações de cosméticos e terapias diversas."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      {scrollTop && (
        <div
          className={`fixed ${
            scrollTop && position < 900
              ? 'bottom-2'
              : position >= 920
              ? 'bottom-[100px]'
              : 'bottom-2'
          } right-2 md:right-10 md:bottom-[5.5rem] 
          rounded-full p-2 md:p-3 bg-green-500 shadow-xl z-50 cursor-pointer 
          animate-wiggle transition-colors duration-700 hover:animate-none hover:scale-[1.2] 

        `}
          onClick={handleWhatsApp}
        >
          <WhatsappLogo className="text-white text-4xl" />
        </div>
      )}

      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
