import axios from 'axios';
import {
  ADD_POST, DELETE_POST, FETCH_POST, API_URL,
} from '../constants/constants';

export const createPostSuccess = data => ({
  type: ADD_POST,
  payload: {
    _id: data._id,
    title: data.title,
    author: data.author,
    date: data.date,
    body: data.body,
  },
});

export const createPost = ({
  title, author, body, date,
}) => dispatch => axios.post(`${API_URL}/posts/add`, {
  title, author, body, date,
})
  .then((response) => {
    dispatch(createPostSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });

export const deletePostSuccess = id => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});

export const deletePost = id => dispatch => axios.get(`${API_URL}/posts/delete/${id}`)
  .then((response) => {
    dispatch(deletePostSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });

export const fetchPosts = posts => ({
  type: FETCH_POST,
  posts,
});

export const fetchAllPosts = () => dispatch => axios.get(`${API_URL}/posts`)
  .then((response) => {
    dispatch(fetchPosts(response.data));
  })
  .catch((error) => {
    throw (error);
  });
