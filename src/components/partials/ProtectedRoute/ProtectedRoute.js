import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth0();

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />;

  return <Route render={render} {...rest} />;
};

export default ProtectedRoute;
