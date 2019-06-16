import {ADD_POST, DELETE_POST, FETCH_POST, API_URL} from "../constants/constants";
import axios from 'axios';

export const createPost = ({ title, author, body, date }) => {
    return (dispatch) => {
        return axios.post(`${API_URL}/posts/add`, {title, author, body, date})
            .then(response => {
                dispatch(createPostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createPostSuccess =  (data) => {
    return {
        type: ADD_POST,
        payload: {
            _id: data._id,
            title: data.title,
            author: data.author,
            date: data.date,
            body: data.body
        }
    }
};

export const deletePostSuccess = id => {
    return {
        type: DELETE_POST,
        payload: {
            id
        }
    }
};

export const deletePost = id => {
    return (dispatch) => {
        return axios.get(`${API_URL}/posts/delete/${id}`)
            .then(response => {
                dispatch(deletePostSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POST,
        posts
    }
};

export const fetchAllPosts = () => {
    return (dispatch) => {
        return axios.get(`${API_URL}/posts`)
            .then(response => {
                dispatch(fetchPosts(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
