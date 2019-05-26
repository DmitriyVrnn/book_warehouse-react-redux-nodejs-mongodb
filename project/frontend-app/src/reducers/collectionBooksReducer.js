import {FETCH_COLLECTION_BOOK} from "../constants/constants";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COLLECTION_BOOK:
            return action.books;
        default:
            return state;
    }
}