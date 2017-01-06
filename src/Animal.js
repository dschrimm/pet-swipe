'use strict';

import AnimalDetails from './AnimalDetails';

// import Menu from './Menu';
// var Menu = require('./Menu').default;

import FavoritesList from './FavoritesList';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import styles from '../utilities/stylesheet';

class Animal extends Component {
  constructor(props) {
    super(props);
  }

  onImagePressed() {
    console.log('image pressed');
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails,
      leftButtonTitle: '< Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.popN(2);
        // this.props.navigator.push({
        //   title: 'My Favorites',
        //   component: FavoritesList
        // })
        // AlertIOS.alert(
        //   'Bar Button Action',
        //   'Recognized a tap on the bar button icon',
        //   [
        //     {
        //       text: 'OK',
        //       onPress: () => console.log('Tapped OK')
        //     },
        //   ]
        // );
      }
    });
  }

  onXPressed() {
    console.log('nope');
  }

  onYPressed() {
    console.log('yep');
  }

  render() {

    let petImage = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    };

    return (
      // Browse pets
      // https://www.petfinder.com/petdetail/37055772
      <View>
        <TouchableHighlight
          onPress={this.onImagePressed.bind(this)}>
          <Image source={petImage} style={{flex: 1}, styles.imageButton}>
          <View style={styles.backdrop}>
          </View>
          </Image>
        </TouchableHighlight>
        <View>
          <Text style={styles.briefDescription}>Annika, German Shepherd</Text>
          <View style={styles.nextPetButtons}>
            <TouchableHighlight onPress={this.onXPressed.bind(this)}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1024px-Red_x.svg.png'}} style={{flex: 1}, {height: 60, width: 60, margin: 20, marginRight: 50}}>
              </Image>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onYPressed.bind(this)}>
              <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2000px-Green_check.svg.png'}} style={{flex: 1}, {height: 60, width: 60, margin: 20, marginLeft: 50}}>
              </Image>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Animal;
