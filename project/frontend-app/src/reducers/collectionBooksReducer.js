import { FETCH_COLLECTION_BOOK, DELETE_BOOK, ADD_BOOK } from "../constants/constants";

const initialState = {
    booksItem: [],
    loading: true,
};

export default (state = initialState, {books, type, id}, action) => {
    switch (type) {
        case FETCH_COLLECTION_BOOK:
            return {
                loading: false,
                booksItem: books
            };
        case DELETE_BOOK:
            const {booksItem} = state;
            return {
                ...state,
                booksItem: booksItem.filter(book => book._id !== id)
            };
        case ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
}