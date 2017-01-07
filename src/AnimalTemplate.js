'use strict';

import AnimalData from './AnimalData';
import AnimalDetails from './AnimalDetails';
import FavoritesList from './FavoritesList';
import styles from '../utilities/stylesheet';
import Animal from './Animal';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

class AnimalTemplate extends Component {
  constructor(props) {
    super(props);
    // console.log('>>>>>>> props')
    // console.log(props);
  }

  onImagePressed() {
    console.log('>>>>>>>>>>> this (pet id)');
    console.log(this);
    // console.log(this.props);
    // var image = this.props.filter(prop => prop.uri === uri)[0];
    // console.log('>>>>>>>> image');
    // console.log(image);
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails,
      passProps: {image: image},
      leftButtonTitle: '< Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.popN(2);
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
    AlertIOS.alert(
      'Nope',
      ':(',
      [
        {
          text: 'OK',
          onPress: () => console.log('Tapped OK')
        },
      ]
    );
  }

  onYPressed() {
    console.log('yep');
    AlertIOS.alert(
      'Yep',
      ':)!',
      [
        {
          text: 'OK',
          onPress: () => console.log('Tapped OK')
        },
      ]
    );
  }

  render() {
    let pets = [];
    for (var i=0; i<this.props.pets.length; i++) {
      pets.push(
          <View>
            <TouchableHighlight onPress={this.onImagePressed.bind(this.props.pets[i].id)}>
                <Image source={this.props.pets[i]}>
                  <View style={styles.backdrop}>
                  </View>
                </Image>
              </TouchableHighlight>
              <Text style={styles.briefDescription}>{this.props.pets[i].name}, {this.props.pets[i].breeds}</Text>
          </View>
      );
    }

    return (
      <View>
      <ScrollView bounces scrollsToTop>
      <Swiper height={500} dotColor={clrs.transparent} activeDotColor={clrs.transparent}>
        {pets}
      </Swiper>
        <View>
          <Text style={styles.briefDescription}>{this.props.pets.id}</Text>
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
        </ScrollView>
      </View>
    );
  }
}

module.exports = AnimalTemplate;
