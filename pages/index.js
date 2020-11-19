import Head from 'next/head';
import Calculator from '@components/Calculator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Calculadora V1</title>
      </Head>
      <Calculator />
    </div>
  );
};