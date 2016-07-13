import './RootApp.scss';
import React from 'react';
import Auth from './auth/Auth.react';
import 'materialize-css/bin/materialize.js';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }
}

export default App;
