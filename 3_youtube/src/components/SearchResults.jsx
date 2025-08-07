import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../../utils/constants';
import VideoCard from './VideoCard';

function SearchResults() {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('search_query'));
  const queryString = searchParams.get('search_query');

  useEffect(() => {
    getVideos();
  }, []);

  //https://developers.google.com/youtube/v3/docs/search/list - get search list api
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + queryString);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="flex flex-col mt-25">
      {videos.map((video) => {
        if (video.id.kind === 'youtube#video') {
          return (
            <Link to={'/watch?v=' + video.id.videoId} key={video.id.videoId}>
              <div className="p-2 m-2  h-[120px] flex mb-24 ">
                <img
                  className="rounded-lg w-[368px] h-[201px] "
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <div className="ml-5 w-[600px]">
                  <ul>
                    <li className="text-xl font-bold">
                      {video?.snippet?.title}
                    </li>
                    <li>{video?.snippet?.channelTitle}</li>
                    {/* <li>{video?.snippet?.description}</li> */}
                    <li>
                      Published at:{' '}
                      {new Date(
                        video?.snippet?.publishedAt
                      ).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default SearchResults;
