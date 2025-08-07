import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../../utils/constants';
import { cachedResults } from '../../utils/searchSlice';

function Head() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  //don't want api call on every key press
  //make api call in useEffect
  //whenever search query changes useEffect calls
  //but i want to make api call if difference between 2 key strokes in 200ms
  //<200ms - decline api call - debouncing

  useEffect(() => {
    // console.log(searchQuery);
    // getSearchSuggestions();
    //want make api call after 200ms
    // const timer = setTimeout(() => getSearchSuggestions(), 200);

    //if searchQ present in cache
    //{ "iphone": ["iphone12", "iphone pro max"]}

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
  - key press i
  - render component
  useEffect() called - start timer and make api call after 200ms

  - key press ip
 - re-render component - means destroys prev component and re-render/ update again
  useEffect() called because we depend on search query
- start new timer and make api call
- eventhough searchQuery const, new searchQ variable created 
- need to clear timer before new timer starts
 
- if next key press less than 200ms, recoincillation trigger & will destroy component and call useEffect return method

-make cache in redux, store search results in store
when refresh page, store gets empty - no need to clear store
when deleting searchQ, not making api call
 -- check with network tab
imp - Search using debouncing, live api, caching 
  * */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    // console.log('API CALL', searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    //update chache - if new searchQ then store results in cache
    dispatch(cachedResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white">
      {/* 1st section */}
      <div className="flex col-span-1 gap-3">
        <img
          alt="menu icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
            className="h-8"
          />
        </a>
      </div>
      {/* 2nd section */}
      <div className="col-span-10 relative">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}

            //To prevent the dropdown from disappearing too quickly on blur, implement onBlur with a slight delay using setTimeout
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {/* suggestions div */}
        {showSuggestion && (
          <div className="absolute top-full left-0 bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  className="py-2 px-3 hover:bg-gray-100 rounded-lg"
                  key={index}
                >
                  <Link to={`/results?search_query=${s}`}>🔍 {s}</Link>
                </li>
              ))}
              {/* <Link> is an inline element, while <li> is a block element, and wrapping block inside inline is not valid. */}
              {/* <li className="py-2 px-3 hover:bg-gray-100 rounded-lg">
              🔍 iphone
            </li> */}
              {/* <li className="py-2 px-3 hover:bg-gray-100 rounded-lg">
              🔍 iphone
            </li> */}
            </ul>
          </div>
        )}
      </div>
      {/* 3rd section */}
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
          className="h-8"
        />
      </div>
    </div>
  );
}

export default Head;
