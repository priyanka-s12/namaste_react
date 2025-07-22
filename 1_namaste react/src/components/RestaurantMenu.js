import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function RestaurantMenu() {
  // const id = useParams();
  // console.log(id);

  const { resId } = useParams();

  const { restInfo, restMenu } = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_URL + resId);
  //   const json = await data.json();

  //   const menuData =
  //     json?.data?.cards &&
  //     json?.data?.cards
  //       ?.find((item) => item.groupedCard)
  //       ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  //         (obj) =>
  //           obj?.card?.card['@type'].includes('ItemCategory') ||
  //           obj?.card?.card['@type'].includes('NestedItemCategory')
  //       );
  //   // console.log(menuData);

  //   const organisedMenudata = menuData?.map((item) => {
  //     const type = item?.card?.card['@type'];
  //     const title = item?.card?.card?.title;
  //     const itemCards = item?.card?.card?.itemCards || [];
  //     const categories = item?.card?.card?.categories || [];

  //     if (type?.includes('NestedItemCategory')) {
  //       return {
  //         title,
  //         type: 'nested',
  //         categories: categories?.map((subCategory) => {
  //           return {
  //             title: subCategory?.title,
  //             itemCards: subCategory?.itemCards,
  //           };
  //         }),
  //       };
  //     } else {
  //       return {
  //         title,
  //         type: 'item',
  //         itemCards,
  //       };
  //     }
  //   });
  //   // console.log(organisedMenudata);

  //   setRestInfo(
  //     json?.data?.cards?.find((item) =>
  //       item?.card?.card['@type'].includes('food.v2.Restaurant')
  //     )?.card?.card?.info
  //   );

  //   setRestMenu(organisedMenudata);
  // };

  //if return not written name null error
  if (restInfo === null) return <Shimmer />;
  //   console.log(restInfo);
  const { name, areaName, cuisines, avgRating } = restInfo;

  console.log(restMenu);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>Area:{areaName}</p>
      <p>Cuisines: {cuisines?.join(', ')}</p>
      <p>Rating: {avgRating}</p>
      <h2>Menu</h2>

      {/* <ul>
        <li>Biryani</li>
        <li>Pulao</li>
        <li>Sandwitch</li>
      </ul> */}

      {/* restaurant menu categories */}
      {restMenu?.map((category) =>
        category?.type === 'item' ? (
          <ItemCategory key={category?.title} data={category} />
        ) : (
          <NestedItemCategory key={category?.title} data={category} />
        )
      )}
    </div>
  );
}

export default RestaurantMenu;

const ItemCategory = (props) => {
  //   console.log(props);
  const { title, itemCards } = props?.data;
  return (
    <div>
      <h3>
        {title} ({itemCards.length})
      </h3>
      <ul>
        {itemCards?.map((item) => (
          <MenuItem menuInfo={item?.card?.info} key={item?.card?.info?.id} />
        ))}
      </ul>
    </div>
  );
};

const NestedItemCategory = (props) => {
  // console.log(props);

  const { title, categories } = props?.data;
  // console.log(categories);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {categories?.map((subCategory) => (
          <div key={subCategory?.title}>
            <h4>
              {subCategory?.title} ({subCategory?.itemCards.length})
            </h4>
            <ul>
              {subCategory?.itemCards?.map((item) => (
                <MenuItem
                  menuInfo={item?.card?.info}
                  key={item?.card?.info?.id}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  //   console.log(props);
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;

  const MENU_IMG =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/';
  return (
    <li>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Align top edge of content and image
          gap: '1rem', // Space between image and text
          padding: '1rem 0',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <div>
          <h4>{name}</h4>
          <p>
            {price && <span>Rs. {price / 100}</span>}
            {defaultPrice && <span>Rs. {defaultPrice / 100}</span>}
          </p>
          <p style={{ width: '50%' }}>{description}</p>
        </div>

        {imageId && (
          <img src={MENU_IMG + imageId} style={{ height: '100px' }} />
        )}
      </div>
    </li>
  );
};
