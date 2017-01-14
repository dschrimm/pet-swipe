'use strict';

import AnimalDetails from './AnimalDetails';
import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

class FavoritesList extends Component {
  constructor(props) {
    super(props);
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
      // TODO: Should render in the same order each time
      this.state.petList.push(
        <View>
          <TouchableHighlight onPress={() => this.onImagePressed(petId)}>
            <Image source={{uri: displayImage}}>
              <View style={styles.backdrop}></View>
            </Image>
          </TouchableHighlight>
        </View>
      )
      this.setState({isSet: true});
    })
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
