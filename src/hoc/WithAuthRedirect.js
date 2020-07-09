import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth

});

export function withAuthRedirect (Component) {

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />
      else return <Component {...this.props} />
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedRedirectComponent;

}
