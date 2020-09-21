import { getChannels } from '@api/youtubeAPI';
import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/core';
import { formatDistanceToNow } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ShortNumber from 'short-number';

interface IRichItem {
  thumbnail: string;
  avatar: string;
  title: string;
  channelTitle: string;
  channelId: string;
  views: number;
  publishedAt: Date;
}

const RichItem: React.FC<IRichItem> = ({
  thumbnail,
  title,
  channelTitle,
  channelId,
  views,
  publishedAt,
}) => {
  const [channelAvatar, setChannelAvatar] = useState('');

  useEffect(() => {
    getChannels({
      part: 'snippet',
      id: channelId,
    }).then((channels) => {
      setChannelAvatar(channels[0].snippet.thumbnails.default.url);
    });
  }, [channelId]);

  return (
    <Box>
      <Box
        w="100%"
        h="180px"
        bgImage={`url(${thumbnail})`}
        bgPos="center"
        bgSize="cover"
        mb={4}
      />
      <Flex>
        <Avatar
          name={channelTitle}
          src={channelAvatar}
          mr={4}
          w="36px"
          h="36px"
        />
        <Box>
          <Heading as="h3" size="sm" maxHeight="40px" overflow="hidden" mb={2}>
            {title}
          </Heading>
          <Text color="gray.600" fontSize="sm">
            {channelTitle}
          </Text>
          <Text color="gray.600" fontSize="sm">
            {ShortNumber(views) || 0} views -{' '}
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default RichItem;
