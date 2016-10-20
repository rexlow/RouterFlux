import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Modal extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text
          style={styles.title}
          onPress={() => Actions.pop()}>Slide To Close Modal</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#e557ed',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    color: 'black'
  }
}
