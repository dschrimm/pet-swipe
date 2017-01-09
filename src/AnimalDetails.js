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

  onXPressed() {
    console.log('nope');
  }

  onYPressed() {
    console.log('yep');
  }

  render() {
    console.log('>>>>>>>> pet id from details page:');
    console.log(this.props.petId);
    // console.log(this.props.image);
    let images = [];
    let loadQueue = [];
    let numImages = AnimalData["petfinder"]["pets"]["pet"][3]["media"]["photos"]["photo"].length
    for (var i=0; i<numImages; i++) {
      let uriPath = AnimalData["petfinder"]["pets"]["pet"][3]["media"]["photos"]["photo"][i]
      if (uriPath["_size"] == 'pn') {
        images.push(<Image source={{uri: uriPath["__text"]}}><View style={styles.allImages}></View></Image>);
        loadQueue.push(0);
      }
    }

    return (
      <View style={styles.detailView}>
        <ScrollView bounces scrollsToTop>
        <Swiper height={350} dotColor={clrs.lightYellow} activeDotColor={'purple'}>
            {images}
          </Swiper>
          <View style={styles.swipeImageText}>
            <Text style={styles.briefDescription}>
              I am some text and I am long and I keep going past the bottom of the page so we will see what will happen yay! I am some text and I am long and I keep going past the bottom of the page so we will see what will happen yay! I am some text and I am long and I keep going past the bottom of the page so we will see what will happen yay! I am some text and I am long and I keep going past the bottom of the page so we will see what will happen yay!
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
