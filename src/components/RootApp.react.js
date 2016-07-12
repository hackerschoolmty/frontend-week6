import './RootApp.scss';
import React from 'react';
import Auth from './auth/Auth.react';

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
