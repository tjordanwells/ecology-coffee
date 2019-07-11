import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
