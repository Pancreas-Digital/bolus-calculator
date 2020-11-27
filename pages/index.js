import Head from "next/head";
import { Calculator } from "@components";
import { ChakraProvider, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Head>
          <title>Calculadora de bolos de insulina - Diabetes</title>
        </Head>
        <Box bg="blue.50" minHeight="100vh">
          <Calculator />
        </Box>
      </div>
    </ChakraProvider>
  );
}
