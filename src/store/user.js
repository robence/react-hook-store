import bindActionCreators from './bindActionCreators';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const login = () => ({ type: LOGIN });
const logout = () => ({ type: LOGOUT });

export const userInitialState = {
  user: { isLoggedIn: false },
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: { isLoggedIn: true } };
    case LOGOUT:
      return { user: { isLoggedIn: false } };
    default:
      return state;
  }
};

export const boundUserActions = (dispatch) =>
  bindActionCreators({ login, logout }, dispatch);
