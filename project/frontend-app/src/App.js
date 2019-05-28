import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser, logoutUser} from './actions/authentication';

import NavBar from './components/NavBar';

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {

    componentDidMount() {
        document.title = "Bookstore";
    }

    render() {
        return (
            <Provider store={store}>
                <NavBar/>
            </Provider>
        );
    }
}

export default App;