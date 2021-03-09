module.exports = () => {
  return {
    target: 'serverless',
    i18n: {
      locales: ['en-GB', 'da-DK', 'de-DE', 'sv-SE', 'fi-FI'],
      defaultLocale: 'en-GB',
      domains: [
        {
          domain: 'localhost:3000',
          defaultLocale: 'da-DK',
          http: true
        }
      ]
    }
  }
}
