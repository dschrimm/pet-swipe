// Favorites page
'use strict';

// var styles = require('../stylesheet');

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator
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

const styles = StyleSheet.create({
  // text: {
  //   backgroundColor: 'white',
  //   color: 'white',
  //   fontSize: 30,
  //   margin: 80
  // },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90BAAD',
    // backgroundColor: 'white'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#717C89',
    fontWeight: 'bold'
  },
  container: {
    paddingTop: 25,
    // backgroundColor: '#90BAAD',
    flex: 1,
    // justifyContent: 'space-between',
    // alignContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0)',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
    // resizeMode: 'cover'
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: '#717C89',
    marginBottom: 5,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0)',
    // backgroundColor: 'white',
    width: 320,
    height: 120,
    flexDirection: 'column-reverse',
    alignSelf: 'flex-end'
  },
  briefDescription: {
    fontSize: 20,
    // textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

module.exports = FavoritesList;
