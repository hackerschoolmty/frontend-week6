import React, { PropTypes } from 'react';
import AuthForm from './AuthForm.react';
import { connect } from 'react-redux';

class Auth extends React.Component {

  render() {
    return (
      <section className="row">
        <h5>Welcome <strong>{this.props.displayName}</strong></h5>
        <AuthForm />
      </section>
    );
  }

}

Auth.propTypes = {
  userName: PropTypes.string,
  changeName: PropTypes.func
};

export default Auth;
