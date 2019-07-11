import React from "react";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        onClick={() => loginWithRedirect("https://www.ecology.coffee/locate")}
      >
        Login
      </button>
    </div>
  );
};

export default Login;