import React from 'react'
import Link, { LinkProps } from 'next/link'

export default function Page({
  locale,
  slugs,
  links,
}: {
  locale?: string
  slugs: string[]
  links: LinkProps[]
}) {
  return (
    <div>
      {links.map(({ href }: LinkProps, index: number) => (
        <div key={index}>
          <Link href={href} locale={false}>
            <a href={href.toString()}>Link to &quot;{href.toString()}&quot;</a>
            {/* <a>Link to {href.toString()}</a> */}
          </Link>
        </div>
      ))}
      <div>Locale: {locale}</div>
      <div>Slug: {slugs.join(', ')}</div>
    </div>
  )
}
