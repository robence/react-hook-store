import React, { useCallback } from 'react';
import { useStore } from './store/useStore';

import Counter from './Counter'

export default function App() {
  const { state, dispatch } = useStore();
  const login = useCallback(() => dispatch({ type: 'login'}), [dispatch]);
  const logout = useCallback(() => dispatch({ type: 'logout'}), [dispatch]);

  const handleClick = () => {
    state.user.loggedIn ? logout() : login();
  }

  return (
    <div>
      <button onClick={handleClick}> {state.user.loggedIn ? 'Logout' : 'Login'}</button>
      <div>{state.user.loggedIn ? 'logged in' : 'logged out'}</div>
      <div>Counter: {state.count}</div>
      <Counter/>
    </div>
  );
}
