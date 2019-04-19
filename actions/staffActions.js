import axios from 'axios';
import { GET_ALL_STAFF, STAFF_LOADING } from './types';

// Set state loading
export const setStaffLoading = () => {
  return {
    type: STAFF_LOADING
  };
};

export const fetchAllStaff = () => dispatch => {
  dispatch(setStaffLoading());
  axios.get(`http://localhost:5000/api/v1/users/get`)
    .then(res => dispatch({ type: GET_ALL_STAFF, payload: res.data }))
    .catch(err => dispatch({ type: GET_ALL_STAFF, payload: null }))
}