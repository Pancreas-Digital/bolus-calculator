import Head from 'next/head';
import Calculator from '@components/Calculator';
import { ChakraProvider } from "@chakra-ui/react"

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>Calculadora V1</title>
        </Head>
        <Calculator />
      </div>
    </ChakraProvider>
  );
};