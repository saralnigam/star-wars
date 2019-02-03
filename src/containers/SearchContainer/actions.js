import { swapiApiService } from '../../services/apiService';

import * as types from '../../constants/actionTypes';

export function getPlanets(pageId = null) {
  const params = {};
  if (pageId !== null) {
    params.page = pageId;
  }

  const response = swapiApiService.getPlanets(params);

  return dispatch => response.then(
    (successResponse) => {
      if (successResponse.data && successResponse.data.next !== null) {
        const nextUrl = new URL(successResponse.data.next);
        const nextPageId = nextUrl.searchParams.get('page');
        dispatch(getPlanets(nextPageId));
      }

      dispatch({
        type: types.GET_PLANETS_SUCCESSFUL,
        // Default to page1
        data: { response: successResponse.data, pageId: pageId || 1 },
      });
    },
  );
}
