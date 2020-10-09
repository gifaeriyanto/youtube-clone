import { useChannelDetail } from '@api/youtubeAPI';
import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/core';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ShortNumber from 'short-number';

interface IRichItem {
  id: string;
  thumbnail: string;
  avatar: string;
  title: string;
  channelTitle: string;
  channelId: string;
  views?: number;
  publishedAt: string;
  variant?: 'list-small' | 'normal' | 'list-large';
  description?: string;
}

const RichItem: React.FC<IRichItem> = ({
  id,
  thumbnail,
  title,
  channelTitle,
  channelId,
  views,
  publishedAt,
  variant,
  description,
}) => {
  const [channelAvatar, setChannelAvatar] = useState('');
  const { status, data } = useChannelDetail(channelId);

  useEffect(() => {
    if (status === 'success') {
      setChannelAvatar(data.items[0]?.snippet.thumbnails.default.url);
    }
  }, [data]);

  switch (variant) {
    case 'list-small':
      return (
        <Link
          href={{
            pathname: '/watch',
            query: { v: typeof id === 'string' ? id : (id as any).videoId },
          }}
        >
          <Box cursor="pointer" as="a">
            <Flex>
              <Box
                w="200px"
                h="100px"
                bgImage={`url(${thumbnail})`}
                bgPos="center"
                bgSize="cover"
                mr={4}
                flexBasis="50%"
              />
              <Box flexBasis="50%">
                <Heading
                  as="h3"
                  size="xs"
                  maxHeight="34px"
                  overflow="hidden"
                  mb={1}
                >
                  {title}
                </Heading>
                <Text color="gray.600" fontSize="0.8rem">
                  {channelTitle}
                </Text>
                <Text color="gray.600" fontSize="0.8rem">
                  {views && `${ShortNumber(views)} views - `}
                  {formatDistanceToNow(new Date(publishedAt), {
                    addSuffix: true,
                  })}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Link>
      );

    case 'list-large':
      return (
        <Link
          href={{
            pathname: '/watch',
            query: { v: typeof id === 'string' ? id : (id as any).videoId },
          }}
        >
          <Box cursor="pointer" as="a">
            <Flex>
              <Box
                h="200px"
                bgImage={`url(${thumbnail})`}
                bgPos="center"
                bgSize="cover"
                mr={4}
                flexBasis="360px"
              />
              <Box flexBasis="50%">
                <Heading
                  as="h3"
                  size="xs"
                  maxHeight="40px"
                  overflow="hidden"
                  mb={1}
                  fontSize="md"
                >
                  {title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {views && `${ShortNumber(views)} views - `}
                  {formatDistanceToNow(new Date(publishedAt), {
                    addSuffix: true,
                  })}
                </Text>
                <Flex align="center" mt={4} mb={4}>
                  <Avatar
                    name={channelTitle}
                    src={channelAvatar}
                    mr={2}
                    w="24px"
                    h="24px"
                  />
                  <Text color="gray.600" fontSize="sm">
                    {channelTitle}
                  </Text>
                </Flex>
                {Boolean(description) && (
                  <Text
                    color="gray.600"
                    fontSize="sm"
                    maxH="40px"
                    overflow="hidden"
                  >
                    {description}
                  </Text>
                )}
              </Box>
            </Flex>
          </Box>
        </Link>
      );

    default:
      return (
        <Link
          href={{
            pathname: '/watch',
            query: { v: id },
          }}
        >
          <Box cursor="pointer" as="a">
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
                <Heading
                  as="h3"
                  size="sm"
                  maxHeight="40px"
                  overflow="hidden"
                  mb={2}
                >
                  {title}
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  {channelTitle}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {views && `${ShortNumber(views)} views - `}
                  {formatDistanceToNow(new Date(publishedAt), {
                    addSuffix: true,
                  })}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Link>
      );
  }
};

export default RichItem;
