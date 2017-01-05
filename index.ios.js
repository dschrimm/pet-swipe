'use strict';

var Animal = require('./src/Animal');
var Welcome = require('./src/Welcome');
var FavoritesList = require('./src/FavoritesList');
var Menu = require('./src/Menu');
var styles = require('./utilities/stylesheet');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  NavigatorIOS
} from 'react-native';
// import Root from './components/Root';


class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
        interactivePopGestureEnabled={false}
        // navigationBarHidden={true}
        style={styles.container}
        initialRoute={{
          title: 'Pet Swipe',
          // component: Welcome,
          component: Menu
        }}/>
    );
  }
}

AppRegistry.registerComponent('PetSwipe', () => Navigation);
