'use strict';

import AnimalDetails from './AnimalDetails';
import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSet: false,
      petList: [],
    };

    this.fetchFavorites();
  }

  fetchFavorites() {
    this.state.petList = [];
    // let idList = [];
    fetch('http://www.thepetswipeapp.com/favorites', {
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
    fetch('http://www.thepetswipeapp.com/get', {
      headers: {
        id: petId
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      var imageList = responseJson.petfinder.pet.media.photos.photo;
      var displayImage = '';
      for (var i=0; i<imageList.length; i++) {
        if(imageList[i]["@size"] == 'x') {
          displayImage = imageList[i]["$t"]
          break;
        }
      }
      // TODO: Should render in the same order each time
      this.state.petList.push(
          <TouchableOpacity onPress={() => this.onImagePressed(petId)}
           style={styles.favoriteImages}
           key={petId}>
            <Image source={{uri: displayImage}} style={{borderRadius: 40}}>
              <View style={styles.backdrop}></View>
            </Image>
          </TouchableOpacity>
      )
      this.setState({isSet: true});
    })
  }

  onImagePressed(petId) {
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails,
      passProps: {petId: petId, fromFavorites: true},
      leftButtonTitle: '< Back',
      onLeftButtonPress: () => this.props.navigator.pop(),
      rightButtonTitle: 'Menu',
      onRightButtonPress: () => {
        this.props.navigator.popN(2);
      }
    });
  }

  componentWillReceiveProps() {
    // this.setState({update: 'yes'});
    // this.state.petList = [];
    this.fetchFavorites();
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <ScrollView bounces scrollsToTop>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            {this.state.petList}
          </View>
        </ScrollView>
      </View>
    )
  }
}

module.exports = FavoritesList;
