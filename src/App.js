import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Dark from './Dark';
import Light from './Light';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            initial
            key="dark"
            component={Dark}
            title="Dark Screen" />

          <Scene
            key="light"
            component={Light}
            title="Light Screen" />
        </Scene>
      </Router>
    );
  }
};
