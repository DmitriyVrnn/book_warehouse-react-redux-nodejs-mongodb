import axios from 'axios';
import JwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, API_URL } from '../constants/constants';
import setAuthToken from '../utils/setAuthToken/setAuthToken';

export const registerUser = (user, history) => (dispatch) => {
  axios.post('/api/users/register', user)
    .then(() => history.push('/register'))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = user => (dispatch) => {
  axios.post(`${API_URL}/api/users/login`, user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = JwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = history => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/');
};
