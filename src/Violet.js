import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Violet extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text
          style={styles.title}
          onPress={() => Actions.red()}>Violet</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EE82EE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    color: 'blue'
  }
}
