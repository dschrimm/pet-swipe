// Welcome/loading page
'use strict';

var Menu = require('./Menu');

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import clrs from '../utilities/clrs';
import styles from '../utilities/stylesheet';


class Welcome extends Component {
  constructor(props) {
    super(props);
  }

    this.props.navigator.push({
      title: 'Menu',
      component: Menu,
      leftButtonTitle: ' '
    });
  }

  render() {
    let welcomeImage = {
      uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    };
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>
          Welcome to Pet Swipe!
        </Text>
        <Text style={styles.instructions}>
          This is going to be fun...
        </Text>
        <Image source={welcomeImage} style={{width: 240, height: 240}}/>
        <TouchableHighlight style={styles.button}
          underlayColor={clrs.darkBrown}
          onPress={this.onContinuePressed.bind(this)}>
          <Text style={styles.buttonText}>Ready?</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Welcome;
