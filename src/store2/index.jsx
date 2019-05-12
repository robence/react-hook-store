import React, { createContext, useReducer } from 'react';

import initialState from './initialState';
import rootReducer from './rootReducer';

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};