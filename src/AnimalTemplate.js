'use strict';

import AnimalData from './AnimalData';
import AnimalDetails from './AnimalDetails';
import FavoritesList from './FavoritesList';
import styles from '../utilities/stylesheet';

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS
} from 'react-native';

import Swiper from 'react-native-swiper';

class AnimalTemplate extends Component {
  constructor(props) {
    super(props);
    // console.log('>>>>>>> props')
    // console.log(props);
  }

  onImagePressed() {
    console.log('>>>>>>>>>>> props');
    console.log(this);
    // console.log(this.props);
    // var image = this.props.filter(prop => prop.uri === uri)[0];
    // console.log('>>>>>>>> image');
    // console.log(image);
    // this.props.navigator.push({
    //   title: 'Animal Details',
    //   component: AnimalDetails,
    //   passProps: {image: image},
    //   leftButtonTitle: '< Back',
    //   onLeftButtonPress: () => this.props.navigator.pop(),
    //   rightButtonTitle: 'Menu',
    //   onRightButtonPress: () => {
    //     this.props.navigator.popN(2);
    //     // AlertIOS.alert(
    //     //   'Bar Button Action',
    //     //   'Recognized a tap on the bar button icon',
    //     //   [
    //     //     {
    //     //       text: 'OK',
    //     //       onPress: () => console.log('Tapped OK')
    //     //     },
    //     //   ]
    //     // );
    //   }
    // });
  }

  onXPressed() {
    console.log('nope');
  }

  onYPressed() {
    console.log('yep');
  }

  render() {
    // console.log('>>>>>>>')
    // console.log(this.props.pets);
    // let petImage = {
    //   // uri: imageUri
    //   uri: AnimalData["petfinder"]["pets"]["pet"][3]["media"]["photos"]["photo"][2]["__text"]
    // };

    // uri: AnimalData["petfinder"]["pet"]["media"]["photos"]["photo"][0]["__text"]
    //       uri: AnimalData["petfinder"]["pets"]["pet"][0]["media"]["photos"]["photo"][0]["__text"]

    // console.log(petImage);

    let pets = [];
    for (var i=0; i<this.props.pets.length; i++) {
      pets.push(
          <View>
          <TouchableHighlight onPress={this.onImagePressed.bind(this.props.pets[i].id)}>
            <Image source={this.props.pets[i]}>
              <View style={styles.backdrop}>
              </View>
            </Image>
            </TouchableHighlight>
            <Text>{this.props.pets[i].id}</Text>
          </View>
      );
    }

    return (
      // Browse pets
      // https://www.petfinder.com/petdetail/37055772
      <View>
      <Swiper height={350}>
        {pets}
      </Swiper>
        {/*<TouchableHighlight
          onPress={this.onImagePressed.bind(this)}>
          <Image source={this.props.pets[2]} style={{flex: 1}, styles.imageButton}>
          <View style={styles.backdrop}>
          </View>
          </Image>
        </TouchableHighlight>*/}
        <View>
          <Text style={styles.briefDescription}>{this.props.pets.id}</Text>
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
        </View>
      </View>
    );
  }
}

module.exports = AnimalTemplate;
