/* eslint-env browser */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';


const createAppStore = compose(
  applyMiddleware(thunk),
  // TODO: Remove DevTool Config in prod config for store
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)(createStore);

export default function configureStore(initialState) {
  const store = createAppStore(rootReducer, initialState);
  return store;
}
