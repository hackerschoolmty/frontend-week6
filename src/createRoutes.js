import React from 'react';
import RootApp from './components/RootApp.react';
import Auth from './components/auth/Auth.react';
import Chat from './components/chat/Chat.react';
import NoMatch from './components/nomatch/NoMatch.react';
import { Route, IndexRoute } from 'react-router';

export default function createRoutes(store) {

  const requireSignIn = (nextState, replace) => {
    let state = store.getState();
    // TODO: Validate if the user is authenticated checking a value in the redux state
    // if the user is not authenticated redirect to '/signin' with the replace function
  }

  return (
    <Route path="/" component={RootApp}>
      <IndexRoute component={Chat} onEnter={requireSignIn} />
      <Route path="signin" component={Auth} />
      <Route path="*" component={NoMatch} />
    </Route>
  )
}
