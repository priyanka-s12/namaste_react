import { useState, useEffect, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {
  // let btnName = 'Login';
  const [btn, setBtn] = useState('Login');
  const onlineStatus = useOnlineStatus();
  // console.log('Header rendered');

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const { loggedInUser } = useContext(UserContext);

  // useEffect(() => {
  //   console.log('Inside effect');
  // }, [btn]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-5">
          {/* <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li> */}
          <li>Online Status: {onlineStatus === true ? '🟢' : '🔴'}</li>
          <li>
            {' '}
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            {' '}
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="px-4 font-bold">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          {/* <li>
            <a href="/contact">Contact Us</a>
          </li> */}
          {/* <button
            className="login"
            onClick={() => {
              btnName = 'Logout';
              console.log(btnName);
            }}
          >
            {btnName}
          </button> */}
          <button
            className="login"
            onClick={() =>
              btn === 'Login' ? setBtn('Logout') : setBtn('Login')
            }
          >
            {btn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
