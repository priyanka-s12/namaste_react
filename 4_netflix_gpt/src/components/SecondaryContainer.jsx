import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  /**
   * MovieList - Popular, Trendng, Now Playing, x genres
   *  - MovieCard * n
   *
   * */
  // console.log(movies.popularMovies);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-62 relative z-10">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Popular'} movies={movies.popularMovies} />
          <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
          <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
