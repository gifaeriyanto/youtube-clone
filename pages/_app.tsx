import { ChakraProvider } from '@chakra-ui/core';
import { customTheme } from '@components/theme';
import { AppProps } from 'next/app';
import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Hydrate } from 'react-query/hydration';

const queryCache = new QueryCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate>
        <ChakraProvider resetCSS theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </ReactQueryCacheProvider>
  );
};

export default App;
