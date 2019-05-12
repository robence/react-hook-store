import React from 'react';

import { useDispatch, useSelector } from '../../my-store/hooks';
import { login, logout } from '../../my-store/actions';
import { bindActionCreators } from '../../my-store/utils';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

export default function UserContainer() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const boundActionCreators = bindActionCreators({ login, logout }, dispatch);

  const handleClick = () =>
    isLoggedIn ? boundActionCreators.logout() : boundActionCreators.login();

  return (
    <div>
      <UserOutput isLoggedIn={isLoggedIn} />
      <UserInput isLoggedIn={isLoggedIn} handleClick={handleClick} />
    </div>
  );
}
