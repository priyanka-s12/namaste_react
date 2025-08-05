import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import { Link } from 'react-router-dom';

function Head() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
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
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
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
