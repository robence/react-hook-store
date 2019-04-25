import React, { useCallback } from 'react';
import { useStore } from './store/useStore';

export default function () {
  const { state, dispatch } = useStore();
  // const inc = useCallback(() => dispatch({ type: 'increment'}), [dispatch]);
  const inc = useCallback(() => dispatch({ type: 'INCREMENT'}), [dispatch]);
  // const dec = useCallback(() => dispatch({ type: 'decrement'}), [dispatch]);
  const dec = useCallback(() => dispatch({ type: 'DECREMENT'}), [dispatch]);

  return (
    <div>
      <div>{state.counter}</div>
      <button onClick={inc}>+ Increment</button>
      <button onClick={dec}>- Decrement</button>
    </div>
  );
}
