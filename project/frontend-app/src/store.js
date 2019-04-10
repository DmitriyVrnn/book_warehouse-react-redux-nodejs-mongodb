import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import {fetchAllPosts} from "./actions/post";

const initialState = {};

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

//TODO: Кажется это плохо - исправить
store.dispatch(fetchAllPosts());

export default store;