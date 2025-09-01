import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

//small modular code - separation of concern - testable code
function VideoBackground({ movieId }) {
  //   const [trailerId, setTrailerId] = useState(null);
  //   const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  //   console.log(trailerVideo);

  useMovieTrailer(movieId);

  //fetch trailer video & updating store with trailer video data
  //   const getMovieVideos = async () => {
  //     const data = await fetch(
  //       'https://api.themoviedb.org/3/movie/755898/videos?language=en-US',
  //       API_OPTIONS
  //     );
  //     const json = await data.json();
  //     // console.log(json);

  //     const filteredData = json.results.filter(
  //       (video) => video.type === 'Trailer'
  //     );
  //     const trailer = filteredData.length ? filteredData[0] : json.results[0];
  //     console.log(trailer);
  //     // setTrailerId(trailer.key);
  //     dispatch(addTrailerVideo(trailer));
  //   };

  //   useEffect(() => {
  //     getMovieVideos();
  //   }, []);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        // width="560"
        // height="315"
        src={
          'https://www.youtube.com/embed/' +
          trailerVideo?.key +
          '?autoplay=1&mute=1'
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
