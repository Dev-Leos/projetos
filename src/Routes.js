import Home from './Home';
import About from './About';
import Contact from './Contact';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function BasicExample() {
  return (

    <Router>
      <div class="rotas">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}