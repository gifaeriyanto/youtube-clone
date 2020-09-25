import {
  getYoutubeChannels,
  getYoutubeVideos,
  searchYoutubeVideos,
} from '@api/youtubeAPI';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  Text,
} from '@chakra-ui/core';
import ChannelPreview from '@components/channelPreview';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import VideoPreview from '@components/videoPreview';
import useIsomorphicLayoutEffect from '@utils/useIsoMorphicLayoutEffect';
import {
  IYoutubeAPIChannels,
  IYoutubeAPIVideosItems,
} from 'interfaces/youtubeAPI';
import MainLayout from 'layouts/main';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ShortNumber from 'short-number';

const Index: NextPage = () => {
  const [data, setData] = useState<IYoutubeAPIVideosItems>();
  const [channelData, setChannelData] = useState<IYoutubeAPIChannels>();
  const [relatedVideos, setRelatedVideos] = useState<IYoutubeAPIVideosItems[]>(
    [],
  );
  const [maximizedSidebar, setMaximizedSidebar] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0);
  const router = useRouter();
  const videoWrapper = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setVideoHeight(videoWrapper.current.offsetWidth / 1.8);
  };

  useEffect(() => {
    if (videoWrapper) {
      handleResize();
    }
  }, [videoWrapper]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (router.query.v) {
      getYoutubeVideos({
        id: router.query.v as string,
        part: 'snippet,statistics',
      }).then((videos) => {
        setData(videos[0]);
      });

      searchYoutubeVideos({
        part: 'snippet',
        relatedToVideoId: router.query.v as string,
        maxResults: 7,
        type: 'video',
      }).then((res) => {
        setRelatedVideos(res);
      });
    }
  }, [router]);

  useEffect(() => {
    if (data?.snippet) {
      getYoutubeChannels({
        part: 'snippet,statistics',
        id: data.snippet.channelId,
      }).then((channels) => {
        setChannelData(channels[0]);
      });
    }
  }, [data]);

  const listData = relatedVideos.map((item, index) => (
    <Box mb={4} key={index}>
      <RichItem
        key={item.id}
        id={item.id}
        thumbnail={
          item.snippet.thumbnails.medium?.url ||
          item.snippet.thumbnails.high?.url
        }
        avatar={item.snippet.thumbnails.default.url}
        title={item.snippet.title}
        channelId={item.snippet.channelId}
        channelTitle={item.snippet.channelTitle}
        // views={Number(item.statistics.viewCount)}
        views={100000}
        publishedAt={item.snippet.publishedAt}
        variant="small"
      />
    </Box>
  ));

  return (
    <>
      <Navbar onMinimized={setMaximizedSidebar} minimized={maximizedSidebar} />
      <Sidebar
        onMinimized={setMaximizedSidebar}
        minimized={maximizedSidebar}
        isOnDrawer
      />
      <MainLayout variant="onDrawer">
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: '3fr 1fr',
          }}
          gap={6}
        >
          <Box ref={videoWrapper}>
            {data && (
              <VideoPreview
                width="100%"
                height={`${videoHeight}px`}
                data={data}
              />
            )}

            {channelData && <ChannelPreview data={channelData} />}
          </Box>
          <Box>{listData}</Box>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
