import { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    // console.log(email);
    // console.log(password);
    // console.log(name);

    //email - bob@example.com, pass - BobThomson@123

    // const message = isSignInForm
    //   ? validateData(email.current.value, password.current.value, name.current && snull)
    //   : validateData(
    //       email.current.value,
    //       password.current.value,
    //       name.current ? name.current.value : ''
    //     );

    const message = validateData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log('Updated Auth currentuser: ' + auth.currentUser);

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate('/browse');
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          // navigate('/browse');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute inset-0">
        <img
          src={BG_IMG_URL}
          className="h-full w-full object-cover"
          alt="background"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <form
        className="text-white absolute bg-black p-12 w-full md:w-3/12 rounded-lg mx-auto my-36 right-0 left-0 opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-lg md:text-3xl font-bold">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="border border-gray-500 w-full p-3 my-4 rounded-lg"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          type="text"
          className="border border-gray-500 w-full p-3 my-4 rounded-lg"
          placeholder="Email"
          ref={email}
        />
        <input
          type="password"
          className="border border-gray-500 w-full p-3 my-4 rounded-lg"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500 font-bold my-4 text-sm">{errorMessage}</p>
        <button
          className="bg-red-600 p-2 w-full font-bold rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="my-4">
          {isSignInForm ? 'New to Netflix? ' : 'Already registered user? '}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? 'Sign up' : 'Sign in'} now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
