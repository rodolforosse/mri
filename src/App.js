import './App.css';
import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/mri/">Home</Link>
                </li>
                <li>
                <Link to="/mri/About">About</Link>
                </li>
                <li>
                <Link to="/mri/Contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/mri/">
              <Home />
            </Route>
            <Route path="/mri/About">
              <About />
            </Route>
          </Switch>
          </div>
            );
  }
}

export default App;
