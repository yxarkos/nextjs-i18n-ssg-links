import React from 'react'
import Link from 'next/link'

export default function Page({ locale, slugs, links }) {
  return (
    <div>
      {links.map(({ href }, index) => (
        <div key={index}>
          <Link href={href}>
            <a href={href.toString()}>Link to &quot;{href.toString()}&quot;</a>
          </Link>
        </div>
      ))}

      <div>Locale: {locale}</div>
      <div>Slug: {slugs.join(', ')}</div>
    </div>
  )
}
