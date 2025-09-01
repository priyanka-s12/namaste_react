import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  //setup once - want this code present in all pages - best place Header as its inside RouterProvider so navigate will work there
  //executes when state of authentication of app changes -> login -> logout - its eventlistener kind of thing
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in,
  //       // const uid = user.uid;
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           email: email,
  //           displayName: displayName,
  //           photoURL: photoURL,
  //         })
  //       );
  //       // navigate('/browse');
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       // navigate('/');
  //     }
  //   });
  // }, []);

  //navigate should be inside RouterProvider - error useNavigate() may be used only in the context of a <Router> component
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
