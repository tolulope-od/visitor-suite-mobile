import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
import setAuthToken from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:5000/api/v1/api/users/sign-up', userData)
    .then(res => history.push('LoginScreen'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login user and get token
export const loginUser = userData => dispatch => {
  axios
    .post('http://localhost:5000/api/v1/users/sign-in', userData)
    .then(res => {
      // Save to AsyncStorage
      const { token } = res.data;

      AsyncStorage.setItem('jwtToken', token).then(() => {
      // Set token to auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
      })
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Setting a current logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// log user out
export const logoutUser = () => async dispatch => {
  // Remove token from Async Storage
    await AsyncStorage.removeItem('jwtToken');
    // Remove from auth header
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
