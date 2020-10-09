import { Box, Text } from '@chakra-ui/core';
import React from 'react';

interface IError {
  status: number;
  message: string;
}

const Error: React.FC<IError> = ({ status, message }) => {
  return (
    <Box textAlign="center" pt={12}>
      <Text fontSize="30px" fontWeight="bold">
        {status}
      </Text>
      <span
        dangerouslySetInnerHTML={{
          __html: message,
        }}
      />
      {status === 403 && <span> Please try again tomorrow!</span>}
    </Box>
  );
};

export default Error;
