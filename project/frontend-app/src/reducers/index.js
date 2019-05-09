import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer'
import postReducer from './postReducer'
import booksReducer from './booksReducer'
import collectionBooksReducer from './collectionBooksReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    posts: postReducer,
    books: booksReducer,
    booksCollection: collectionBooksReducer
});