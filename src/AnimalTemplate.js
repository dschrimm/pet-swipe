'use strict';

import AnimalDetails from './AnimalDetails';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  AsyncStorage
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps)
  },

  render() {
    return (
       <View ref={component => this._root = component} {...this.props}>
          <Image source={{uri: this.props.uri}} resizeMode="contain">
            <View style={styles.backdrop}>
            </View>
          </Image>
        <Text style={styles.briefDescription}>{this.props.name}</Text>
        <Text style={styles.breedList}>{this.props.breeds}</Text>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.backdrop}>
        <Text style={styles.breedList}>No more pets match your search. Revise your search and keep on swiping!</Text>
      </View>
    )
  }
})

class AnimalTemplate extends Component {
  constructor(props) {
    super(props);

    var categorizedPets = this.getCategorizedPets();

    this.state = {
      pets: [],
      categorized: categorizedPets,
      currentPet: 0,
    };
    this.fetchAnimals();
  }

  fetchAnimals() {
    var zipCode, animalType, breed, size, sex, age;
    AsyncStorage.getItem('animalType', (err, result) => {
      animalType = result;

      AsyncStorage.getItem('zipCode', (err, result) => {
        zipCode = result;

        AsyncStorage.getItem('selectedSize', (err, result) => {
          size = result;
          if (size == null) {
            size = ''
          }

          AsyncStorage.getItem('selectedSex', (err, result) => {
            sex = result;
            if (sex == null) {
              sex = ''
            }

            AsyncStorage.getItem('selectedAge', (err, result) => {
              age = result;
              if (age == null) {
                age = ''
              }

              AsyncStorage.getItem('breed', (err, result) => {
                breed = result;
                if (breed == null) {
                  breed = ''
                }
                fetch('http://www.thepetswipeapp.com/search', {
                  headers: {
                    location: zipCode,
                    size: size,
                    sex: sex,
                    animal: animalType,
                    breed: breed,
                    age: age,
                    // offset: this.state.offset
                  }
                })

                .then((response) => response.json())
                .then((responseJson) => {
                  this.setState({pets: responseJson.petfinder.pets.pet});
                })
                .catch((error) => {
                  console.error(error);
                });
              });
            });
          });
        });
      });
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

  fetchFavorites() {
    let idList = [];
    fetch('http://www.thepetswipeapp.com/favorites', {
    })
    .then((response) => response.json())
    .then((responseJson) => {
      for (var i=0; i<responseJson.length; i++) {
        idList.push(responseJson[i].petId);
      }
    })
    return idList;
  }

  getCategorizedPets() {
    let idList = this.fetchFavorites();
    fetch('http://www.thepetswipeapp.com/rejections', {
    })
    .then((response) => response.json())
    .then((responseJson) => {
      for (var i=0; i<responseJson.length; i++) {
        idList.push(responseJson[i].petId);
      }
      this.state.categorizedPets = idList;
      this.state.currentPet = 0;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  makePetList() {
    this.getCategorizedPets();

    let petList = [];
    let id = [];
    for (var i=0; i<this.state.pets.length; i++) {
      // If pet is in favorites or rejections, skip it
      if (this.state.categorizedPets.includes(this.state.pets[i].id.$t)) {
        continue;
      }

      let animal = this.state.pets[i];

      // Retrieve all breeds assigned to animal
      var breeds = animal.breeds.breed;
      var breedList = '';
      if (typeof breeds.$t == 'string') {
        breedList = breeds.$t;
      } else {
        for (var j=0; j<breeds.length - 1; j++) {
          breedList = breedList + breeds[j].$t + ' / ';
        }
        breedList = breedList + breeds[breeds.length - 1].$t;
      }

      let photoUri = '';
      let photos = ''
      // Skip animal if they do not have any photos
      if (animal.media.photos != undefined) {
        photos = animal.media.photos.photo;
      } else {
        break;
      }

      // Choose the first high-quality photo
      for (var j=0; j<photos.length; j++) {
        if (photos[j]["@size"] == 'x') {
          photoUri = photos[j].$t;
          break;
        }
      }

      // If the pet does not have at least one high quality photo, skip the pet
      if (photoUri == '') {
        break;
      } else {
        petList.push({
          uri: animal.media.photos.photo[3].$t,
          id: animal.id.$t,
          name: animal.name.$t,
          breeds: breedList
        });
      }
    }
    return petList;
  }

  handleYup (card) {
    fetch('http://www.thepetswipeapp.com/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: card.id
      })
    })
    .then(() => {
      this.incrementPetIndex();
    })
  }
  handleNope (card) {
    fetch('http://www.thepetswipeapp.com/rejections', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: card.id
      })
    })
    .then(() => {
      this.incrementPetIndex();
    })
  }

  incrementPetIndex() {
    this.setState({currentPet: (this.state.currentPet + 1)})
  }

  componentWillReceiveProps() {
    this.setState({updated: true})
  }

  render() {
    let petList = this.makePetList();
    let index = this.state.currentPet;

    return (
      <View style={{flex: 1, marginTop: 70}}>
      <View style={{flex: 5, marginBottom: 40}}>
      <SwipeCards
        yupText='YAY!'
        yupTextStyle={{backgroundColor: clrs.transparent, color: 'green'}}
        noText='NOPE'
        nopeTextStyle={{backgroundColor: clrs.transparent, color: 'red'}}
        containerStyle={{margin: 10}}
        cards={petList}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
      />
      </View>
        <TouchableOpacity onPress={() => this.onImagePressed(petList[index].id)} underlayColor={clrs.darkBrown}>
          <View style={styles.learnMoreButton}>
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = AnimalTemplate;
