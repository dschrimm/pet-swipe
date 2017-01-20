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
  TouchableOpacity,
  AlertIOS,
  ScrollView,
  AsyncStorage
} from 'react-native';

// import Swiper from 'react-native-swiper';

class AnimalTemplate extends Component {
  constructor(props) {
    super(props);

    var categorizedPets = this.getCategorizedPets();

    this.state = {
      pets: [],
      categorized: categorizedPets,
      currentPet: 0
    };
    this.fetchAnimals();
  }

  fetchAnimals() {
    var zipCode, animalType, breed;
    AsyncStorage.getItem('animalType', (err, result) => {
      animalType = result;

    AsyncStorage.getItem('zipCode', (err, result) => {
      zipCode = result;
      fetch('http://www.thepetswipeapp.com/search', {
        headers: {
          location: zipCode,
          size: 'M',
          animal: animalType
        }
      })

      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson.petfinder.pets.pet);
        this.setState({pets: responseJson.petfinder.pets.pet});
      })
      .catch((error) => {
        console.error(error);
      });
    })
    });
    }

  onImagePressed(petId) {
    this.props.navigator.push({
      // interactivePopGestureEnabled: true,
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



  onXPressed(id) {
    fetch('http://www.thepetswipeapp.com/rejections', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: id
      })
    });
    this.setState({currentPet: (this.state.currentPet + 1)});
  }

  onYPressed(id) {
    fetch('http://www.thepetswipeapp.com/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: id
      })
    });
    this.setState({currentPet: (this.state.currentPet + 1)});
  }

  afterPress(action) {
    var i = 0;
    var timer = setInterval(function(){
      console.log(++i);
      if(i === 6) {
        this.nextPet()
        // clearInterval(timer)
        // this.setState({currentPet: (this.state.currentPet + 1)});
      console.log('post-interval'); //this will still run after clearing
      // this.nextPet();
    }
    },200);

  }

  nextPet() {
    var currentIndex = this.state.currentPet;
    this.setState({currentPet: (currentIndex + 1)});
    return true;
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
      this.state.favorites = idList;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let petList = [];
    let id = [];
    for (var i=0; i<this.state.pets.length; i++) {
      if (this.state.favorites.includes(this.state.pets[i].id.$t)) {
        continue;
      }
      let animal = this.state.pets[i];
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
      // console.log(animal.media.photos.photo[3].$t);
      // break
      let photoUri = '';
      let photos = ''
      if (animal.media.photos != undefined) {
        photos = animal.media.photos.photo;
      } else {
        break;
      }

      for (var j=0; j<photos.length; j++) {
        if (photos[j]["@size"] == 'x') {
          photoUri = photos[j].$t;
          break;
        }
      }
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
      let pet = petList[i];
      petProfiles.push(
        <View>
          <TouchableHighlight onPress={() => this.onImagePressed(pet.id)}>
            <Image source={pet}>
              <View style={styles.backdrop}>
              </View>
            </Image>
          </TouchableHighlight>
          <Text style={styles.briefDescription}>{pet.name} - {pet.breeds}</Text>
        </View>
      );
    }
    return (
      <View>
        <ScrollView bounces scrollsToTop height={650}>
            {petProfiles[this.state.currentPet]}
          <View>
            <View style={styles.nextPetButtons}>
              <TouchableOpacity onPress={() => this.onXPressed(petList[this.state.currentPet].id)}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1024px-Red_x.svg.png'}} style={{flex: 1}, {height: 40, width: 40, margin: 10, marginRight: 50}}>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onYPressed(petList[this.state.currentPet].id)}>
                <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Green_check.svg/2000px-Green_check.svg.png'}} style={{flex: 1}, {height: 40, width: 40, margin: 10, marginLeft: 50}}>
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = AnimalTemplate;
