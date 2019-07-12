import React from "react";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const Login = () => {
  const { loginWithRedirect, loading } = useAuth0();
  return (
    <div>
      <button
        onClick={() => {
          if (loading === false) {
            loginWithRedirect({});
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
