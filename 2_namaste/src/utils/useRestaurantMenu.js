import { useEffect, useState } from 'react';
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  const [restMenu, setRestMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    const menuData =
      json?.data?.cards &&
      json?.data?.cards
        ?.find((item) => item.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (obj) =>
            obj?.card?.card['@type'].includes('ItemCategory') ||
            obj?.card?.card['@type'].includes('NestedItemCategory')
        );
    // console.log(menuData);

    const organisedMenudata = menuData?.map((item) => {
      const type = item?.card?.card['@type'];
      const title = item?.card?.card?.title;
      const itemCards = item?.card?.card?.itemCards || [];
      const categories = item?.card?.card?.categories || [];

      if (type?.includes('NestedItemCategory')) {
        return {
          title,
          type: 'nested',
          categories: categories?.map((subCategory) => {
            return {
              title: subCategory?.title,
              itemCards: subCategory?.itemCards,
            };
          }),
        };
      } else {
        return {
          title,
          type: 'item',
          itemCards,
        };
      }
    });
    // console.log(organisedMenudata);

    setRestInfo(
      json?.data?.cards?.find((item) =>
        item?.card?.card['@type'].includes('food.v2.Restaurant')
      )?.card?.card?.info
    );

    setRestMenu(organisedMenudata);
  };

  return { restInfo, restMenu };
};

export default useRestaurantMenu;
