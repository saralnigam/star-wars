import * as types from '../constants/actionTypes';
import { API_STATES } from '../constants/constants';

const initialState = {
  state: null,
  message: '',
};


export default function loginData(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUESTED: {
      return {
        state: API_STATES.REQUESTED,
        message: '',
      };
    }

    case types.LOGIN_SUCCESSFUL: {
      return {
        state: API_STATES.SUCCESSFUL,
        message: action.data.message,
      };
    }

    case types.LOGIN_FAILED: {
      return {
        state: API_STATES.FAILED,
        message: action.data.message,
      };
    }

    default:
      return state;
  }
}
