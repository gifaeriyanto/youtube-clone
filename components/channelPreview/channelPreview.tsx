import { Avatar, Box, Button, Collapse, Flex, Text } from '@chakra-ui/core';
import { IYoutubeAPIChannels } from 'interfaces/youtubeAPI';
import React, { useState } from 'react';
import ShortNumber from 'short-number';

interface IChannelPreview {
  data: IYoutubeAPIChannels;
}

const ChannelPreview: React.FC<IChannelPreview> = ({ data }) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  return (
    <>
      <Flex alignItems="center" mt={4}>
        <Avatar
          name={data.snippet.title}
          src={data.snippet.thumbnails.default.url}
          mr={4}
          w="36px"
          h="36px"
        />
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            {data.snippet.title}
          </Text>
          <Text color="gray.600" fontSize="sm">
            {ShortNumber(Number(data.statistics.subscriberCount))} subscribers
          </Text>
        </Box>
        <Button
          ml="auto"
          colorScheme="red"
          bgColor="youtube"
          fontSize="sm"
          textTransform="uppercase"
        >
          Subscribe
        </Button>
      </Flex>

      <Box mt={6}>
        <Collapse
          startingHeight={40}
          isOpen={showMoreDescription}
          fontSize="sm"
        >
          {data.snippet.description}
        </Collapse>

        <Button
          size="sm"
          onClick={() => setShowMoreDescription(!showMoreDescription)}
          mt="1rem"
          variant="link"
          textTransform="uppercase"
          fontSize="sm"
        >
          Show {showMoreDescription ? 'Less' : 'More'}
        </Button>
      </Box>
    </>
  );
};

export default ChannelPreview;
