import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import routes from './routes';
import Home from './home';
import Login from './login';
import SignUp from './signup';
import Accounts from './accounts';

import '../stylesheets/app.css';

export default class App extends Component {

  render() {
    return (
    <Router>
        <div>
          <h2>Login Framework</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/login'} className="nav-link"> Login </Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path="/login"> <Login /> </Route>
            <Route path="/signup"> <SignUp /> </Route>
            <Route path="/accounts"> <Accounts /> </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
