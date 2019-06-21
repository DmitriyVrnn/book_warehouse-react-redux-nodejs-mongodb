import axios from 'axios';
import {
  ADD_POST, DELETE_POST, FETCH_POST, API_URL,
} from '../constants/constants';

export const createPost = ({
  title, author, body, date,
}) => async (dispatch) => {
  const createPostSuccess = (data) => {
    const {
      _id, title, author, date, body,
    } = data;
    dispatch({
      type: ADD_POST,
      payload: {
        _id, title, author, date, body,
      },
    });
    return data;
  };
  try {
    const post = await axios.post(`${API_URL}/posts/add`, {
      title, author, body, date,
    });
    return createPostSuccess(post.data);
  } catch (e) {
    throw (e);
  }
};

export const deletePost = id => async (dispatch) => {
  const deletePostSuccess = (id) => {
    dispatch({ type: DELETE_POST, payload: { id } });
    return id;
  };
  try {
    const post = await axios.get(`${API_URL}/posts/delete/${id}`);
    return deletePostSuccess(post.data);
  } catch (e) {
    throw (e);
  }
};

export const fetchAllPosts = () => async (dispatch) => {
  const fetchPosts = (posts) => {
    dispatch({ type: FETCH_POST, posts });
    return posts;
  };
  try {
    const posts = await axios.get(`${API_URL}/posts`);
    return fetchPosts(posts.data);
  } catch (e) {
    throw (e);
  }
};