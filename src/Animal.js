'use strict';

var AnimalDetails = require('./AnimalDetails');

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

class Animal extends Component {
  onImagePressed() {
    console.log('image pressed');
    this.props.navigator.push({
      title: 'Animal Details',
      component: AnimalDetails
    });
  }

  render() {

    let petImage = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    };

    return (
      // Browse pets
      // https://www.petfinder.com/petdetail/37055772
      <View style={styles.swipeImage}>
      <TouchableHighlight
        onPress={this.onImagePressed.bind(this)}>
        <Image source={petImage} style={{flex: 1}, styles.button}>
        <View style={styles.backdrop}>
        </View>
        </Image>
      </TouchableHighlight>
        <View>
        <Text style={styles.briefDescription}>Annika, German Shepherd</Text>
        </View>
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
  button: {
    // height: 26,
    // flex: 1,
    // flexDirection: 'row',
    // backgroundColor: '#B26E63',
    // borderColor: '#B26E63',
    // borderWidth: 1,
    borderRadius: 8,
    // margin: 20,
    // alignSelf: 'stretch',
    // justifyContent: 'center'
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
  swipeImage: {
    flex: 1,
    marginTop: 55,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 200,

    // alignSelf: 'center',
    // backgroundColor: 'pink'
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
    height: 320,
    flexDirection: 'column-reverse',
    alignSelf: 'flex-end'
  },
  briefDescription: {
    fontSize: 20,
    // textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  }
});

module.exports = Animal;
