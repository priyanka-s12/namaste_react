import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;
  //Make Sidebar scrollable separately
  return (
    <div className="p-5 shadow-lg col-span-1 w-48 mt-24 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
      {/* sticky top-24: sticks below header
          h-[calc(100vh-6rem)]: full height minus header height (6rem ≈ 24)
          overflow-y-auto: scrolls if sidebar overflows */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar;
