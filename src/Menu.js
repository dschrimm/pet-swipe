// Welcome/loading page
'use strict';

import Animal from './Animal';
import AnimalTemplate from './AnimalTemplate';
import FavoritesList from './FavoritesList';
import UserProfile from './UserProfile';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

class Menu extends Component {
  constructor(props) {
    super(props);
    if (!this.props.zipCode) {
      // this.props.zipCode = 92130;
      console.log('undefined');
    } else {
      console.log('defined');
    }
  }

  onMatchesPressed() {
    // console.log('zipcode', this.props.zipCode);
    this.props.navigator.push({
      title: 'Find Matches',
      component: AnimalTemplate,
      // passProps: {pets: response.pets},
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
            <Text style={styles.menuText}>
            Find Matches
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onFavoritesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.menuTwo}}>
            <Text style={styles.menuText}>
            My Favorites
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onProfilePressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.menuThree}}>
            <Text style={styles.menuText}>
            Edit Profile
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Menu;
