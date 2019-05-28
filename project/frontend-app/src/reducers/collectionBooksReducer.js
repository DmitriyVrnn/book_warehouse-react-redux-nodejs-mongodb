import {FETCH_COLLECTION_BOOK, DELETE_BOOK} from "../constants/constants";

export default (state = [], {books, type, id}) => {
    switch (type) {
        case FETCH_COLLECTION_BOOK:
            return books;
        case DELETE_BOOK:
            return [...state].filter(book => book._id !== id);
        default:
            return state;
    }
}