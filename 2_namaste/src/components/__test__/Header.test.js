import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

it('Should render Header component with login button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });
  // const loginButton = screen.getByText("Login")
  //   console.log(loginButton);

  expect(loginButton).toBeInTheDocument();
});

it('Should render Header component with cart items', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText('Cart (0 items)');

  expect(cartItems).toBeInTheDocument();
});

it('Should render Header component with cart item or not', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //regex- find Cart
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it('Should change login button to logout when click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //simulate click event - fireEvent
  const loginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.click(loginButton);
  //find logout button
  const logoutButton = screen.getByRole('button', { name: 'Logout' });
  expect(logoutButton).toBeInTheDocument();
});
