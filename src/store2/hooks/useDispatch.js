import { useContext } from 'react';

import { StoreContext } from '../index';

export default function useDispatch() {
  return useContext(StoreContext).dispatch;
}
