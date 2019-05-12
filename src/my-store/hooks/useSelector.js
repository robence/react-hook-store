import { useContext } from 'react';

import { StoreContext } from '../index';

export default function useSelector(selector) {
  const { state } = useContext(StoreContext);
  return selector(state);
}
