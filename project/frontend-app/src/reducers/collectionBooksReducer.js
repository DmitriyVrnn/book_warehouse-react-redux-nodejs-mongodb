import {FETCH_COLLECTION_BOOK, ADD_DESCRIPTION_BOOK} from "../constants/constants";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_COLLECTION_BOOK:
            return action.books;
        case ADD_DESCRIPTION_BOOK:
            const index = state.findIndex(item => item.id === action.book._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.book._id) return action.book;
                    return item;
                });
            } else {
                return [
                    ...state,
                    action.book
                ];
            }
            /*const index = state.book.findIndex(item => item.id === action.book.id)
            state.book[index].description = action.book.description;
            return Object.assign({}, state, {
                book: state.book
            })*/

        default:
            return state;
    }
}