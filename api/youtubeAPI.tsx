import Axios from 'axios';
import {
  IYoutubeAPIChannels,
  IYoutubeAPIVideos,
  IYoutubeAPIVideosItems,
} from 'interfaces/youtubeAPI';

const baseUrl = 'https://www.googleapis.com/youtube/v3/';
const key = process.env.YOUTUBE_API_KEY;

interface IGetYoutubeVideosParams {
  part: string;
  chart?: string;
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

interface ISearchYoutubeVideosParams {
  part: string;
  type: string;
  id?: string;
  maxResults?: number;
  relatedToVideoId?: string;
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

export const getYoutubeVideoRating = (
  params: IGetYoutubeVideosParams,
): Promise<IYoutubeAPIVideosItems[]> => {
  return new Promise((resolve) => {
    Axios.get(baseUrl + 'videos/rating', {
      params: {
        key,
        ...params,
      },
    }).then((res: { data: IYoutubeAPIVideos }) => {
      resolve(res.data.items);
    });
  });
};

export const getYoutubeChannels = (
  params: IGetYoutubeChannelsParams,
): Promise<IYoutubeAPIChannels[]> => {
  return new Promise((resolve) => {
    Axios.get(baseUrl + 'channels', {
      params: {
        key,
        ...params,
      },
    }).then(
      (res: {
        data: {
          items: IYoutubeAPIChannels[];
        };
      }) => {
        resolve(res.data.items);
      },
    );
  });
};

export const searchYoutubeVideos = (
  params: ISearchYoutubeVideosParams,
): Promise<IYoutubeAPIVideosItems[]> => {
  return new Promise((resolve) => {
    Axios.get(baseUrl + 'search', {
      params: {
        key,
        ...params,
      },
    }).then((res: { data: IYoutubeAPIVideos }) => {
      resolve(res.data.items);
    });
  });
};
