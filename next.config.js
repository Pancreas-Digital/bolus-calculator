const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  return {
    env: {
      siteUrl: phase === PHASE_DEVELOPMENT_SERVER ? 'http://localhost:3000' : 'https://calculadora.pancreas.digital',
      siteTitle: 'Pancreas Digital - Calculadora de bolos',
      siteDescription: 'Calculadora de bolos de insulina para el control de la diabetes.',
      siteLogo: 'Vertical.jpg',
      siteName: 'Pancreas Digital',
      twitterCard: 'summary_large_image',
      twitterImageAlt: 'Pancreas Digital Logo',
      twitterSite: '@PancreasDigital',
    },
    reactStrictMode: true,
    i18n: {
      locales: ['es-AR', 'en-US'],
      localeDetection: true,
      defaultLocale: 'es-AR',
    },
  };
};
