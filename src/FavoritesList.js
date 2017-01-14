// Favorites page
'use strict';

import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

class FavoritesList extends Component {
  constructor() {
    // let imageOne = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    // };
    // let imageTwo = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36618931/3/?bust=1478714805&width=632&no_scale_up=1'
    // };
    // let imageThree = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36687740/1/?bust=1478648999&width=632&no_scale_up=1'
    // };
    // let imageFour = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37064665/1/?bust=1482900212&width=632&no_scale_up=1'
    // };
    // let imageFive = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36490552/1/?bust=1480459899&width=632&no_scale_up=1'
    // };
    // //
    // // constructor(props) {
      super();
    // //
      this.state = {
        animals: [],
        petIdList: [],
        petImage: '',
        isSet: false,
        petList: []
      };
    //
    //
    //
    // let images = [imageOne, imageTwo, imageThree, imageFour, imageFive];
    // // super();
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(images),
    // };

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
    console.log('im in fetchimage');
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
      this.state.petList.push({id: petId, uri: displayImage});
      console.log(this.state);
    })
  }

  render() {
    // console.log('>>>>>>>', this.state.petIdList);
    return (
      <View style={styles.container}>
      {/*<Image source={this.state.petList}><View style={styles.backdrop}></View></Image>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Image source={this.state.petList} style={{width: 140, height: 140}}/>}
      />*/}
      </View>
    );
  }
}

module.exports = FavoritesList;
