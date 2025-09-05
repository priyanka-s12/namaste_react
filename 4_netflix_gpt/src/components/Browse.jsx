import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //should have render logic only

  //fetch data from TMDB api and update store
  // const dispatch = useDispatch();
  // const getNowPlayingMovies = async () => {
  //   const data = await fetch(
  //     'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results));
  // };

  // useEffect(() => {
  //   getNowPlayingMovies();
  // }, []);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  /**
   * MainContainer
   *  - VideoBackground
   *  - VideoTitle
   * SecondaryContainer
   *  - MovieList * n
   *    - cards * n
   *
   */

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* <GptSearch />
      <MainContainer />
      <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
