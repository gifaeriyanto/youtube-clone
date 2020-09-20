import { Box, Grid } from '@chakra-ui/core';
import Navbar from '@components/navbar/navbar';
import RichItem from '@components/richItem/richItem';
import { Sidebar } from '@components/sidebar/sidebar';
import Axios from 'axios';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [data, setData] = useState([]);
  const [minimizedSidebar, setMinimizedSidebar] = useState(false);

  useEffect(() => {
    Axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: 'AIzaSyAFewnugoIUByq1ovYeQmnejyr68fUUVLA',
        chart: 'mostPopular',
        part: 'snippet,statistics',
        maxResults: 20,
      },
    }).then((res: any) => {
      setData(res.data.items);
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
      views={item.statistics.viewCount}
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
