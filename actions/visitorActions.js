import axios from "axios";
import { AsyncStorage } from "react-native";
import {
  GET_VISITORS,
  CLEAR_ERRORS,
  VISITOR_LOADING,
  SET_NEW_VISITOR,
  CHECK_IF_EXISTING_VISITOR,
  CHECK_OUT_VISITOR,
  CHECK_VISITOR_SUCCESS,
  GET_ERRORS,
  GET_VISITOR_FORM,
  UPLOAD_VISITOR_PICTURE
} from "./types";

// Check if visitor exists
export const checkVisitor = phone_number => dispatch => {
  dispatch(setVisitorLoading());
  axios
    .get(
      `http://localhost:5000/api/v1/visitor/check-if-new-visitor/${phone_number}`
    )
    .then(res =>
      dispatch({
        type: CHECK_IF_EXISTING_VISITOR,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: CHECK_IF_EXISTING_VISITOR,
        payload: null
      })
    );
};

export const addNewVisitor = visitorData => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`http://localhost:5000/api/v1/visitor`, visitorData)
    .then(res => {
      dispatch({ type: SET_NEW_VISITOR, payload: res.data });
    })
    .then(() => dispatch(checkVisitorSuccess()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const uploadVisitorPicture = (id, data) => async dispatch => {
  try {
    dispatch(clearErrors());

    let options = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const res = await axios.post(
      `http://localhost:5000/api/v1/visitor/picture/${id}`,
      data,
      options
    );
    await dispatch({
      type: UPLOAD_VISITOR_PICTURE,
      payload: res.data
    });
    return res.data;
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Get visitor form fields
export const getFormFields = () => dispatch => {
  dispatch(setVisitorLoading());
  axios
    .get(`http://localhost:5000/api/v1/visitor/format`)
    .then(res => dispatch({ type: GET_VISITOR_FORM, payload: res.data }))
    .catch(err => dispatch({ type: GET_VISITOR_FORM, payload: null }));
};

// Check Visitor Successfully Registered
export const checkVisitorSuccess = () => {
  return {
    type: CHECK_VISITOR_SUCCESS
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Set state loading
export const setVisitorLoading = () => {
  return {
    type: VISITOR_LOADING
  };
};
