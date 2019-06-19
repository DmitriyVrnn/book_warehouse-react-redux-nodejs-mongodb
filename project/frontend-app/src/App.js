import React, { Component } from 'react';
import { Provider } from 'react-redux';
import JwtDecode from 'jwt-decode';
import store from './store';

import setAuthToken from './utils/setAuthToken/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import EntranceController from './components/EntranceController/index';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = JwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  componentDidMount() {
    document.title = 'Bookstore';
  }

  render() {
    return (
      <Provider store={store}>
        <EntranceController />
      </Provider>
    );
  }
}

export default App;
