import { useContext } from 'react';

import { StoreContext } from '../index';

export default function useStore() {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
}
