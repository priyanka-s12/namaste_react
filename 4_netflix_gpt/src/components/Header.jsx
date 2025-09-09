import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { addGeminiMovieResults, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate('/');
      })
      .catch((error) => {
        // An error happened.
        navigate('/error');
      });
  };

  //as present everypg, continue render every time as empty array
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
    dispatch(
      addGeminiMovieResults({
        movieNames: null,
        movieResults: null,
      })
    );
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row">
      <img src={LOGO} alt="logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex justify-between items-center gap-2">
          {showGptSearch && (
            <select
              className="bg-gray-600 text-white p-2 m-2"
              onChange={handleLanguageChange}
            >
              {/* <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option> */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 bg-purple-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <img
            src={user.photoURL}
            alt="user icon"
            className="w-10 h-10 hidden md:block"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
