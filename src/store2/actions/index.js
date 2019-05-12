import { bindActionCreators, createAction } from '../utils';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = () => createAction(LOGIN);
export const logout = () => createAction(LOGOUT);
export const increment = () => createAction(INCREMENT);
export const decrement = () => createAction(DECREMENT);

export const boundUserActions = (dispatch) =>
  bindActionCreators({ login, logout }, dispatch);

export const boundCounterActions = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch);