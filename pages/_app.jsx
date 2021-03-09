import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

function CustomApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeStart = (url, options) => {
      console.log('routeChangeStart', url, options)

      NProgress.start()
    }
    const handleRouteChangeComplete = (url, options) => {
      console.log('routeChangeComplete', url, options)

      NProgress.done()
    }
    const handleRouteChangeError = (err, url, options) => {
      console.log('routeChangeError', err, url, options)

      NProgress.done()
    }
    const handleHistoryChange = (url, options) => {
      console.log('beforeHistoryChange', url, options)
    }
    const handleHashChangeStart = (url, options) => {
      console.log('hashChangeStart', url, options)
    }
    const handleHashChangeComplete = (url, options) => {
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
