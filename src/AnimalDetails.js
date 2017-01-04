// example detail data

'use strict';

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

class AnimalDetails extends Component {

  constructor() {
    super();

    var petData = {
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
                  "__text": "\n     http://photocache.petfinder.com/fotos/NJ94/NJ94.26401-1-x.jpg\n    "
                },
                {
                  "_id": "1",
                  "_size": "t",
                  "__text": "\n     http://photocache.petfinder.com/fotos/NJ94/NJ94.26401-1-t.jpg\n    "
                },
                {
                  "_id": "1",
                  "_size": "pn",
                  "__text": "\n     http://photocache.petfinder.com/fotos/NJ94/NJ94.26401-1-pn.jpg\n    "
                },
                {
                  "_id": "1",
                  "_size": "pnt",
                  "__text": "\n     http://photocache.petfinder.com/fotos/NJ94/NJ94.26401-1-pnt.jpg\n    "
                },
                {
                  "_id": "1",
                  "_size": "fpm",
                  "__text": "\n     http://photocache.petfinder.com/fotos/NJ94/NJ94.26401-1-fpm.jpg\n    "
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from animal details</Text>
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
    height: 120,
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

  module.exports = AnimalDetails;
