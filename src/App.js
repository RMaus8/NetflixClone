import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import NetflixClone from './containers/NetflixClone/NetflixClone'
import './App.css'

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route component={NetflixClone}/>
        <Redirect to="/" />
      </Switch>
    )
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
