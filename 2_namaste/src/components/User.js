import React, { useEffect, useState } from 'react';

function User({ name, location }) {
  const [count, setCount] = useState(0);
  //   const [count2] = useState(1);

  useEffect(() => {
    console.log('in useeffect');
    // const timer = setInterval(() => {
    //   console.log('Namaste react');
    // }, 1000);

    return () => {
      console.log('useeffect return');
      // clearInterval(timer);
    };
  }, []);
  console.log('render');

  return (
    <div className="user-card">
      <p>From Functional Component</p>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Counter
      </button>
      {/* <h1>Count2: {count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Address: {location}</h3>
      <h4>Contact: priyanka.ss1</h4>
    </div>
  );
}

export default User;
