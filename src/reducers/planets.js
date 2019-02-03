import { extractPageData } from '../services/utils';

import * as types from '../constants/actionTypes';
import { API_STATES } from '../constants/constants';


const initialState = {
  next: null,
  previous: null,
  byId: {},
  ids: [],
  state: null,
  pages: [],
  currentPage: null,
};


export default function people(state = initialState, action) {
  switch (action.type) {
    case types.GET_PLANETS_SUCCESSFUL: {
      const oldState = Object.assign({}, state);
      const pageData = extractPageData(action.data.response.results, formatPlanet);

      const newState = {
        next: action.data.response.next,
        previous: action.data.response.previous,
        state: API_STATES.SUCCESSFUL,
        pages: {
          ...oldState.pages,
          [action.data.pageId]: pageData.pageResourceIds,
        },
        byId: {
          ...oldState.byId,
          ...pageData.results,
        },
      };

      return newState;
    }

    case types.GET_PLANETS_FAILED: {
      const newState = Object.assign({}, state);
      newState.state = API_STATES.FAILED;
      return newState;
    }


    default: {
      return state;
    }
  }
}


function formatPlanet(planet) {
  return {
    ...planet,
    population: planet.population !== 'unknown' ? planet.population : 'Not Calculated',
    population_scale: planet.population !== 'unknown' ? Math.log(planet.population) : 1,
  };
}
