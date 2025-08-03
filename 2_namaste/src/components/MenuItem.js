import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MenuItem = (props) => {
  // console.log(props);
  const { name, finalPrice, defaultPrice, price, description, imageId } =
    props?.menuInfo;

  const MENU_IMG =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/';

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // console.log(item);
  };
  return (
    <li>
      <div
        className="p-2 m-2 border-gray-400 border-b-2 flex justify-between"
        data-testid="foodItem"
      >
        <div className="w-9/12">
          <h4 className="font-bold">{name}</h4>
          <p>
            {finalPrice ? (
              <span>Rs. {finalPrice / 100}</span>
            ) : defaultPrice ? (
              <span>Rs. {defaultPrice / 100}</span>
            ) : (
              <span>Rs. {price / 100}</span>
            )}
          </p>
          <p className="">{description}</p>
        </div>
        <div className="w-3/12 p-4">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <button
                className="p-2 text-green-400 bg-white font-bold rounded-lg shadow-lg"
                onClick={() => handleAddItem(props.menuInfo)}
              >
                ADD
              </button>
            </div>
            {imageId && <img src={MENU_IMG + imageId} className="w-full" />}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
