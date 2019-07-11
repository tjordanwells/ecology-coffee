import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Splash from "../src/components/pages/ComingSoon";
import HomePage from "./components/pages/HomePage";
import CloudLocater from "./components/pages/CloudLocater";
import Login from "./components/pages/Login";
import ProtectedRoute from "./components/partials/ProtectedRoute/ProtectedRoute";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Route path="/" exact component={Splash} />
          <Route path="/map-demo" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/locate" exact component={CloudLocater} />
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
