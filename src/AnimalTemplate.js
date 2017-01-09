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
    console.log(this.props);
    // console.log(this.props);
    // var image = this.props.filter(prop => prop.uri === uri)[0];
    // console.log('>>>>>>>> image');
    // console.log(image);
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails,
      // passProps: {image: image},
      leftButtonTitle: '< Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.popN(2);
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
    let pets = []
    let id = []
    for (var i=4; i<AnimalData["petfinder"]["pets"]["pet"].length; i++) {
      let animal = AnimalData["petfinder"]["pets"]["pet"][i]
      pets.push({
        uri: animal["media"]["photos"]["photo"][3]["__text"],
        id: animal["id"],
        name: animal["name"],
        breeds: animal["breeds"]["breed"],
      });
    }
    {/*let pets = []

    images.map((pet, index) => {
      pet = {
        uri: pet.uri,
        id: pet.id,
        name: pet.name,
        breeds: pet.breeds,
      }
      pets.push(pet);
    })*/}

    let petProfiles = [];
    for (var i=0; i<pets.length; i++) {
      petProfiles.push(
          <View>
            <TouchableHighlight onPress={this.onImagePressed.bind(this)}>
                <Image source={pets[i]}>
                  <View style={styles.backdrop}>
                  </View>
                </Image>
              </TouchableHighlight>
              <Text style={styles.briefDescription}>{pets[i].name}, {pets[i].breeds}</Text>
          </View>
      );
    }

    return (
      <View>
      <ScrollView bounces scrollsToTop>
      <Swiper height={500} dotColor={clrs.transparent} activeDotColor={clrs.transparent}>
        {petProfiles}
      </Swiper>
        <View>
          {/*<Text style={styles.briefDescription}>{this.props.pets.id}</Text>*/}
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
