import Auth from '../components/auth/Auth.react';
import { connect } from 'react-redux';

export default connect(state => ({
  displayName: state.getIn(['user', 'displayName'])
}))(Auth);
