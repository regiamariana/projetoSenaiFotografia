import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Home from './pages/home';
import Galeria from './pages/galeria';
import Nav from './pages/nav'
import reportWebVitals from './reportWebVitals';


import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

const routing =(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/galeria' component={Galeria} />
        <Route path='/nav' component={Nav} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
