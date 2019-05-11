import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Loader from './components/Loader'

//import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

class App extends Component {

    state = {
        loading: false
    };

    componentDidMount(){
        document.title = "Bookstore";
        this.setState({
            loading: false,
        })
    }

    render() {
        const {loading} = this.state;

        if(loading){
            return <Loader/>
        }

        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <NavBar />
                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;