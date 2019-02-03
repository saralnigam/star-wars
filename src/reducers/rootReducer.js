import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import userReducer from './userReducer';


export default combineReducers({
  sampleReducer,
  user: userReducer,
});
