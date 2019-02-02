/* eslint-env browser */
// Import React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux Dependencies
import { Provider } from 'react-redux';
import configureStore from './store/store';

// Import Components
import App from './App';

// Import Styles
import './index.css';


ReactDOM.render(
  (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
