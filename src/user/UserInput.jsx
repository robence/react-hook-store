import React from 'react';

export default function UserInput({ isLoggedIn, handleClick }) {
  return (
    <div>
      <div>
        <button type="button" onClick={handleClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
  );
}
