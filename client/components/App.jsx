

//@ts-check

import React from 'react';
import Meditation from "./Meditation";
import { HashRouter as Router, Route } from 'react-router-dom';
import Game from './Game'


const App = () => {
  return (
    <Router>
      <Route path="/meditation" component={Meditation} />
      <Route path="/game" component={Game}/>
    </Router>
  );
};

export default App
