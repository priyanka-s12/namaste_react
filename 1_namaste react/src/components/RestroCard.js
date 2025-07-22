// const styleCard = {
//   backgroundColor: '#f0f0f0',
// };
import { CDN_URL } from '../utils/constants';

// const RestroCard = (props) => {
const RestroCard = (props) => {
  // console.log(props);
  // const { resName, cuisine } = props;
  const { restData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt={restData.name + ' logo'}
        src={CDN_URL + cloudinaryImageId}
      />
      {/* <h3>Hotel Ramnath</h3>
            <h4>Biryani, North India, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>30 minutes</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
