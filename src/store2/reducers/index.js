import { INCREMENT, DECREMENT, LOGIN, LOGOUT } from '../actions';

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
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
