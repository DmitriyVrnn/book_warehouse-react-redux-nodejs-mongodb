import { FETCH_COLLECTION_BOOK, DELETE_BOOK } from '../constants/constants';

const initialState = {
  booksItem: [],
  loading: true,
};

export default (state = initialState, { books, type, id }) => {
  const { booksItem } = state;
  switch (type) {
    case FETCH_COLLECTION_BOOK:
      return {
        loading: false,
        booksItem: books,
      };
    case DELETE_BOOK:
      return {
        ...state,
        booksItem: booksItem.filter(book => book._id !== id),
      };
    default:
      return state;
  }
};
