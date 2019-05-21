import {FETCH_COLLECTION_BOOK, ADD_DESCRIPTION_BOOK} from "../constants/constants";
import axios from "axios";

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
