const GOOGLE_API_KEY = 'AIzaSyBrDL0_gNDmBioeNM2p2YhXA9DVU4FIQT8';

export const YOUTUBE_VIDEO_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' +
  GOOGLE_API_KEY +
  '&q=';

export const LIVE_CHAT_COUNT = 20;
