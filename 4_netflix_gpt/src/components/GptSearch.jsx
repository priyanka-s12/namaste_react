import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG_URL } from '../utils/constants';

function GptSearch() {
  /**
    - GptSearchBar
    - GptMovieSuggestions
    */
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_IMG_URL}
          className="h-full w-full object-cover"
          alt="background"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch;
