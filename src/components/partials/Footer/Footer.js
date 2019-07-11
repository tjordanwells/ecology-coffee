import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import "./index.css";

library.add(fab, faInstagram, faEnvelope, faFacebook);

function Footer() {
  return (
    <div className="footer-container">
      <div className="link-menu">
        <a className="footer-link" href="/team">
          Team
        </a>
        <a className="footer-link" href="/partners">
          Partners
        </a>
        <a className="footer-link" href="/careers">
          Careers
        </a>
      </div>
      <div className="social-icon-menu">
        <a
          className="icon"
          href="https://www.instagram.com/ecology.coffee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a
          className="icon"
          href="https://www.facebook.com/ecologycoffee"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a className="icon" href="mailto:mike@ecology.coffee">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
      <div className="contact">
        <p>mike@ecology.coffee | 919.999.9999</p>
      </div>
      <p className="copyright">Copyright 2019 | Ecology Coffee</p>
    </div>
  );
}

export default Footer;
