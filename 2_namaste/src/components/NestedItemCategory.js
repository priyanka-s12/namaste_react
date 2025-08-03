import MenuItem from './MenuItem';
import { useState } from 'react';

const NestedItemCategory = (props) => {
  // console.log(props);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const { title, categories } = props?.data;
  // console.log(categories);

  const handleClick = (subTitle) => {
    setOpenSubCategory((prev) => (prev === subTitle ? null : subTitle));
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <div>
        {categories?.map((subCategory) => (
          <div key={subCategory?.title}>
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleClick(subCategory?.title)}
            >
              <h4 className="font-bold my-2">
                {subCategory?.title} ({subCategory?.itemCards.length})
              </h4>
              <span>
                {openSubCategory === subCategory?.title ? '🔼' : '🔽'}
              </span>
            </div>

            {openSubCategory === subCategory?.title && (
              <ul>
                {subCategory?.itemCards?.map((item) => (
                  <MenuItem
                    menuInfo={item?.card?.info}
                    key={item?.card?.info?.id}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedItemCategory;
