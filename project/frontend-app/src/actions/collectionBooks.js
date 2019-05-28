import {FETCH_COLLECTION_BOOK, ADD_DESCRIPTION_BOOK, DELETE_BOOK} from "../constants/constants";
import axios from "axios";

const apiUrl = 'http://localhost:4200/book';

export const fetchCollectionBooks = (books) => {
    return {
        type: FETCH_COLLECTION_BOOK,
        books
    }
};

export const deleteBookSuccess = (id) => ({
    type: DELETE_BOOK,
    id
});

export const deleteBook = (id) => {
    return dispatch => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(res => {
                dispatch(deleteBookSuccess(res.data))
            })
            .catch(err => {
                throw(err)
            })
    }
};


export const fetchAllCollectionBooks = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchCollectionBooks(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};
