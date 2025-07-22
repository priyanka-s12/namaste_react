import RestroCard from './RestroCard';
// import { listOfRest } from '../utils/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { RESTAURANT_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  //   const [listOfRestaurants, setListOfRestaurants] = useState(listOfRest);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

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
  // console.log('Body rendered');

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              //filter restaurants and update UI
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-button"
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
      </div>
      <div className="res-container">
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
            <RestroCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
