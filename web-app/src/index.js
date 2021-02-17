import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/home';
import Galeria from './pages/galeria';
import GaleriaCerta from './pages/galeriaCerta'

import reportWebVitals from './reportWebVitals';


import { Route, BrowserRouter as Router, Switch} from "react-router-dom";

const routing =(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/galeria' component={Galeria} /> */}
        <Route path='/galeria' component={GaleriaCerta} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
