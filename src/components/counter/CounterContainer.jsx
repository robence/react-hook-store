import React from 'react';

import { useSelector, useDispatch } from '../../store2/hooks';
import { boundCounterActions } from '../../store2/actions';

import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

export default function CounterContainer() {
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
