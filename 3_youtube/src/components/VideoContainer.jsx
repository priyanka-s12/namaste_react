import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
  //state because it triggers recoincillation process
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };
  //make it work for 1 then scale it
  return (
    <div className="flex flex-wrap">
      {/* <VideoCard info={videos[0]} /> */}
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
