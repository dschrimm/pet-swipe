'use strict';

// var Welcome = require('./src/Welcome');
var Menu = require('./src/Menu');
var styles = require('./utilities/stylesheet');

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';


class Navigation extends Component {
  render() {
    return (
      <NavigatorIOS
        interactivePopGestureEnabled={true}
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
