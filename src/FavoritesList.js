// Favorites page
'use strict';

import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  ScrollView
} from 'react-native';

class FavoritesList extends Component {
  constructor() {
      super();
      this.state = {
        animals: [],
        petIdList: [],
        petImage: '',
        isSet: false,
        petList: []
      };

    this.fetchFavorites();
  }

  fetchFavorites() {
    let idList = [];
    fetch('http://localhost:3000/favorites', {
    })
    .then((response) => response.json())
    .then((responseJson) => {
      for (var i=0; i<responseJson.length; i++) {
        this.fetchImage(responseJson[i].petId);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  fetchImage(petId) {
    var imageUrl = ''
    fetch('http://localhost:3000/get', {
      headers: {
        id: petId
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var imageList = responseJson.petfinder.pet.media.photos.photo
      var displayImage = '';
      for (var i=0; i<imageList.length; i++) {
        if(imageList[i]["@size"] == 'x') {
          displayImage = imageList[i]["$t"]
          // TODO: break loop
        }
      }
      this.state.petList.push(
        <View>
        <Image source={{uri: displayImage}}>
          <View style={styles.backdrop}></View>
          {/*id: petId, uri: displayImage});*/}
        </Image>
        </View>
      )
    })
    // this.setState({petList: petList});
  }

  render() {
    return (

      <View>
      <ScrollView bounces scrollsToTop height={650}>
      {this.state.petList}
      </ScrollView>
      </View>
    )
  }
}

module.exports = FavoritesList;
