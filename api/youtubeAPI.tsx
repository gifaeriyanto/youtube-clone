import Axios, { AxiosResponse } from 'axios';
import {
  IYoutubeAPIChannels,
  IYoutubeAPIChannelItem,
  IYoutubeAPIVideos,
  IYoutubeAPIVideoItem,
} from 'interfaces/youtubeAPI';
import { useQuery } from 'react-query';

const baseUrl = 'https://www.googleapis.com/youtube/v3/';
const key = process.env.YOUTUBE_API_KEY;

interface IGetYoutubeVideosParams {
  limit: number;
}

interface IGetYoutubeChannelsParams {
  part: string;
  id?: string;
  maxResults?: number;
  myRating?: 'like' | 'dislike';
}

interface ISearchYoutubeVideosParams {
  part: string;
  type: string;
  id?: string;
  maxResults?: number;
  relatedToVideoId?: string;
}

export const useVideos = ({ limit }: IGetYoutubeVideosParams) => {
  return useQuery('videos', async () => {
    const { data }: AxiosResponse<IYoutubeAPIVideos> = await Axios.get(
      baseUrl + 'videos',
      {
        params: {
          key,
          chart: 'mostPopular',
          part: 'snippet,statistics',
          maxResults: limit,
        },
      },
    );
    return data;
  });
};

export const useVideoDetail = (id: string | number) => {
  return useQuery(
    ['videoDetail', id],
    async () => {
      const { data }: AxiosResponse<IYoutubeAPIVideos> = await Axios.get(
        baseUrl + 'videos',
        {
          params: {
            key,
            id,
            part: 'snippet,statistics',
          },
        },
      );
      return data;
    },
    {
      enabled: id,
    },
  );
};

export const useChannelDetail = (id: string | number) => {
  return useQuery(
    ['channelDetail', id],
    async () => {
      const { data }: AxiosResponse<IYoutubeAPIChannels> = await Axios.get(
        baseUrl + 'channels',
        {
          params: {
            key,
            part: 'snippet,statistics',
            id,
          },
        },
      );
      return data;
    },
    {
      enabled: id,
    },
  );
};

export const useRelatedVideos = (
  id: string | number,
  { limit }: IGetYoutubeVideosParams,
) => {
  return useQuery(
    'searchVideos',
    async () => {
      const { data }: AxiosResponse<IYoutubeAPIVideos> = await Axios.get(
        baseUrl + 'search',
        {
          params: {
            key,
            part: 'snippet',
            type: 'video',
            relatedToVideoId: id,
            maxResults: limit,
          },
        },
      );
      return data;
    },
    {
      enabled: id,
    },
  );
};

export const useSearchVideos = (
  keyword: string,
  { limit }: IGetYoutubeVideosParams,
) => {
  return useQuery('searchVideos', async () => {
    const { data }: AxiosResponse<IYoutubeAPIVideos> = await Axios.get(
      baseUrl + 'search',
      {
        params: {
          key,
          part: 'snippet',
          type: 'video',
          q: keyword,
          maxResults: limit,
        },
      },
    );
    return data;
  });
};
