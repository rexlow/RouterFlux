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

import Yellow from './Yellow';
import Green from './Green';

import Red from './Red';
import Violet from './Violet';

import Modal from './Modal';

const TabIcon = ({ selected, title}) => {
  return(
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  );
};

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF'}}>
            <Scene key="tabA" title="TabA" icon={TabIcon}>
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
            <Scene key="tabB" title="TabB" icon={TabIcon}>
              <Scene
                initial
                key="yellow"
                component={Yellow}
                title="Yellow Screen" />

              <Scene
                key="green"
                component={Green}
                title="Green Screen" />
            </Scene>
            <Scene key="tabC" title="TabC" icon={TabIcon}>
              <Scene
                initial
                key="red"
                component={Red}
                title="Red Screen" />

              <Scene
                key="violet"
                component={Violet}
                title="Violet Screen" />
            </Scene>
          </Scene>

          <Scene
            key="modal"
            title="Modal"
            component={Modal}
            direction="vertical"
            hideNavBar>

          </Scene>

        </Scene>
      </Router>
    );
  }
};
