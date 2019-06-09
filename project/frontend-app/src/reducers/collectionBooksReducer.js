import {FETCH_COLLECTION_BOOK, DELETE_BOOK} from "../constants/constants";

const initialState = {
    loading: true,
};

export default (state = initialState, {books, type, id}) => {
    switch (type) {
        case FETCH_COLLECTION_BOOK:
            return {loading: false} && books;
        case DELETE_BOOK:
            return [...state].filter(book => book._id !== id);
        default:
            return state;
    }
}