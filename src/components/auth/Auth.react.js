import React from 'react';
import { connect } from 'react-redux';

class Auth extends React.Component {

  render() {
    return (
      <section className="row">
        <h5>Welcome <strong>{this.props.userName}</strong></h5>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input id="email" type="text" />
              <label htmlFor="email">your@email.com</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">lock</i>
              <input id="password" type="tel" />
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
      </section>
    );
  }
}



export default connect((state) => {
  return {
    userName: state.user.name
  }
})(Auth);
