import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  console.log(title);
  console.log(movies);

  return (
    <div className="py-2 px-10 ">
      <h1 className="mb-3 text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2 ">
          {movies?.map((movie) => (
            <MovieCard posterUrl={movie.poster_path} key={movie.id} />
          ))}
          {/* <MovieCard posterUrl={movies[0].poster_path} /> */}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
