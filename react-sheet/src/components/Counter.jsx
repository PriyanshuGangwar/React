import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const updateCounter = () => {
    setCount(prev => prev + 1);
  };

  const resetCounter = () => {
    setCount(0);
  }

  return (
    <div
      className='Counter'
      style={{
        color: 'white',
      }}
    >
      <button onClick={updateCounter}>Click Me: {count}</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default Counter;
