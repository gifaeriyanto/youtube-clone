import { ChakraProvider } from '@chakra-ui/core';
import { customTheme } from '@components/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Youtube Clone by Gifa Eriyanto</title>
        <meta name="description" content="Youtube Clone" />
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
