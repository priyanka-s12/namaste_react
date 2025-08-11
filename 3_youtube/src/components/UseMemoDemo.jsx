import { useMemo, useState } from 'react';
import { findNthPrime } from '../../utils/helper';
import UseRefDemo from './UseRefDemo';

function UseMemoDemo() {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // console.log('Rendering...');

  // const prime = findNthPrime(text);
  // console.log(prime);

  // const prime = () => {
  //   console.log('Calculating prime');
  //   return findNthPrime(text);
  // };

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        'mt-25 mr-270 px-7 w-1/2 ' + (isDarkTheme && 'bg-amber-800 text-white')
      }
    >
      <div className="mt-3">
        <button
          className="p-2 bg-green-500 rounded-lg cursor-pointer"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div className="mt-3">
        <label>Enter a number: </label>
        <input
          type="number"
          className="border border-black p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1 className="font-bold text-xl mt-3">nth Prime: {prime}</h1>
      </div>
      <UseRefDemo />
    </div>
  );
}

export default UseMemoDemo;
