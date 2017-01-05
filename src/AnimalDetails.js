// example detail data

'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';


const petData = {
  "petfinder": {
    "header": {
      "version": "0.1",
      "timestamp": "2008-10-21T15:28:37Z",
      "status": {
        "code": "100",
        "message": ""
      }
    },

    "pet": {
      "id": "24601",
      "animal": "Dog",
      "breeds": {
        "breed": "German Shepherd Dog"
      },
      "mix": "no",
      "age": "Adult",
      "name": "Jean Valjean",
      "shelterId": "NJ94",
      "size": "M",
      "sex": "M",
      "description": "Steals bread, but is a good doggie.",
      "lastUpdate": "2008-09-30 17:01:12",
      "status": "A",
      "media": {
        "photos": {
          "photo": [
            {
              "_id": "1",
              "_size": "x",
              "__text": "https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1"
            },
            {
              "_id": "1",
              "_size": "t",
              "__text": "https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/2/?bust=1482790177&width=632&no_scale_up=1"
            },
            {
              "_id": "1",
              "_size": "pn",
              "__text": "https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/3/?bust=1482790178&width=632&no_scale_up=1"
            }
          ]
        }
      },
      "contact": ""
    },
    "_xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "_xsi:noNamespaceSchemaLocation": "http://api.petfinder.com/schemas/0.9/petfinder.xsd"
  }
}

class AnimalDetails extends Component {

  render() {
    let images = [];
    let loadQueue = [];
    let numImages = petData["petfinder"]["pet"]["media"]["photos"]["photo"].length
    for (var i=0; i<numImages; i++) {
      images.push(<Image source={{uri: petData["petfinder"]["pet"]["media"]["photos"]["photo"][i]["__text"]}}><View style={styles.allImages}></View></Image>);
      loadQueue.push(0);
    }

    return (
      <View style={styles.detailView}>
      <ScrollView bounces scrollsToTop>
        <Swiper height={450} dotColor={clrs.lightYellow} activeDotColor={'purple'}>
          {images}
        </Swiper>
        <View style={styles.swipeImageText}>
          <Text style={styles.briefDescription}>
            I am some text and I am long and I keep going past the bottom of the page so we will see what will happen yay!
          </Text>
        </View>
      </ScrollView>
      </View>
    );
  }
}

module.exports = AnimalDetails;
