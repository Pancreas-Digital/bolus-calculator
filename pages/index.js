import Head from 'next/head';
import { Calculator, Navbar } from '@components';
import { ChakraProvider, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XR9HVSZTNT" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XR9HVSZTNT');
        `,
          }}
        />
        <title>{process.env.siteTitle}</title>

        <meta property="og:title" content={process.env.siteTitle} />
        <meta property="og:description" content={process.env.siteDescription} />
        <meta property="og:image" content={process.env.siteUrl + '/' + process.env.siteLogo} />
        <meta property="og:url" content={process.env.siteUrl} />
        <meta property="og:site_name" content={process.env.siteName} />
        <meta name="twitter:card" content={process.env.twitterCard} />
        <meta name="twitter:image:alt" content={process.env.twitterImageAlt} />
        <meta name="twitter:site" content={process.env.twitterSite}></meta>
      </Head>
      <Box bg="blue.300" minHeight="100vh">
        <Navbar />
        <Calculator />
      </Box>
    </ChakraProvider>
  );
}
