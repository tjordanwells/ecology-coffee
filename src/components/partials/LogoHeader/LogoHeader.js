import React from "react";

import "./index.css";
import logo from "../../../assets/images/LongLogo.png";

function LogoHeader() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Ecology Logo" />
    </div>
  );
}

export default LogoHeader;
