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
    let imageOne = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    };
    let imageTwo = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36618931/3/?bust=1478714805&width=632&no_scale_up=1'
    };
    let imageThree = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36687740/1/?bust=1478648999&width=632&no_scale_up=1'
    };
    let imageFour = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37064665/1/?bust=1482900212&width=632&no_scale_up=1'
    };
    let imageFive = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36490552/1/?bust=1480459899&width=632&no_scale_up=1'
    };
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([imageOne, imageTwo, imageThree, imageFour, imageFive]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Image source={rowData} style={{width: 140, height: 140}}/>}
      />
      </View>
    );
  }
}

module.exports = FavoritesList;
