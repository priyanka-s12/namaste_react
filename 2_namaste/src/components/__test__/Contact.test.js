import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

//can group test cases also

describe('Contact page test cases', () => {
  //applicable inside describe()
  //run before all test case - log, test, cleanup task
  // beforeAll(() => {
  //   console.log('Before all');
  // });

  //clean up task
  // beforeEach(() => {
  //   console.log('Before each');
  // });

  // afterAll(() => {
  //   console.log('After all');
  // });

  // afterEach(() => {
  //   console.log('After each');
  // });
  test('Should load contact component', () => {
    render(<Contact />);
    //render on jsdom
    const heading = screen.getByRole('heading');

    //assertion
    //whether heding in this document or not
    expect(heading).toBeInTheDocument();
  });

  test('Should load button in contact component', () => {
    render(<Contact />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  //test() and it() same
  it('Should text in contact component', () => {
    render(<Contact />);
    //case sensitive
    const text = screen.getByText('Submit');
    expect(text).toBeInTheDocument();
  });

  it('Should placeholder load in contact component', () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText('name');
    expect(placeholder).toBeInTheDocument();
  });

  it('Should load 2 input boxex in contact', () => {
    render(<Contact />);

    //querying
    const inputBoxes = screen.getAllByRole('textbox');
    //return array of 2 objects - returns HTMLInputElement (input tag)- is virtual dom react element, jsx basically react element and react element is object
    //   console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});

// test('Should load contact component', () => {
//   render(<Contact />);
//   //render on jsdom
//   const heading = screen.getByRole('heading');

//   //assertion
//   //whether heding in this document or not
//   expect(heading).toBeInTheDocument();
// });

// test('Should load button in contact component', () => {
//   render(<Contact />);
//   const button = screen.getByRole('button');
//   expect(button).toBeInTheDocument();
// });

// //test() and it() same
// it('Should text in contact component', () => {
//   render(<Contact />);
//   //case sensitive
//   const text = screen.getByText('Submit');
//   expect(text).toBeInTheDocument();
// });

// it('Should placeholder load in contact component', () => {
//   render(<Contact />);
//   const placeholder = screen.getByPlaceholderText('name');
//   expect(placeholder).toBeInTheDocument();
// });

// it('Should load 2 input boxex in contact', () => {
//   render(<Contact />);

//   //querying
//   const inputBoxes = screen.getAllByRole('textbox');
//   //return array of 2 objects - returns HTMLInputElement (input tag)- is virtual dom react element, jsx basically react element and react element is object
//   //   console.log(inputBoxes.length);

//   expect(inputBoxes.length).toBe(2);
// });
