'use strict';

import AnimalTemplate from './AnimalTemplate';
import AnimalData from './AnimalData';
import AnimalDetails from './AnimalDetails';
import FavoritesList from './FavoritesList';
import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import Swiper from 'react-native-swiper';

class Animal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let petImage = {
    //   // uri: imageUri
    //   uri: AnimalData["petfinder"]["pets"]["pet"][3]["media"]["photos"]["photo"][2]["__text"]
    // };
    // uri: AnimalData["petfinder"]["pet"]["media"]["photos"]["photo"][0]["__text"]
    //       uri: AnimalData["petfinder"]["pets"]["pet"][0]["media"]["photos"]["photo"][0]["__text"]

    // console.log(petImage);

    let images = []
    let id = []
    for (var i=3; i<AnimalData["petfinder"]["pets"]["pet"].length; i++) {
      let animal = AnimalData["petfinder"]["pets"]["pet"][i]
      images.push({
        uri: animal["media"]["photos"]["photo"][2]["__text"],
        id: animal["id"],
        name: animal["name"],
        breeds: animal["breeds"]["breed"]
      });
    }
    let pets = []

    images.map((pet, index) => {
      // console.log(pet.id + ' ' + pet.uri)
      console.log(pet.breeds);
      pet = {
        uri: pet.uri,
        id: pet.id,
        name: pet.name,
        breeds: pet.breeds
      }
      pets.push(pet);
    })
    // console.log('>>>>>>>>>> pets')
    // console.log(pets);


    return (
      // Browse pets
      // https://www.petfinder.com/petdetail/37055772
      <AnimalTemplate pets={pets} />
    )
  }
}

module.exports = Animal;
