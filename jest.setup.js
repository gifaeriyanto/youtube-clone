import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { customTheme } from '@components/theme';
import { render } from '@testing-library/react';
import React from 'react';

// matchMedia not present, legacy browsers require a polyfill
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

global.renderWithTheme = (component) => {
  return render(
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {component}
    </ThemeProvider>,
  );
};
