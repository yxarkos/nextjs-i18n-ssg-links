import Page from '../components/Page'

export const links = [
  { href: '/' },
  { href: '/page1' },
  { href: '/page2' },
  { href: '/page3' },
]

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale: locale ?? '-',
      links,
      slugs: [],
    },
    revalidate: 1,
  }
}

export default Page
