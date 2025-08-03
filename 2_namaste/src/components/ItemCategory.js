import { useState } from 'react';
import MenuItem from './MenuItem';

const ItemCategory = (props) => {
  // console.log(props);
  // const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = props?.data;
  const { showItems, setShowIndex } = props;

  const handleClick = () => {
    // setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        <span>{showItems ? '🔼' : '🔽'}</span>
      </div>

      {showItems && (
        <ul>
          {itemCards?.map((item) => (
            <MenuItem menuInfo={item?.card?.info} key={item?.card?.info?.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemCategory;
