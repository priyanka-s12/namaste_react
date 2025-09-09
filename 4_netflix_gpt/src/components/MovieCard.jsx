import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

function MovieCard({ posterUrl }) {
  if (!posterUrl) return null;
  return (
    <div className="w-28 md:w-48">
      <img alt="movie card" src={IMG_CDN_URL + posterUrl} />
    </div>
  );
}

export default MovieCard;
