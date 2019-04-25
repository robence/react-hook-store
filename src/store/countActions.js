export const countInitialState = {
  count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const countActions = {
  increment: state => ({
    type: INCREMENT,
    count: state.count + 1
  }),
  decrement: state => ({
    type: DECREMENT,
    count: state.count - 1
  })
};

export const countActions2 = (state=countInitialState, action) => {
  switch (action.type) {
    case INCREMENT: return ({
      ...state,
      count: state.count + 1
    });
    case DECREMENT: return ({
      ...state,
      count: state.count - 1
    });
    default:
    return state;
  }
}
