import React from 'react';
import { render } from 'react-dom';
import RootApp from './components/RootApp.react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import initialState from './redux/initialState';

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  document.getElementById('app')
);
