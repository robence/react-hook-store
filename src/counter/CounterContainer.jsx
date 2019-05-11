import React from 'react';

import { useSelector, useDispatch } from '../store/useStore';
import { boundCounterActions } from '../store/counter';

import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

export default function CounterContainer() {
  // Could also use
  // const { state, dispatch } = useStore();

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const boundActionsCreators = boundCounterActions(dispatch);

  return (
    <div>
      <CounterOutput count={count} />
      <CounterInput {...boundActionsCreators} />
    </div>
  );
}
