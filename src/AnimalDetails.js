// example detail data

'use strict';

import AnimalData from './AnimalData';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';

class AnimalDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: {},
      isSet: false
    };
    this.fetchAnimal();
  }

  fetchAnimal() {
    fetch('http://localhost:3000/get', {
      headers: {
        id: this.props.petId
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({animal: responseJson.petfinder.pet, isSet: true});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onXPressed() {
    fetch('http://localhost:3000/rejections', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: this.props.petId
      })
    });
  }

  onYPressed() {
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: this.props.petId
      })
    });
  }

  render() {
   // TODO: add error message if for some reason pet details cannot be found
    let images = [];
    let description = '';
    if (this.state.isSet == true) {
      description = this.state.animal.description["$t"];
      let numImages = this.state.animal.media.photos.photo.length;
      for (var i=0; i<numImages; i++) {
        let uriPath = this.state.animal.media.photos.photo[i];
        if (uriPath["@size"] == 'x') {
          images.push(
            <Image source={{uri: uriPath["$t"]}} >
              <View style={styles.backdrop}></View>
            </Image>
          );
        }
      }
    }

    return (
      <View style={styles.detailView}>
        <ScrollView bounces scrollsToTop height={650}>
        <Swiper height={350} dotColor={clrs.lightYellow} activeDotColor={'purple'}>
            {images}
          </Swiper>
          <View style={styles.swipeImageText}>
            <Text style={styles.briefDescription}>
              {description}
            </Text>
          </View>
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
        </ScrollView>
      </View>
    );
  }
}

module.exports = AnimalDetails;
