import { sum } from '../sum';

//basic js test case
test('sum function should calculate sum of two numbers', () => {
  const result = sum(4, 3);
  //assertion
  expect(result).toBe(7);
});
