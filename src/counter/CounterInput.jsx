import React from 'react';

export default function CounterInput({ increment, decrement }) {
  return (
    <div>
      <button type="button" onClick={increment}>
        + Increment
      </button>
      <button type="button" onClick={decrement}>
        - Decrement
      </button>
    </div>
  );
}
