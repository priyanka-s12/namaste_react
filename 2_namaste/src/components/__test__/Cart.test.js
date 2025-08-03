import { act, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_RESMENU_DATA from '../mocks/resMenuMock.json';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../../components/Header';
import Cart from '../../components/Cart';

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(MOCK_RESMENU_DATA) })
);

it('Should load restaurant menu component ', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('Biryani (12)');

  fireEvent.click(accordianHeader);
  //   expect(accordianHeader).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItem').length).toBe(12);

  const addBtn = screen.getAllByRole('button', { name: 'ADD' });
  expect(screen.getByText('Cart (0 items)')).toBeInTheDocument();
  //   console.log(addBtn.length);
  fireEvent.click(addBtn[0]);

  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();

  //what will show on cart page as Cart component also loaded
  //menu componemt 12, cart 2 so 14
  expect(screen.getAllByTestId('foodItem').length).toBe(14);

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));

  expect(screen.getAllByTestId('foodItem').length).toBe(12);
  expect(
    screen.getByText('Cart is empty. Please add items to cart.')
  ).toBeInTheDocument();
});
//write separate test case for 1/2/3 cart items
