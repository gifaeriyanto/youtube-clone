import { getYoutubeVideos } from '@api/youtubeAPI';
import { Box, Grid } from '@chakra-ui/core';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import { IYoutubeAPIVideosItems } from 'interfaces/youtubeAPI';
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
      thumbnail={item.snippet.thumbnails.standard.url}
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
      <Box
        pl={{
          base: '50px',
          sm: '50px',
          md: minimizedSidebar ? '140px' : '270px',
        }}
        pr="50px"
        pt="80px"
        pb="100px"
      >
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
      </Box>
    </>
  );
};

export default Index;
