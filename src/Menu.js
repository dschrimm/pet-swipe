// Welcome/loading page
'use strict';

import Animal from './Animal';
import AnimalTemplate from './AnimalTemplate';
import FavoritesList from './FavoritesList';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.state
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

  // onProfilePressed() {
  //   console.log('image pressed');
  //   this.props.navigator.push({
  //     title: 'Profile',
  //     component: AnimalDetails
  //   });
  // }

  render() {
    return (
      <View style={styles.menuContainer}>
        <TouchableHighlight
          onPress={this.onMatchesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.grey}}>
            <Text style={styles.menuText}>
            Find Matches
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onFavoritesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: clrs.brightGreen}}>
            <Text style={styles.menuText}>
            My Favorites
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.menuRows, {backgroundColor: clrs.lightGreen}}>
          <Text style={styles.menuText}>
          Edit Profile
          </Text>
        </View>

      </View>
    )
  }
}

module.exports = Menu;
