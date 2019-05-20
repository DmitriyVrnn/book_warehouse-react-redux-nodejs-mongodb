import {FETCH_COLLECTION_BOOK, ADD_DESCRIPTION_BOOK} from "../constants/constants";
import axios from "axios";
import {createPostSuccess} from "./post";

const apiUrl = 'http://localhost:4200/book';

export const fetchCollectionBooks = (books) => {
    return {
        type: FETCH_COLLECTION_BOOK,
        books
    }
};

export const fetchAllCollectionBooks = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchCollectionBooks(response.data));
                console.log(response.data)
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const addDescriptionBookSuccess = (book) => {
    console.log(book)
    return {
        type: ADD_DESCRIPTION_BOOK,
        book
    }
};

//TODO: Проблема с description
export const addDescriptionBook = (book) => {
    console.log(`${apiUrl}/edit/${book.id}`)
    return (dispatch) => {
        fetch(`${apiUrl}/edit/${book.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(`data ${data.book}`)
                dispatch(addDescriptionBookSuccess(data.book))
            })
        /*return axios.post(`http://localhost:4200/book/edit/${id}`)
            .then(response => {
                console.log(response)
                dispatch(addDescriptionBookSuccess(response.book));
                console.log('piegw' + response.book)

            })
            .catch(error => {
                throw(error);
            });*/
    };
};