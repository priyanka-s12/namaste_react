// const styleCard = {
//   backgroundColor: '#f0f0f0',
// };
import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

// const RestroCard = (props) => {
const RestroCard = (props) => {
  // const { resName, cuisine } = props;
  const { restData } = props;
  // console.log(restData);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      data-testid="resCard"
    >
      <img
        className="rounded-lg w-[100%] h-[100px] object-cover"
        alt={restData.name + ' logo'}
        src={CDN_URL + cloudinaryImageId}
      />
      {/* <h3>Hotel Ramnath</h3>
            <h4>Biryani, North India, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>30 minutes</h4> */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <p>User: {loggedInUser}</p>
    </div>
  );
};

export const withHighestRatedLabel = (RestroCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-gray-700 text-white m-3 p-2 rounded-lg">
          Highest Rated
        </label>
        <RestroCard {...props} />
      </>
    );
  };
};

export default RestroCard;
