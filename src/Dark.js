import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Dark extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text
          style={styles.title}
          onPress={() => Actions.light()}>Dark</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    color: 'white'
  }
}
