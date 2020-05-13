import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Contract, Explore, Home } from './pages/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/contracts/:address"><Contract /></Route>
          <Route path="/explore"><Explore /></Route>
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
