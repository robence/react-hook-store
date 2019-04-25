import React, { createContext, useReducer, useContext } from "react"

import { countInitialState, countActions, countActions2 } from "./countActions";
import { userInitialState, userActions } from "./userActions";

const initialState = {
  ...countInitialState,
  ...userInitialState
};

const StoreContext = createContext(initialState);

// this will act as a map of actions that will trigger state mutations
const Actions = {
  ...userActions,
  ...countActions
};

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing state, and return a new copy of state.
const reducer2 = (state, action) => {
  const act = Actions[action.type];
  const update = act(state);
  return { ...state, ...update };
};

const reducer = (state, action) => {
  return countActions2(state, action);
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
}
