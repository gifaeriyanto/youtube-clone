import { useVideos } from '@api/youtubeAPI';
import { Grid } from '@chakra-ui/core';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import MainLayout from 'layouts/main';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

const Index: NextPage = () => {
  const [minimizedSidebar, setMinimizedSidebar] = useState(false);
  const { isSuccess, data, error } = useVideos({
    limit: 40,
  });

  return (
    <>
      <Head>
        <title>Youtube Clone by Gifa Eriyanto</title>
        <meta name="description" content="Youtube Clone" />
      </Head>
      <Navbar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <Sidebar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <MainLayout variant={minimizedSidebar ? 'onMinimized' : undefined}>
        {error && <span>{(error as any).message}</span>}
        {isSuccess && (
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={6}
          >
            {data.items.map((item) => (
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
            ))}
          </Grid>
        )}
      </MainLayout>
    </>
  );
};

export default Index;
