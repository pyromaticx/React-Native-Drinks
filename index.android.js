/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Home from './home.js';


let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
class DrinksApp extends Component {

  constructor() {
    super();

  }

  render() {
    return (
      <View style={styles.wrapper}>
      <Home> </Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: ScreenHeight,
    width: ScreenWidth,
    paddingBottom: 30,
    backgroundColor: '#333'
  },
  drinkTitle: {
    color: '#eee',
    textAlign: 'center',
    marginTop: 20,

  }
});

AppRegistry.registerComponent('DrinksApp', () => DrinksApp);
