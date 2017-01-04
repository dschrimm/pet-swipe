// Welcome/loading page
'use strict';

var Animal = require('./Animal');
var FavoritesList = require('./FavoritesList');


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

class Menu extends Component {
  constructor(props) {
    super(props);
    // this.state
  }

  onMatchesPressed() {
    this.props.navigator.push({
      title: 'Find Matches',
      component: Animal
    });
  }

  onFavoritesPressed() {
    this.props.navigator.push({
      title: 'My Favorites',
      component: FavoritesList
    });
  }

  // onProfilePressed() {
  //   console.log('image pressed');
  //   this.props.navigator.push({
  //     title: 'Animal Details',
  //     component: AnimalDetails
  //   });
  // }

  render() {
    return (
      <View style={styles.menuContainer}>
        <TouchableHighlight
          onPress={this.onMatchesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: '#717c89'}}>
            <Text style={styles.menuText}>
            Find Matches
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onFavoritesPressed.bind(this)}>
          <View style={styles.menuRows, {backgroundColor: '#a1e5ab'}}>
            <Text style={styles.menuText}>
            My Favorites
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.menuRows, {backgroundColor: '#90baad'}}>
          <Text style={styles.menuText}>
          Edit Profile
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 45,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#90BAAD',
    // backgroundColor: 'white',
    // backgroundColor: '#C0CAAD'
  },
  menuRows: {
    flex: 1,
  },
  menuText: {
    color: 'black',
    fontSize: 30,
    margin: 82,
    alignSelf: 'center'
  },
  text: {
    // backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    margin: 80
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 26,
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#B26E63',
    borderColor: '#B26E63',
    borderWidth: 1,
    borderRadius: 8,
    margin: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#90BAAD',
    // backgroundColor: 'white',
    backgroundColor: '#C0CAAD'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#654C4F',
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
    color: '#654C4F',
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

module.exports = Menu;
