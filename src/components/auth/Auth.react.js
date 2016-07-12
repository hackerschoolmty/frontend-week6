import React, { PropTypes } from 'react';

class Auth extends React.Component {

  render() {
    return (
      <section className="row">
        <h5>Login</h5>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">perm_identity</i>
              <input id="user" type="text" />
              <label htmlFor="user">User</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">lock</i>
              <input id="password" type="tel" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light" type="button">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Auth;
