import React from 'react';
import { Header} from './containers/index.js';
import { Home } from './containers/index.js'
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

const App = () => {


  return (
    <div className="App">
      <Router>
        <Home />
        {/* <Header /> */}
      </Router>
    </div>
  )
}

export default App;