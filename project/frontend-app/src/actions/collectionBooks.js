import axios from 'axios';
import { FETCH_COLLECTION_BOOK, DELETE_BOOK, API_URL } from '../constants/constants';

export const fetchCollectionBooks = books => ({
  type: FETCH_COLLECTION_BOOK,
  books,
});

export const deleteBookSuccess = id => ({
  type: DELETE_BOOK,
  id,
});

export const deleteBook = id => dispatch => axios.get(`${API_URL}/book/delete/${id}`)
  .then((res) => {
    dispatch(deleteBookSuccess(res.data));
  })
  .catch((err) => {
    throw (err);
  });


export const fetchAllCollectionBooks = () => dispatch => axios.get(`${API_URL}/book`)
  .then((response) => {
    dispatch(fetchCollectionBooks(response.data));
  })
  .catch((error) => {
    throw (error);
  });
