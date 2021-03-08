import { GetStaticPropsContext } from 'next'

import { links } from './index'
import Page from '@link-test/components/Page'

function parseStringParameters(
  parameters?: string | string[],
  defaultValue: string[] = []
): string[] {
  if (parameters && typeof parameters === 'string') {
    return [parameters]
  }

  if (parameters && Array.isArray(parameters)) {
    return parameters
  }

  return defaultValue
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: ['page1'] },
        locale: 'en-GB',
      },
      {
        params: { slug: ['page2'] },
        locale: 'en-GB',
      },
      {
        params: { slug: ['page1'] },
        locale: 'da-DK',
      },
    ],
    // fallback: 'blocking',
    fallback: false,
  }
}

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  const slugs = parseStringParameters(params?.slug, [''])

  return {
    props: {
      locale,
      slugs,
      links,
    },
    revalidate: 1,
  }
}

export default Page
