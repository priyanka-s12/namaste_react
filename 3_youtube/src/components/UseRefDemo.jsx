import React, { useEffect, useRef, useState } from 'react';

export default function UseRefDemo() {
  let x = 0;
  const [y, setY] = useState(0);

  const ref = useRef(0);
  //returns object with key current: initialVal

  //normal x, state var = normal var x changes behind the screen but not feflect on the screen, once change state var after click on normal var starts from 0 before its functional component, creates new execution context for function and allocate new memory - so local var not persist value but here in ref variable it persist the previous value through it won't re-render component but when other state changes ref.current shows updated value. Updating a ref doesn’t trigger a re-render Perfect for storing things like timers, WebSocket instances, or DOM references. like local state var which holds state between re-render

  //   let intervalRef = { current: null };

  const intervalRef = useRef(null); // holds the interval ID
  useEffect(() => {
    // if (intervalRef.current) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      console.log('Namaste React' + Math.random());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // reset ref
  };

  return (
    <div className="mt-5">
      <div className="my-2">
        <button
          className="bg-amber-500 border border-black p-2 rounded-lg"
          onClick={() => {
            // console.log('let x: ', x);
            x = x + 1;
          }}
        >
          Increase x
        </button>
        <span className="mb-3 font-bold text-xl ml-2">Let x: {x}</span>
      </div>
      <div className="my-2">
        <button
          className="bg-amber-500 border border-black p-2 rounded-lg"
          onClick={() => setY(y + 1)}
        >
          Increase y
        </button>
        <span className="mb-3 font-bold text-xl ml-2">Let y: {y}</span>
      </div>
      <div className="my-2">
        <button
          className="bg-amber-500 border border-black p-2 rounded-lg"
          onClick={() => {
            // console.log('Ref: ', ref.current);
            ref.current = ref.current + 1;
          }}
        >
          Increase ref
        </button>
        <span className="mb-3 font-bold text-xl ml-2">
          Let ref: {ref.current}{' '}
        </span>
      </div>

      <button
        className="mt-3 bg-red-500 p-2 rounded-lg text-white cursor-pointer"
        onClick={stopInterval}
      >
        Stop Interval Printing
      </button>
    </div>
  );
}
