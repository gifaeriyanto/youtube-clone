import { getYoutubeVideos } from '@api/youtubeAPI';
import { Grid } from '@chakra-ui/core';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import { IYoutubeAPIVideosItems } from 'interfaces/youtubeAPI';
import MainLayout from 'layouts/main';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [data, setData] = useState<IYoutubeAPIVideosItems[]>([]);
  const [minimizedSidebar, setMinimizedSidebar] = useState(false);

  useEffect(() => {
    getYoutubeVideos({
      chart: 'mostPopular',
      part: 'snippet,statistics',
      maxResults: 40,
    }).then((videos) => {
      setData(videos);
    });
  }, []);

  const listData = data.map((item) => (
    <RichItem
      key={item.id}
      id={item.id}
      thumbnail={
        item.snippet.thumbnails.standard?.url ||
        item.snippet.thumbnails.medium?.url
      }
      avatar={item.snippet.thumbnails.default.url}
      title={item.snippet.title}
      channelId={item.snippet.channelId}
      channelTitle={item.snippet.channelTitle}
      views={Number(item.statistics.viewCount)}
      publishedAt={item.snippet.publishedAt}
    />
  ));

  return (
    <>
      <Navbar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <Sidebar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <MainLayout variant={minimizedSidebar ? 'onMinimized' : undefined}>
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {listData}
        </Grid>
      </MainLayout>
    </>
  );
};

export default Index;
