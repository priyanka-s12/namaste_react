import React from 'react';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from '../utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResults from './components/SearchResults';
import UseMemoDemo from './components/UseMemoDemo';
import UseRefDemo from './components/UseRefDemo';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      { path: '/', element: <MainContainer /> },
      {
        path: '/watch',
        element: <WatchPage />,
      },
      {
        path: '/results',
        element: <SearchResults />,
      },
      {
        path: 'demo',
        element: (
          <>
            <UseMemoDemo />
            {/* <UseRefDemo /> */}
          </>
        ),
      },
    ],
  },
]);

//partial routing - head same to all but if Head has Link component no partial routing
function App() {
  return (
    <Provider store={store}>
      {/* <Head /> */}
      {/* <Body /> */}

      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
