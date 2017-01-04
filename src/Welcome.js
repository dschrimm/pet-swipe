// Welcome/loading page
'use strict';

var Animal = require('./Animal');

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

class Welcome extends Component {
  constructor(props) {
    super(props);
    // this.state
  }

  onContinuePressed() {
    console.log('continue pressed');
    this.props.navigator.push({
      title: 'Animal',
      component: Animal
    });
  }

  render() {
    let welcomeImage = {
      uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    };
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>
          Welcome to Pet Swipe!
        </Text>
        <Text style={styles.instructions}>
          This is going to be fun...
        </Text>
        <Image source={welcomeImage} style={{width: 240, height: 240}}/>
        <TouchableHighlight style={styles.button}
          underlayColor='#654C4F'
          onPress={this.onContinuePressed.bind(this)}>
          <Text style={styles.buttonText}>Ready?</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // text: {
  //   backgroundColor: 'white',
  //   color: 'white',
  //   fontSize: 30,
  //   margin: 80
  // },
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

module.exports = Welcome;