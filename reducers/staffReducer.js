import { GET_ALL_STAFF, STAFF_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  staff: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STAFF_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_STAFF:
      return {
        ...state,
        staff: action.payload.data,
        loading: false
      };
    default:
      return state;
  }
};
