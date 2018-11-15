import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import NetflixClone from './containers/NetflixClone/NetflixClone'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NetflixClone />
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
