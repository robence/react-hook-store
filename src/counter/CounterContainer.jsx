import React from 'react';

import { useStore } from '../store/useStore';
import { boundCounterActions } from '../store/counter';

import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

export default function CounterContainer() {
  const { state, dispatch } = useStore();

  const { increment, decrement } = boundCounterActions(dispatch);

  return (
    <div>
      <CounterOutput count={state.count} />
      <CounterInput increment={increment} decrement={decrement} />
    </div>
  );
}
