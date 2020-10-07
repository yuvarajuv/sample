import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import App from './App';

// import reducer
import reducer from './Store/Reducer';

const rootReducer = combineReducers({
  dashboard: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app')
);
