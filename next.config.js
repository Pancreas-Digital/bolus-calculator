const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        siteUrl: 'http://localhost:3000',
        siteTitle: 'Pancreas Digital - Calculadora de bolos',
        siteDescription: 'Calculadora de bolos de insulina para el control de la diabetes.',
        siteLogo: 'Vertical.jpg',
        siteName: 'Pancreas Digital',
        twitterCard: 'summary_large_image',
        twitterImageAlt: 'Pancreas Digital Logo',
        twitterSite: '@fedemotta_',
      },
      reactStrictMode: true,
    };
  }

  return {
    /* config options for all phases except development here */
    env: {
      siteUrl: 'https://pancreas.digital',
      siteTitle: 'Pancreas Digital - Calculadora de bolos',
      siteDescription: 'Calculadora de bolos de insulina para el control de la diabetes.',
      siteLogo: 'Vertical.jpg',
      siteName: 'Pancreas Digital',
      twitterCard: 'summary_large_image',
      twitterImageAlt: 'Pancreas Digital Logo',
      twitterSite: '@fedemotta_',
    },
    reactStrictMode: true,
  };
};
