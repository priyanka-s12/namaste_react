import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

function GptMovieSuggestions() {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 text-white opacity-80">
      {movieNames?.map((movie, index) => (
        <MovieList key={index} title={movie} movies={movieResults[index]} />
      ))}
      {/* <MovieList title={movieNames[0]} movies={movieResults[0]} /> */}
    </div>
  );
}

export default GptMovieSuggestions;
