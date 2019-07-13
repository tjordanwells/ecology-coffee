import React from "react";
import { useAuth0 } from "../../../utils/Auth0/Auth0Wrapper";

const CloudLocater = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({ redirectUri: "http://localhost:3000/locate" })
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {/* Need to verify user.email within the click function :
        if (user.email === "mike@ecology.coffee")
          {
            allows for the put request to database
          } else {
            alerts the user that they do not have permission to do so
          }
        */}

      {isAuthenticated && (
        <span>
          <button
            onClick={() => {
              alert("this works");
              console.log(user.email);
            }}
          >
            Click
          </button>
        </span>
      )}
    </div>
  );
};

export default CloudLocater;
