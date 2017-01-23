'use strict';

import AnimalData from './AnimalData';
import AnimalTemplate from './AnimalTemplate';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  AlertIOS
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
    fetch('http://www.thepetswipeapp.com/get', {
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

  isFavorite() {
    if (this.props.fromFavorites){
      return (
        <View style={styles.removeButton}>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center'}}
          onPress={() => this.removeFavorite(this.props.petId)}
          underlayColor={clrs.darkRed}>
            <Text style={styles.profileButtonText}>Remove From Favorites</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      console.log('not from favorites');
    //   return (
    //     true
    //   )
    }
  }

  removeFavorite(petId) {
    fetch('http://www.thepetswipeapp.com/favorites/' + petId, {
      method: 'DELETE',
    });

    // Add animal to rejections to avoid showing up in options again
    fetch('http://www.thepetswipeapp.com/rejections', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test1@test.com',
        petId: petId
      })
    });
    this.props.navigator.pop();
    // TODO: figure out re-render on pop
  }

  render() {
    let images = [];
    let description = '';
    if (this.state.isSet == true) {
      description = this.state.animal.description["$t"];
      let numImages = this.state.animal.media.photos.photo.length;
      for (var i=0; i<numImages; i++) {
        let uriPath = this.state.animal.media.photos.photo[i];
        if (uriPath["@size"] == 'x') {
          images.push(
            <Image source={{uri: uriPath["$t"]}} key={i}>
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
            {this.isFavorite()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

module.exports = AnimalDetails;
