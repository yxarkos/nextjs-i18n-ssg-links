/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = (url: any, options: any) => {
      console.log('routeChangeStart', url, options)
    }
    const handleRouteChangeComplete = (url: any, options: any) => {
      console.log('routeChangeComplete', url, options)
    }
    const handleRouteChangeError = (err: any, url: any, options: any) => {
      console.log('routeChangeError', err, url, options)
    }
    const handleHistoryChange = (url: any, options: any) => {
      console.log('beforeHistoryChange', url, options)
    }
    const handleHashChangeStart = (url: any, options: any) => {
      console.log('hashChangeStart', url, options)
    }
    const handleHashChangeComplete = (url: any, options: any) => {
      console.log('hashChangeComplete', url, options)
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    router.events.on('beforeHistoryChange', handleHistoryChange)
    router.events.on('hashChangeStart', handleHashChangeStart)
    router.events.on('hashChangeComplete', handleHashChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
      router.events.off('beforeHistoryChange', handleHistoryChange)
      router.events.off('hashChangeStart', handleHashChangeStart)
      router.events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default CustomApp
