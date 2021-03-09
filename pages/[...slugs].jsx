import { links } from './index'
import Page from '../components/Page'

export async function getStaticPaths() {
  const paths = [
    {
      params: { slugs: ['page1'] },
      // locale: 'en-GB',
    },
    {
      params: { slugs: ['page2'] },
      // locale: 'en-GB',
    },
    {
      params: { slugs: ['page1'] },
      // locale: 'da-DK',
    },
  ]

  return {
    paths,
    fallback: 'blocking',
    // fallback: false,
  }
}

export async function getStaticProps({ locale, params }) {
  const parseStringParameters = (parameters, defaultValue) => {
    if (parameters && typeof parameters === 'string') {
      return [parameters]
    }

    if (parameters && Array.isArray(parameters)) {
      return parameters
    }

    return defaultValue
  }

  const slugs = parseStringParameters(params?.slugs, [''])

  return {
    props: {
      locale: locale ?? '-',
      slugs,
      links,
    },
    revalidate: 1,
  }
}

export default Page
