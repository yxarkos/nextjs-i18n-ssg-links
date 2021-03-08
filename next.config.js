const i18nConfiguration = [
  {
    defaultLocale: 'en-GB',
    domains: ['localhost:3000'],
    http: true,
  },
  {
    defaultLocale: 'da-DK',
    domains: ['localhost:3000'],
    http: true,
  },
  {
    defaultLocale: 'de-DE',
    domains: ['localhost:3000'],
    http: true,
  },
  {
    defaultLocale: 'sv-SE',
    domains: ['localhost:3000'],
    http: true,
  },
  {
    defaultLocale: 'fi-FI',
    domains: ['localhost:3000'],
    http: true,
  },
]

module.exports = () => {
  return {
    target: 'serverless',
    i18n: {
      localeDetection: false,
      locales: ['da-DK', 'en-GB', 'de-DE', 'sv-SE', 'fi-FI'],
      defaultLocale: 'en-GB',
      domains: i18nConfiguration
        .map(({ defaultLocale, domains, http }) =>
          domains.map((domain) => {
            const config = {
              domain,
              defaultLocale,
            }

            if (http !== undefined) {
              config.http = http
            }

            return config
          })
        )
        .flat(),
    },
  }
}
