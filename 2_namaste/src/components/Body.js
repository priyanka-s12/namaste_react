import RestroCard, { withHighestRatedLabel } from './RestroCard';
// import { listOfRest } from '../utils/mockData';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { RESTAURANT_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  //   const [listOfRestaurants, setListOfRestaurants] = useState(listOfRest);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const HighestRatedCard = withHighestRatedLabel(RestroCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //keep copy of rest, create filtered state var
  const [filteredRest, setFilteredRest] = useState([]);
  //array destructuring
  //   const arr = useState(listOfRest);
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];

  useEffect(() => {
    // console.log('useEffect called');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/' + RESTAURANT_URL
    );

    try {
      const json = await data.json();
      const restaurantsData = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes('restaurant_grid')
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurantsData);
      setFilteredRest(restaurantsData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log('Body rendered', listOfRestaurants);

  //   if (listOfRestaurants.length === 0) {
  //     // return <p>Loading...</p>;
  //     return <Shimmer />;
  //   }

  //if offline return below h1 jsx
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        It looks like you are offline. Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-l-black py-2"
            value={searchText}
            onChange={(e) => {
              //filter restaurants and update UI
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-500 ms-4 px-4 py-2 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRest(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-300 ms-4 px-4 py-2 rounded-lg"
          onClick={() => {
            let filteredList = listOfRestaurants.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            //   console.log(filteredList);
            // setListOfRestaurants(filteredList);
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="ms-4">
          <label>Username: </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* <RestroCard resName="Hotel Ramnath" cuisine="South Indian" />
          <RestroCard resName="Meghana Foods" cuisine="North Indian" /> */}

        {/* <RestroCard restData={restObj} /> */}
        {/* <RestroCard restData={listOfRest[0]} />
          <RestroCard restData={listOfRest[1]} />
          <RestroCard restData={listOfRest[2]} />
          <RestroCard restData={listOfRest[3]} />
          <RestroCard restData={listOfRest[4]} />
          <RestroCard restData={listOfRest[5]} />
          <RestroCard restData={listOfRest[6]} />
          <RestroCard restData={listOfRest[7]} /> */}

        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {/* if promoted true show promoted label, here they removed so filter cards based on avgRating*/}
            {restaurant.info.avgRating > 4.4 ? (
              <HighestRatedCard restData={restaurant} />
            ) : (
              <RestroCard restData={restaurant} />
            )}
            {/* <RestroCard restData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
