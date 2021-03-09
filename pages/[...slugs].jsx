import Page from '../components/Page'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      locale: locale ?? '-',
      slugs: params?.slugs,
    },
    revalidate: 1,
  }
}

export default Page
