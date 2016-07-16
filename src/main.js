import React from 'react';
import { render } from 'react-dom';
import RootApp from './components/RootApp.react';
import { Provider } from 'react-redux';
import store from './redux/store';

render(
  <Provider store={store}>
    <RootApp />
  </Provider>,
  document.getElementById('app')
);
