import { useSearchVideos } from '@api/youtubeAPI';
import { Container, Divider, Flex, Icon, Text, VStack } from '@chakra-ui/core';
import Error from '@components/error';
import Navbar from '@components/navbar';
import RichItem from '@components/richItem';
import Sidebar from '@components/sidebar';
import MainLayout from 'layouts/main';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdTune } from 'react-icons/md';

interface IResult {
  keyword?: string;
}

const Result: NextPage<IResult> = ({ keyword }) => {
  const [minimizedSidebar, setMinimizedSidebar] = useState(false);
  const router = useRouter();
  const { isSuccess, data, error } = useSearchVideos(keyword, {
    limit: 40,
  });

  useEffect(() => {
    if (!keyword) {
      router.back();
    }
  }, [keyword]);

  return (
    <>
      <Head>
        <title>Youtube Clone by Gifa Eriyanto</title>
        <meta name="description" content="Youtube Clone" />
      </Head>

      <Navbar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <Sidebar onMinimized={setMinimizedSidebar} minimized={minimizedSidebar} />
      <MainLayout variant={minimizedSidebar ? 'onMinimized' : undefined}>
        {error && (
          <Error
            status={(error as any).response.status}
            message={(error as any).response.data.error.message}
          />
        )}
        {isSuccess && (
          <Container maxW="xl">
            <VStack spacing={4} align="flex-start">
              <Flex align="center" color="gray.600">
                <Icon as={MdTune} mr={2} fontSize="xl" />
                <Text fontSize="sm">FILTER</Text>
              </Flex>
              <Divider borderColor="gray.300" />
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
                  publishedAt={item.snippet.publishedAt}
                  description={item.snippet.description}
                  variant="list-large"
                />
              ))}
            </VStack>
          </Container>
        )}
      </MainLayout>
    </>
  );
};

Result.getInitialProps = async ({ query }) => {
  return {
    keyword:
      typeof query.search_query === 'string' ? query.search_query : undefined,
  };
};

export default Result;
