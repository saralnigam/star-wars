import { swapiApiService } from '../../services/apiService';

import * as types from '../../constants/actionTypes';
import { API_URLS } from '../../constants/constants';

export function loginUser(username, password) {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_REQUESTED });
    dispatch(_getPeopleAndLogin(username, password));
  };
}

function _getPeopleAndLogin(username, password, pageUrl = API_URLS.GET_PEOPLE) {
  const response = getPeople(pageUrl);

  return function (dispatch) {
    let user = null;

    return response.then(
      (successResponse) => {
        user = findUser(successResponse.results, username);

        if (successResponse.next !== null && user === null) {
          dispatch(_getPeopleAndLogin(username, password, successResponse.next));
        }

        // If user is found check credentials, ideally this should be handled server side
        if (user !== null) {
          if (isUserAuthenticated(user, username, password)) {
            dispatch({ type: types.LOGIN_SUCCESSFUL, data: { message: "You've succesfully logged in", user } });
          } else {
            dispatch({ type: types.LOGIN_FAILED, data: { message: 'Username and Password do not match' } });
          }
        }

        if (successResponse.next == null) {
          dispatch({ type: types.LOGIN_FAILED, data: { message: 'Username not found' } });
        }
      },
    );
  };
}

function findUser(peopleResponse, username) {
  return peopleResponse.find(people => people.name === username) || null;
}

function isUserAuthenticated(user, username, password) {
  return user.name === username && user.birth_year === password;
}

function getPeople(pageUrl = API_URLS.GET_PEOPLE) {
  const response = swapiApiService.get(pageUrl);

  return response.then(
    successResponse => successResponse.data,
    (errorResponse) => {
      console.error(errorResponse);
      return errorResponse;
    },
  );
}
