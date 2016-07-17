import React from 'react';
import { render } from 'react-dom';
import RootApp from './components/RootApp.react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, browserHistory } from 'react-router';
import createRoutes from './createRoutes';

let routes = createRoutes(store);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
