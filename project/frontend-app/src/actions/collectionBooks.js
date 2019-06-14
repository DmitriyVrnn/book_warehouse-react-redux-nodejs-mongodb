import {FETCH_COLLECTION_BOOK, ADD_BOOK, DELETE_BOOK} from "../constants/constants";
import axios from "axios";
import {createPostSuccess} from "./post";

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

export const addBookSuccess = ({titleBook, authorBook, description, publishing, series, idBook}) => ({
    type: ADD_BOOK,
    payload: {
        titleBook,
        authorBook,
        description,
        publishing,
        series,
        idBook
    }
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

export const addBook = ({titleBook, authorBook, description, publishing, series, idBook}) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/book/add`, {titleBook, authorBook, description, publishing, series, idBook})
            .then(response => {
                dispatch(addBookSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
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
