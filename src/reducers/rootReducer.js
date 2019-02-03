import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loginData from './loginData';
import planets from './planets';


export default combineReducers({
  user: userReducer,
  loginData,
  planets,
});
