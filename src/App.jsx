import React from 'react';

import UserContainer from './components/user/UserContainer';
import CounterContainer from './components/counter/CounterContainer';

export default function App() {
  return (
    <div>
      <UserContainer />
      <CounterContainer />
    </div>
  );
}
