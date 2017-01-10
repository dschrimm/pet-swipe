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

    this.pets = [];
    this.fetchAnimals();
  }

  fetchAnimals() {
    // TODO: make this faster!
    fetch('http://api.petfinder.com/pet.find?format=json&key=f2e828ff92a5d99a6e9ff79e10ca558a&animal=dog&location=98144&size=M')
      .then((response) => response.json())
      .then((responseJson) => {
        this.pets = responseJson.petfinder.pets.pet;
        this.render();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onImagePressed(petId) {
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails,
      passProps: {petId: petId},
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
    let petList = []
    let id = []
    for (var i=0; i<this.pets.length; i++) {
      let animal = this.pets[i]
      petList.push({
        uri: animal["media"]["photos"]["photo"][3]['$t'],
        id: animal["id"]['$t'],
        name: animal["name"]['$t'],
        breeds: animal["breeds"]["breed"]['$t'],
        // TODO: Handle animals with more than one breed
      });
    }
    {/*for (var i=4; i<AnimalData["petfinder"]["pets"]["pet"].length; i++) {
      let animal = AnimalData["petfinder"]["pets"]["pet"][i]
      petList.push({
        uri: animal["media"]["photos"]["photo"][3]["__text"],
        id: animal["id"],
        name: animal["name"],
        breeds: animal["breeds"]["breed"],
      });
    }*/}
    {/*let pets = []

    petList.map((pet, index) => {
      pet = {
        uri: pet.uri,
        id: pet.id,
        name: pet.name,
        breeds: pet.breeds,
      }
      pets.push(pet);
    })*/}

    let petProfiles = [];
    for (var i=0; i<petList.length; i++) {
      let pet = petList[i]
      petProfiles.push(
        <View>
          <TouchableHighlight onPress={() => this.onImagePressed(pet.id)}>
            <Image source={pet}>
              <View style={styles.backdrop}>
              </View>
            </Image>
          </TouchableHighlight>
          <Text style={styles.briefDescription}>{pet.name}, {pet.breeds}</Text>
        </View>
      );
    }

    return (
      <View>
        <ScrollView bounces scrollsToTop height={650}>
          <Swiper height={470} dotColor={clrs.transparent} activeDotColor={clrs.transparent}>
            {petProfiles}
          </Swiper>
          <View>
            <View style={styles.nextPetButtons}>
              <TouchableHighlight onPress={this.onXPressed.bind(this)}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1024px-Red_x.svg.png'}} style={{flex: 1}, {height: 40, width: 40, margin: 10, marginRight: 50}}>
                </Image>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onYPressed.bind(this)}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2000px-Green_check.svg.png'}} style={{flex: 1}, {height: 40, width: 40, margin: 10, marginLeft: 50}}>
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
