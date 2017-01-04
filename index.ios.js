'use strict';

var Animal = require('./src/Animal');
var Welcome = require('./src/Welcome');
var FavoritesList = require('./src/FavoritesList');
var Menu = require('./src/Menu');
var styles = require('./stylesheet');

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

class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
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
