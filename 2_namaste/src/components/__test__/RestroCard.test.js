//takes props

import { render, screen } from '@testing-library/react';
import RestroCard, { withHighestRatedLabel } from '../RestroCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

//need mock data
it('Should render RestroCart component with data', () => {
  render(<RestroCard restData={MOCK_DATA} />);

  const name = screen.getByText('Chinese Wok');

  expect(name).toBeInTheDocument();
});

it('Should render RestroCart component with Highest Rated Label', () => {
  const WithHighestRatedLabel = withHighestRatedLabel(RestroCard);
  render(<WithHighestRatedLabel restData={MOCK_DATA} />);

  const label = screen.getByText('Highest Rated');

  expect(label).toBeInTheDocument();
});
