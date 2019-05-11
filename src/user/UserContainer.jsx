import React from 'react';

import { useStore } from '../store/useStore';
import { boundUserActions } from '../store/user';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

export default function UserContainer() {
  const { state, dispatch } = useStore();

  const { login, logout } = boundUserActions(dispatch);

  const handleClick = () => (state.user.isLoggedIn ? logout() : login());

  return (
    <div>
      <UserOutput isLoggedIn={state.user.isLoggedIn} />
      <UserInput isLoggedIn={state.user.isLoggedIn} handleClick={handleClick} />
    </div>
  );
}
