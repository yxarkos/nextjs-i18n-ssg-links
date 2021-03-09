import Page from '../components/Page'

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale ?? '-',
      slugs: [],
    },
    revalidate: 1,
  }
}

export default Page
