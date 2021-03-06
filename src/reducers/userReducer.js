import * as types from '../constants/actionTypes';


const initialState = {
  id: null,
  name: null,
  isAuthenticated: false,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESSFUL:
      return {
        ...action.data.user,
        isAuthenticated: !state.isAuthenticated,
      };

    default:
      return state;
  }
};
