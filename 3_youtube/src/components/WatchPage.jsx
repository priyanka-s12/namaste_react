import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

function WatchPage() {
  const [searchParams] = useSearchParams();
  //   console.log(searchParams.get('v'));
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    async function fetchVideoDetails() {
      if (!videoId) return;
      //to get video title info
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        // console.log(data);

        if (data.items && data.items.length > 0) {
          setVideoData(data.items[0]);
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    }

    fetchVideoDetails();
  }, [videoId]);

  return (
    <div className="flex flex-col mt-24">
      <div className="px-7 m-5">
        {/* <iframe
        width="1000"
        height="500"
        // src="https://www.youtube.com/embed/934fLelTLuM?si=D9X3x4xIImCrqd4J"
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> */}
        {/*  youtube embed video */}
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {videoData && (
          <div className="mt-4">
            <h1 className="text-2xl font-bold">{videoData.snippet.title}</h1>
            <p className="text-gray-600 font-bold">
              {videoData.statistics.viewCount} views •{' '}
              {new Date(videoData.snippet.publishedAt).toLocaleDateString()}
            </p>
            {/* <p className="mt-2">{videoData.snippet.description}</p> */}
            {/* <p>Tags: </p>
          <ul>
            {videoData.snippet.tags.map((tag, index) => (
              <li key={index}>#{tag}</li>
            ))}
          </ul> */}
          </div>
        )}
      </div>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;
