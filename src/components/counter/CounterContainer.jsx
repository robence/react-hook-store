import React from 'react';

import { useSelector, useDispatch } from '../../my-store/hooks';
import { decrement, increment } from '../../my-store/actions';
import { bindActionCreators } from '../../my-store/utils';

import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';

export default function CounterContainer() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const boundActionsCreators = bindActionCreators({ increment, decrement }, dispatch);

  return (
    <div>
      <CounterOutput count={count} />
      <CounterInput {...boundActionsCreators} />
    </div>
  );
}
