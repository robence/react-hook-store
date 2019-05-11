import bindActionCreators from './bindActionCreators';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

export const counterInitialState = {
  count: 10,
};

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

export const boundCounterActions = (dispatch) =>
  bindActionCreators({ increment, decrement }, dispatch);
