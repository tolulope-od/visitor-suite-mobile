import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import visitorReducer from './visitorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  visitor: visitorReducer
});
