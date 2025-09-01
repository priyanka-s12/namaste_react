import React from 'react';

function VideoTitle({ title, overview }) {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="py-6 text-md w-1/4">{overview}</p>
      <div className="flex gap-1.5">
        <button className="bg-white text-black text-lg p-2 px-8 rounded-lg flex gap-2 items-center hover:opacity-80 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play-icon lucide-play fill-black"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </svg>{' '}
          <span>Play</span>
        </button>
        <button className="bg-gray-700 text-white text-lg p-2 px-8 hover:opacity-80 cursor-pointer rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
