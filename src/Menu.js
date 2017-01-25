'use strict';

import AnimalTemplate from './AnimalTemplate';
import FavoritesList from './FavoritesList';
import UserProfile from './UserProfile';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';
const Heart = require('../images/Heart-white.png');
const MagnifyingGlass = require('../images/magnifying-glass-white.png');
const Settings = require('../images/settings-gear-white.png');


import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  onMatchesPressed() {
    this.props.navigator.push({
      title: 'Find Matches',
      component: AnimalTemplate,
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.pop();
      },
      leftButtonTitle: ' '
    });
  }

  onFavoritesPressed() {
    this.props.navigator.push({
      title: 'My Favorites',
      component: FavoritesList,
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.pop();
      },
      leftButtonTitle: ' '
    });
  }

  onProfilePressed() {
    this.props.navigator.push({
      title: 'My Profile',
      component: UserProfile,
      leftButtonTitle: 'Cancel',
      onLeftButtonPress: () => {
        this.props.navigator.pop();
      },
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.pop();
      },
      leftButtonTitle: ' '
    });
  }

  render() {
    return (
      <View style={styles.menuContainer}>
        <TouchableHighlight
          onPress={this.onMatchesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.menuOne}}>
          <View style={styles.menuContent}>
            <Text style={styles.menuText}>
            Find Matches
            </Text>
            <Image source={MagnifyingGlass} style={styles.menuIcon}/>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onFavoritesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.menuTwo}}>
            <View style={styles.menuContent}>
              <Text style={styles.menuText}>
              My Favorites
              </Text>
              <Image source={Heart} style={styles.menuIcon}/>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onProfilePressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.menuThree}}>
          <View style={styles.menuContent}>
              <Text style={styles.menuText}>
              Edit Profile
              </Text>
              <Image source={Settings} style={styles.menuIcon}/>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Menu;
