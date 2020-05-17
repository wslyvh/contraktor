import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components';
import { ContractPage, ExplorePage, HomePage, ProjectPage } from './pages/';
import { Web3Provider } from 'ethers/providers';
import { Web3ReactProvider } from "@web3-react/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';

function getWeb3Provider(provider: any): Web3Provider {
  const web3Provider = new Web3Provider(provider);
  return web3Provider;
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getWeb3Provider}>
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
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
