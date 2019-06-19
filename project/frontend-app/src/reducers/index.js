import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';
import collectionBooksReducer from './collectionBooksReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  posts: postReducer,
  booksCollection: collectionBooksReducer,
});
