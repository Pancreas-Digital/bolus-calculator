import Head from 'next/head';
import { Calculator, Navbar } from '@components';
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
          <title>Pancreas Digital - Calculadora de Bolo</title>
        </Head>
        <Box bg="blue.300" minHeight="100vh">
          <Navbar />
          <Calculator />
        </Box>
      </div>
    </ChakraProvider>
  );
}
