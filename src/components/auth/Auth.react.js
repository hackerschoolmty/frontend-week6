import React from 'react';
import AuthForm from './AuthForm.react';
import { connect } from 'react-redux';

class Auth extends React.Component {

  render() {
    return (
      <section className="row">
        <h5>Welcome <strong>{this.props.userName}</strong></h5>
        <AuthForm />
      </section>
    );
  }
}



export default connect((state) => {
  return {
    userName: state.user.name
  }
})(Auth);
