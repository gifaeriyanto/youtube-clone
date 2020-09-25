export interface IYoutubeAPIVideosItems {
  kind: string;
  etag: string;
  id: string;
  snippet?: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    publishTime?: string;
    defaultLanguage?: string;
    defaultAudioLanguage?: string;
  };
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction: {
      allowed: string[];
      blocked: string[];
    };
    contentRating: {
      acbRating: string;
      agcomRating: string;
      anatelRating: string;
      bbfcRating: string;
      bfvcRating: string;
      bmukkRating: string;
      catvRating: string;
      catvfrRating: string;
      cbfcRating: string;
      cccRating: string;
      cceRating: string;
      chfilmRating: string;
      chvrsRating: string;
      cicfRating: string;
      cnaRating: string;
      cncRating: string;
      csaRating: string;
      cscfRating: string;
      czfilmRating: string;
      djctqRating: string;
      djctqRatingReasons: string[];
      ecbmctRating: string;
      eefilmRating: string;
      egfilmRating: string;
      eirinRating: string;
      fcbmRating: string;
      fcoRating: string;
      fmocRating: string;
      fpbRating: string;
      fpbRatingReasons: string[];
      fskRating: string;
      grfilmRating: string;
      icaaRating: string;
      ifcoRating: string;
      ilfilmRating: string;
      incaaRating: string;
      kfcbRating: string;
      kijkwijzerRating: string;
      kmrbRating: string;
      lsfRating: string;
      mccaaRating: string;
      mccypRating: string;
      mcstRating: string;
      mdaRating: string;
      medietilsynetRating: string;
      mekuRating: string;
      mibacRating: string;
      mocRating: string;
      moctwRating: string;
      mpaaRating: string;
      mpaatRating: string;
      mtrcbRating: string;
      nbcRating: string;
      nbcplRating: string;
      nfrcRating: string;
      nfvcbRating: string;
      nkclvRating: string;
      oflcRating: string;
      pefilmRating: string;
      rcnofRating: string;
      resorteviolenciaRating: string;
      rtcRating: string;
      rteRating: string;
      russiaRating: string;
      skfilmRating: string;
      smaisRating: string;
      smsaRating: string;
      tvpgRating: string;
      ytRating: string;
    };
    projection: string;
    hasCustomThumbnail: boolean;
  };
  status?: {
    uploadStatus: string;
    failureReason: string;
    rejectionReason: string;
    privacyStatus: string;
    publishAt: Date | string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  player?: {
    embedHtml: string;
    embedHeight: string;
    embedWidth: string;
  };
  topicDetails?: {
    topicIds: string[];
    relevantTopicIds: string[];
    topicCategories: string[];
  };
  recordingDetails?: {
    recordingDate: Date | string;
  };
  fileDetails?: {
    fileName: string;
    fileSize: string;
    fileType: string;
    container: string;
    videoStreams: {
      widthPixels: number;
      heightPixels: number;
      frameRateFps: number;
      aspectRatio: number;
      codec: string;
      bitrateBps: string;
      rotation: string;
      vendor: string;
    }[];
    audioStreams: {
      channelCount: number;
      codec: string;
      bitrateBps: string;
      vendor: string;
    }[];
    durationMs: string;
    bitrateBps: string;
    creationTime: string;
  };
  processingDetails?: {
    processingStatus: string;
    processingProgress: {
      partsTotal: string;
      partsProcessed: string;
      timeLeftMs: string;
    };
    processingFailureReason: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions?: {
    processingErrors: string[];
    processingWarnings: string[];
    processingHints: string[];
    tagSuggestions: {
      tag: string;
      categoryRestricts: string[];
    }[];
    editorSuggestions: string[];
  };
  liveStreamingDetails?: {
    actualStartTime: Date | string;
    actualEndTime: Date | string;
    scheduledStartTime: Date | string;
    scheduledEndTime: Date | string;
    concurrentViewers: string;
    activeLiveChatId: string;
  };
  localizations?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

export interface IYoutubeAPIVideos {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IYoutubeAPIVideosItems[];
}

export interface IYoutubeAPIChannels {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: string;
        height: string;
      };
    };
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      favorites: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string; // this value is rounded to three significant figures
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
  topicDetails: {
    topicIds: string[];
    topicCategories: string[];
  };
  status: {
    privacyStatus: string;
    isLinked: boolean;
    longUploadsStatus: string;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      defaultTab: string;
      trackingAnalyticsAccountId: string;
      moderateComments: boolean;
      showRelatedChannels: boolean;
      showBrowseView: boolean;
      featuredChannelsTitle: string;
      featuredChannelsUrls: string[];
      unsubscribedTrailer: string;
      profileColor: string;
      defaultLanguage: string;
      country: string;
    };
    watch: {
      textColor: string;
      backgroundColor: string;
      featuredPlaylistId: string;
    };
  };
  auditDetails: {
    overallGoodStanding: boolean;
    communityGuidelinesGoodStanding: boolean;
    copyrightStrikesGoodStanding: boolean;
    contentIdClaimsGoodStanding: boolean;
  };
  contentOwnerDetails: {
    contentOwner: string;
    timeLinked: Date | string;
  };
  localizations: (
    key,
  ) => {
    title: string;
    description: string;
  };
}
