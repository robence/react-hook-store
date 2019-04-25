export const userInitialState = {
  user: { loggedIn: false }
};

export const userActions = {
  login: state => ({ user: { loggedIn: true } }),
  logout: state => ({ user: { loggedIn: false } })
};
