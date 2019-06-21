import axios from 'axios';
import {
  FETCH_COLLECTION_BOOK, DELETE_BOOK, API_URL,
} from '../constants/constants';

export const fetchAllCollectionBooks = () => async (dispatch) => {
  const fetchCollectionBooks = (books) => {
    dispatch({
      type: FETCH_COLLECTION_BOOK,
      books,
    });
    return books;
  };
  try {
    const books = await axios.get(`${API_URL}/book`);
    return fetchCollectionBooks(books.data);
  } catch (e) {
    throw (e);
  }
};

export const deleteBook = id => async (dispatch) => {
  const deleteBookSuccess = (id) => {
    dispatch({
      type: DELETE_BOOK,
      id,
    });
    return id;
  };
  try {
    const book = await axios.get(`${API_URL}/book/delete/${id}`);
    return deleteBookSuccess(book.data);
  } catch (e) {
    throw (e);
  }
};
