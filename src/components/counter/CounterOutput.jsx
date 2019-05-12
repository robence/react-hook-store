import React from 'react';

export default function CounterOutput({ count }) {
  return (
    <div>
      <output>
        Counter:
        {count}
      </output>
    </div>
  );
}
