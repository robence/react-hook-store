import React from 'react';

export default function UserOutput({ isLoggedIn }) {
  return (
    <div>
      <output>{isLoggedIn ? 'logged in' : 'logged out'}</output>
    </div>
  );
}
