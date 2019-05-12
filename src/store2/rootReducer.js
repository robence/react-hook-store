import * as reducers from './reducers';

// the reducer is called whenever a dispatch action is made.
// the action.type is a string which maps to a function in Actions.
// We apply the update to existing store, and return a new copy of store.
const rootReducer = (state, action) => {
  const update = Object.values(reducers).reduce(
    (previousState, reducer) => reducer(previousState, action),
    state,
  );
  return { ...state, ...update };
};

export default rootReducer;
