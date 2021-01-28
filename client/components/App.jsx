//@ts-check

import React from 'react';
import Meditation from "./Meditation";
import { HashRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Route path="/meditation" component={Meditation} />
    </Router>
  );
};

export default App
