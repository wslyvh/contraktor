import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components';
import { ContractPage, ExplorePage, HomePage, ProjectPage } from './pages/';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/contracts/:address"><ContractPage /></Route>
          <Route exact path="/explore"><ExplorePage /></Route>
          <Route exact path="/explore/:name"><ProjectPage /></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
