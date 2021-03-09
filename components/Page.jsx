import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/' },
  { href: '/page1' },
  { href: '/page2' },
  { href: '/page3' },
]

export default function Page({ locale, slugs }) {
  return (
    <div>
      <ul>
        {links.map(({ href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a href={href.toString()}>Link to &quot;{href.toString()}&quot;</a>
            </Link>
          </li>
        ))}
      </ul>

      <p>
        Locale: {locale}<br />
        Slugs: {slugs}
      </p>
    </div>
  )
}
