import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <Route
      {...rest}
      render={props => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
