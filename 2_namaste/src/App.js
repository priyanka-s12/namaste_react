// const heading = React.createElement(
//   'h1',
//   { id: 'head' },
//   'Hello World from React'
// );
//return js object - obj is React Element
//takes attributes like h1, id, children - called props
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

// const heading = React.createElement(
//   'h1',
//   { id: 'heading' },
//   'Namaste React 🚀'
// );

// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child', key: 'child-1' }, [
//     React.createElement('h1', { key: 'h1-1' }, 'I am in h1 tag'),
//     React.createElement('h2', { key: 'h2-1' }, 'I am in h2 tag'),
//   ]),
//   React.createElement('div', { id: 'child', key: 'child-2' }, [
//     React.createElement('h1', { key: 'h1-2' }, 'I am in h1 tag'),
//     React.createElement('h2', { key: 'h2-2' }, 'I am in h2 tag'),
//   ]),
// ]);

//React element
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);

//component composition
// const Title = () => <h1>This is a title</h1>;
//can write normal function too
// const Title = function () {
//   return (
//     <>
//       <h1>title</h1>
//     </>
//   );
// };

// const data = 1000;
//react component
// const Heading = () => (
//   <>
//     <Title />
//     <Title></Title>
//     {Title()}
//     {data}
//     <h1>Hello from functional component</h1>
//   </>
// );

// const restObj = {
//   id: '651013',
//   name: 'Pizza Hut',
//   cloudinaryImageId:
//     'RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/6ddc1fb4-9ff0-4fdd-b216-07fdfdd4c4a5_651013.JPG',
//   locality: 'Vimanagar',
//   areaName: 'Aero Mall',
//   costForTwo: '₹350 for two',
//   cuisines: ['Pizzas'],
//   avgRating: 4.2,
//   parentId: '721',
//   avgRatingString: '4.2',
//   totalRatingsString: '2.0K+',
//   sla: {
//     deliveryTime: 24,
//     lastMileTravel: 1.7,
//     serviceability: 'SERVICEABLE',
//     slaString: '20-25 mins',
//     lastMileTravelString: '1.7 km',
//     iconType: 'ICON_TYPE_EMPTY',
//   },
//   availability: {
//     nextCloseTime: '2025-07-11 05:00:00',
//     opened: true,
//   },
//   badges: {
//     imageBadges: [
//       {
//         imageId: 'Rxawards/_CATEGORY-Pizza.png',
//         description: 'Delivery!',
//       },
//     ],
//   },
//   isOpen: true,
//   type: 'F',
//   badgesV2: {
//     entityBadges: {
//       imageBased: {
//         badgeObject: [
//           {
//             attributes: {
//               description: 'Delivery!',
//               imageId: 'Rxawards/_CATEGORY-Pizza.png',
//             },
//           },
//         ],
//       },
//       textBased: {},
//       textExtendedBadges: {},
//     },
//   },
//   aggregatedDiscountInfoV3: {
//     header: '50% OFF',
//     subHeader: 'UPTO ₹100',
//   },
//   orderabilityCommunication: {
//     title: {},
//     subTitle: {},
//     message: {},
//     customIcon: {},
//   },
//   differentiatedUi: {
//     displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
//     differentiatedUiMediaDetails: {
//       mediaType: 'ADS_MEDIA_ENUM_IMAGE',
//       lottie: {},
//       video: {},
//     },
//   },
//   reviewsSummary: {},
//   displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
//   restaurantOfferPresentationInfo: {},
//   externalRatings: {
//     aggregatedRating: {
//       rating: '--',
//     },
//   },
//   ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
// };

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: 'Priyanka S' };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* overriding default value - applicable to whole app */}
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: 'Elon Musk' }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   { path: '/', element: <AppLayout />, errorElement: <Error /> },
//   { path: '/about', element: <About /> },
//   { path: '/contact', element: <Contact /> },
// ]);

const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurants/:resId', element: <RestaurantMenu /> },
      { path: '/cart', element: <Cart /> },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

// console.log(parent);
//create root element on dom
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
// root.render(heading);
// root.render(jsxHeading);
// root.render(<Heading />);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
