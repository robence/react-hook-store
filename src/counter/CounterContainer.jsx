import React from 'react';

import { useSelector, useDispatch } from '../store/useStore';
import { boundCounterActions } from '../store/counter';

import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

export default function CounterContainer() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const { increment, decrement } = boundCounterActions(dispatch);

  return (
    <div>
      <CounterOutput count={count} />
      <CounterInput increment={increment} decrement={decrement} />
    </div>
  );
}
