import React from 'react';
import { useStore } from './store/useStore';
import { login, logout } from './store/actions';
import Counter from './Counter';

export default function App() {
  const { state, dispatch } = useStore();

  const boundLogin = () => dispatch(login());
  const boundLogout = () => dispatch(logout());

  const handleClick = () =>
    state.user.isLoggedIn ? boundLogout() : boundLogin();

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {state.user.isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <div>{state.user.isLoggedIn ? 'logged in' : 'logged out'}</div>
      <div>
        Counter:
        {state.count}
      </div>
      <Counter />
    </div>
  );
}
