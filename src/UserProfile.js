import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage,
  Keyboard
} from 'react-native';

import AnimalTemplate from './AnimalTemplate';
import ModalPicker from 'react-native-modal-picker';
import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

let index = 0;
  const animalTypes = [
    {key: index++, label: 'Dog', type: 'dog'},
    {key: index++, label: 'Cat', type: 'cat'},
    {key: index++, label: 'Bird', type: 'bird'},
    {key: index++, label: 'Reptile', type: 'reptile'},
    {key: index++, label: 'Barnyard', type: 'barnyard'},
    {key: index++, label: 'Horse', type: 'horse'},
    {key: index++, label: 'Pig', type: 'pig'},
    {key: index++, label: 'Small Furry', type: 'smallfurry'},
  ];

function getData(key, value, pageNumber) {
  var data = {
      page: pageNumber
  };
  data[key] = value;

  return data[key];
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    AsyncStorage.getItem('zipCode', (err, result) => {
      if (err) {
        this.setState({searchString: '90210'})
      } else {
        this.setState({searchString: result});
      }
    });
    this.state = {
      searchString: '90210',
      isLoading: false,
      animalType: '',
      breedList: []
    };

  }

  getBreedList(animalType) {
    let breedList = [];
    fetch('http://www.thepetswipeapp.com/breeds', {
      headers: {
        animal: animalType
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let breedsJson = responseJson.petfinder.breeds.breed
      for (var i=0; i<breedsJson.length; i++) {
        breedList.push({key: i, label: breedsJson[i].$t});
      }
      this.setState({animalType: animalType})
      this.setState({breedList: breedList});
    })

    .catch((error) => {
      console.error(error);
    });
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text });
  }

  _executeQuery(query) {
    this.setState({ isLoading: true });
  }

  onSearchPressed() {
    var zipCode = getData('place_name', this.state.searchString, 1);
    this._executeQuery(zipCode);
    animalType = getData('place_name', this.state.animalType, 1);
    if (getData('place_name', this.state.breed, 1) == null) {
      breed = ''
    } else {
      breed = getData('place_name', this.state.breed, 1);
    }

    AsyncStorage.setItem('animalType', animalType)
    AsyncStorage.setItem('breed', breed)
    AsyncStorage.setItem('zipCode', zipCode, () => {this.props.navigator.pop()})
  }

  render() {
    var spinner = this.state.isLoading ?
    ( <ActivityIndicator
        size='large'/> ) :
    ( <View/>);

    return(
      <View style={styles.profileContainer}>
        <Text style={styles.searchText}>
          Find pets that match your needs!
        </Text>
        <Text style={styles.searchText}>
          Search by zip code
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            maxLength={5}
            keyboardType='phone-pad'
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via zip code'/>
        {/* TODO: Pop up keyboard
          TODO: check for valid zip code */}
          <Text style={styles.searchText}>
            Animal Type
          </Text>
          <View style={{flex:1, justifyContent:'space-around', alignSelf: 'stretch', marginBottom: 20}}>
          <ModalPicker
            data={animalTypes}
            initValue="Select animal type"
            style={{height: 36}}
            onChange={(option)=>{ this.setState({breedList: this.getBreedList(option.type)})}}>

            <TextInput
              style={styles.searchInput}
              editable={false}
              placeholder="Select animal type"
              value={this.state.animalType}/>
          </ModalPicker>
          </View>

          <Text style={styles.searchText}>
            Breed
          </Text>

          <View style={{flex:1, justifyContent:'space-around', alignSelf: 'stretch', marginBottom: 20}}>

            <ModalPicker
              data={this.state.breedList}
              initValue="Select breed"
              style={{height: 36}}
              onChange={(option)=>{ this.setState({breed:option.label})}}>

              <TextInput
                style={styles.searchInput}
                editable={false}
                placeholder="Select breed"
                value={this.state.breed} />

          </ModalPicker>
        </View>


        <Text style={styles.searchText}>
          Size
        </Text>
        <Text style={styles.searchText}>
          Sex
        </Text>
        <View style={styles.profileButton}>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center'}}
          onPress={this.onSearchPressed.bind(this)}
          underlayColor={clrs.darkBrown}>
          <Text style={styles.profileButtonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
      {/*  <View style={{backgroundColor: 'blue'}}>
        <TouchableHighlight>
          <Text style={{flex: 1}}>M</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={{flex: 1}}>F</Text>
        </TouchableHighlight>
        </View> */}
      {spinner}
    </View>
    );
  }
}

module.exports = UserProfile;
