import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //before getting first movie, movies store will be null - early return
  //   if (movies === null) return;
  if (!movies) return;
  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;
