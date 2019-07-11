import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/" component={Splash} />
            <Route path="/map-demo" component={HomePage} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/locate" component={CloudLocater} />
          </Switch>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
