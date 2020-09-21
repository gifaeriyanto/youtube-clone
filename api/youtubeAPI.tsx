import Axios from 'axios';
import {
  IYoutubeAPIVideos,
  IYoutubeAPIVideosItems,
} from 'interfaces/youtubeAPI';

const baseUrl = 'https://www.googleapis.com/youtube/v3/';
const key = process.env.YOUTUBE_API_KEY;

interface IGetYoutubeVideosParams {
  part: string;
  chart: string;
  id?: string;
  maxResults?: number;
  myRating?: 'like' | 'dislike';
}

interface IGetYoutubeChannelsParams {
  part: string;
  id?: string;
  maxResults?: number;
  myRating?: 'like' | 'dislike';
}

export const getYoutubeVideos = (
  params: IGetYoutubeVideosParams,
): Promise<IYoutubeAPIVideosItems[]> => {
  return new Promise((resolve) => {
    Axios.get(baseUrl + 'videos', {
      params: {
        key,
        ...params,
      },
    }).then((res: { data: IYoutubeAPIVideos }) => {
      resolve(res.data.items);
    });
  });
};

export const getChannels = (params: IGetYoutubeChannelsParams) => {
  return new Promise((resolve) => {
    Axios.get(baseUrl + 'channels', {
      params: {
        key,
        ...params,
      },
    }).then((res: { data: IYoutubeAPIVideos }) => {
      resolve(res.data.items);
    });
  });
};
