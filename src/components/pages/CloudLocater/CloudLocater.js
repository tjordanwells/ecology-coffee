import React from "react";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const CloudLocater = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <p>You are logged in!</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default CloudLocater;
