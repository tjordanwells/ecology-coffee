import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Splash from '../src/components/pages/ComingSoon';

import './App.css';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Route path='/' exact component={Splash} />
        <Route path='/map-demo' exact component={HomePage} />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
