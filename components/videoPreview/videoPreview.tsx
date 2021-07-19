import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/core';
import { formatDistanceToNow } from 'date-fns';
import { IYoutubeAPIVideoItem } from 'interfaces/youtubeAPI';
import React from 'react';
import { IoMdShareAlt } from 'react-icons/io';
import { MdPlaylistAdd, MdThumbDown, MdThumbUp } from 'react-icons/md';
import YouTube from 'react-youtube';
import ShortNumber from 'short-number';

interface IVideoPreview {
  width?: string;
  height?: string;
  data: IYoutubeAPIVideoItem;
}

const VideoPreview: React.FC<IVideoPreview> = ({ width, height, data }) => {
  if (!data.snippet) {
    return null;
  }

  return (
    <>
      <YouTube
        videoId={data.id}
        opts={{
          width: width || '640px',
          height: height || '320px',
        }}
      />

      <Heading as="h1" size="md" mt={6} fontWeight="medium">
        {data.snippet.title}
      </Heading>
      <Flex justify="space-between" mt={2}>
        <Text color="gray.600" fontSize="sm">
          {ShortNumber(Number(data.statistics.viewCount))} views -{' '}
          {formatDistanceToNow(new Date(data.snippet.publishedAt), {
            addSuffix: true,
          })}
        </Text>
        <Box>
          <Button
            colorScheme="gray"
            variant="link"
            textTransform="uppercase"
            size="sm"
            pb={2}
            pl={2}
            pr={2}
            borderBottom="2px solid #718196"
            borderRadius={0}
          >
            <Icon as={MdThumbUp} mr={2} fontSize="lg" />
            {ShortNumber(Number(data.statistics.likeCount))}
          </Button>
          <Button
            colorScheme="gray"
            variant="link"
            textTransform="uppercase"
            size="sm"
            pb={2}
            pl={2}
            pr={2}
            borderBottom="2px solid #718196"
            borderRadius={0}
          >
            <Icon as={MdThumbDown} mr={2} fontSize="lg" />
            {ShortNumber(Number(data.statistics.dislikeCount))}
          </Button>
          <Button
            colorScheme="gray"
            variant="link"
            textTransform="uppercase"
            size="sm"
            pb={2}
            pl={2}
            pr={2}
          >
            <Icon as={IoMdShareAlt} mr={2} fontSize="lg" />
            Share
          </Button>
          <Button
            colorScheme="gray"
            variant="link"
            textTransform="uppercase"
            size="sm"
            pb={2}
            pl={2}
            pr={2}
          >
            <Icon as={MdPlaylistAdd} mr={2} fontSize="lg" />
            Save
          </Button>
        </Box>
      </Flex>
      <Divider borderColor="gray.400" />
    </>
  );
};

export default VideoPreview;
