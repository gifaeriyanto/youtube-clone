import { Box, Container } from '@chakra-ui/core';
import React from 'react';

interface IMainLayout {
  variant?: 'onDrawer' | 'onMinimized';
}

const MainLayout: React.FC<IMainLayout> = ({ variant, children }) => {
  const setPaddingLeft = () => {
    switch (variant) {
      case 'onDrawer':
        return '25px';

      case 'onMinimized':
        return '95px';

      default:
        return '265px';
    }
  };

  return (
    <Box
      pl={{
        base: '50px',
        sm: '50px',
        md: setPaddingLeft(),
      }}
      pr="25px"
      pt="80px"
      pb="100px"
      bg="gray.50"
      minH="100vh"
    >
      {variant === 'onDrawer' ? (
        <Container maxW="calc(100vw - 100px)">{children}</Container>
      ) : (
        children
      )}
    </Box>
  );
};

export default MainLayout;
