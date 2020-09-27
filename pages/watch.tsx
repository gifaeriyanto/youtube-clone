import {
  useChannelDetail,
  useRelatedVideos,
  useVideoDetail,
} from '@api/youtubeAPI';
import { Box, Grid } from '@chakra-ui/core';
import ChannelPreview from '@components/channelPreview';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import VideoPreview from '@components/videoPreview';
import useIsomorphicLayoutEffect from '@utils/useIsoMorphicLayoutEffect';
import MainLayout from 'layouts/main';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

const Index: NextPage = () => {
  const router = useRouter();
  const [maximizedSidebar, setMaximizedSidebar] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0);
  const videoWrapper = useRef<HTMLDivElement>(null);
  const { isSuccess: isSuccessVideoData, data: videoData } = useVideoDetail(
    router.query.v as string,
  );
  const {
    isSuccess: isSuccessChannelData,
    data: channelData,
  } = useChannelDetail(
    isSuccessVideoData && videoData.items[0].snippet.channelId,
  );
  const {
    isSuccess: isSuccessRelatedVideos,
    data: relatedVideosData,
  } = useRelatedVideos(router.query.v as string, { limit: 10 });

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

  return (
    <>
      <Head>
        <title>Youtube Clone by Gifa Eriyanto</title>
        <meta name="description" content="Youtube Clone" />
      </Head>
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
            {isSuccessVideoData && (
              <VideoPreview
                width="100%"
                height={`${videoHeight}px`}
                data={videoData.items[0]}
              />
            )}

            {isSuccessChannelData && (
              <ChannelPreview data={channelData.items[0]} />
            )}
          </Box>
          {
            <Box>
              {isSuccessRelatedVideos &&
                relatedVideosData.items.map((item, index) => (
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
                      publishedAt={item.snippet.publishedAt}
                      variant="small"
                    />
                  </Box>
                ))}
            </Box>
          }
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
