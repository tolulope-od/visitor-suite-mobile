import {
  GET_VISITORS,
  VISITOR_LOADING,
  SET_NEW_VISITOR,
  CHECK_IF_EXISTING_VISITOR,
  CHECK_VISITOR_SUCCESS,
  CHECK_OUT_VISITOR,
  GET_VISITOR_FORM,
  UPLOAD_VISITOR_PICTURE
} from "../actions/types";

const initialState = {
  loading: false,
  success: false,
  visitor: {},
  visitors: [],
  form: {},
  uploaded: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VISITOR_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_VISITORS:
      return {
        ...state,
        visitors: action.payload,
        loading: false,
        success: false
      };
    case GET_VISITOR_FORM:
      return {
        ...state,
        form: action.payload,
        loading: false,
        success: false
      };
    case CHECK_IF_EXISTING_VISITOR:
      return {
        ...state,
        visitor: action.payload,
        loading: false,
        uploaded: ""
      };
    case SET_NEW_VISITOR:
      return {
        ...state,
        visitors: [action.payload],
        loading: false
      };
    case CHECK_VISITOR_SUCCESS:
      return {
        ...state,
        success: true
      };
    case UPLOAD_VISITOR_PICTURE:
      return {
        ...state,
        uploaded: action.payload,
        visitor: {}
      };
    case CHECK_OUT_VISITOR:
      return {
        ...state,
        visitors: state.visitors.filter(
          visitor => visitor._id !== action.payload
        )
      };
    default:
      return state;
  }
};
