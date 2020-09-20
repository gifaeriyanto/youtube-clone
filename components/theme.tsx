import { theme } from '@chakra-ui/core';

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    youtube: '#FF0102',
  },
  fonts: {
    ...theme.fonts,
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
};
