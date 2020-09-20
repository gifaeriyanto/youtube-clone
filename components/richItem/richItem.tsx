import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/core';
import Axios from 'axios';
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
  avatar,
  title,
  channelTitle,
  channelId,
  views,
  publishedAt,
}) => {
  const [channelAvatar, setChannelAvatar] = useState('');

  useEffect(() => {
    Axios.get('https://www.googleapis.com/youtube/v3/channels', {
      params: {
        id: channelId,
        key: 'AIzaSyAFewnugoIUByq1ovYeQmnejyr68fUUVLA',
        part: 'snippet',
      },
    }).then((res) => {
      setChannelAvatar(res.data.items[0].snippet.thumbnails.default.url);
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
            {ShortNumber(Number(views) || 0)} views -{' '}
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default RichItem;
