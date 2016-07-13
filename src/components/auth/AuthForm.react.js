import React from 'react';

class AuthForm extends React.Component {
  render() {
    return (
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input id="email" type="email" />
            <label htmlFor="email">your@email.com</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">lock</i>
            <input id="password" type="password" />
            <label htmlFor="password">password</label>
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light" type="button">
            Sign In
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    );
  }
}

export default AuthForm;
