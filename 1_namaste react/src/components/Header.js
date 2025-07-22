import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  // let btnName = 'Login';
  const [btn, setBtn] = useState('Login');
  const onlineStatus = useOnlineStatus();
  // console.log('Header rendered');

  // useEffect(() => {
  //   console.log('Inside effect');
  // }, [btn]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
