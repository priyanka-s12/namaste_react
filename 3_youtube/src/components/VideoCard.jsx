function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg w-72 cursor-pointer">
      <img src={thumbnails.medium.url} alt={title} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-800">
      <VideoCard info={info} />
      <p className="font-bold m-3">Ad</p>
    </div>
  );
};

export default VideoCard;
