import React from 'react';

import { useDispatch, useSelector } from '../../store2/hooks';
import { boundUserActions } from '../../store2/actions';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

export default function UserContainer() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const { login, logout } = boundUserActions(dispatch);

  const handleClick = () => (isLoggedIn ? logout() : login());

  return (
    <div>
      <UserOutput isLoggedIn={isLoggedIn} />
      <UserInput isLoggedIn={isLoggedIn} handleClick={handleClick} />
    </div>
  );
}
