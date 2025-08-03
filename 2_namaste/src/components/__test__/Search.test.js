import { act, fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/restListMock.json';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

//mock function for fetch()
//If the value is a Promise:
// Promise.resolve() returns that same Promise object. It does not create a new one.
global.fetch = jest.fn(async () => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should Search Res cards for Pizza text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId('searchInput');
  //   console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: 'pizza' } });

  const searchBtn = screen.getByRole('button', { name: 'Search' });
  fireEvent.click(searchBtn);
  //screen should load 2 cards

  const cardsAfterSearch = screen.getAllByTestId('resCard');
  expect(cardsAfterSearch.length).toBe(1);
  //   expect(searchBtn).toBeInTheDocument();
});

it('Should render top rated restaurants', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });
  //   expect(topRatedBtn).toBeInTheDocument();

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId('resCard');
  expect(cardsAfterFilter.length).toBe(5);
});
