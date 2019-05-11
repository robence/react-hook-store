import React from 'react';
import { useStore } from './store/useStore';
import { decrement, increment } from './store/actions';

export default function() {
  const { state, dispatch } = useStore();

  const inc = () => dispatch(increment());
  const dec = () => dispatch(decrement());

  return (
    <div>
      <div>{state.counter}</div>
      <button type="button" onClick={inc}>
        + Increment
      </button>
      <button type="button" onClick={dec}>
        - Decrement
      </button>
    </div>
  );
}
