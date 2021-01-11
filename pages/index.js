import Head from 'next/head';
import { Calculator } from '@components';
import { ChakraProvider, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <div>
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
          <title>Calculadora de bolos de insulina - Diabetes</title>
        </Head>
        <Box bg="blue.50" minHeight="100vh">
          <Calculator />
        </Box>
      </div>
    </ChakraProvider>
  );
}
