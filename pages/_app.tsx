import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { customTheme } from '@components/theme';
import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
