

//@ts-check

import React from 'react';
import Meditation from "./Meditation";
import { HashRouter as Router, Route } from 'react-router-dom';
import Game from './Game'
import Home from "./Home";


const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/meditation" exact component={Meditation} />
      <Route path="/game" exact component={Game}/>
    </Router>
  );
};

export default App
