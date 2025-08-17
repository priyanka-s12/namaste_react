import { useRef, useState } from 'react';
import Header from './Header';
import { validateData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    console.log(email);
    console.log(password);
    console.log(name);

    const message = isSignInForm
      ? validateData(email.current.value, password.current.value)
      : validateData(
          email.current.value,
          password.current.value,
          name.current ? name.current.value : ''
        );
    // console.log(message);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          className="h-full w-full object-cover"
          alt="background"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <form
        className="text-white absolute bg-black p-12 w-[500px] rounded-lg mx-auto my-36 right-0 left-0 opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold">
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
