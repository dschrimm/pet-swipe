import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';

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


   setSelectedSize(selectedSize){
    this.setState({
      selectedSize
    });
  }

  setSelectedSex(selectedSex) {
    this.setState({
      selectedSex
    });
  }

  setSelectedAge(selectedAge) {
    this.setState({
      selectedAge
    });
  }

   renderOption(option, selected, onSelect, index){
    const style = selected ? { fontWeight: 'bold'} : {};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <Text style={style}>{option}</Text>
      </TouchableWithoutFeedback>
    );
  }

   renderContainer(optionNodes){
    return <View>{optionNodes}</View>;
  }


   getData(key, value, pageNumber) {
    var data = {
        page: pageNumber
    };
    data[key] = value;

    return data[key];
  };

  onSearchPressed() {
    var zipCode = this.getData('place_name', this.state.searchString, 1);
    this._executeQuery(zipCode);
    animalType = this.getData('place_name', this.state.animalType, 1);
    if (this.getData('place_name', this.state.breed, 1) == null) {
      breed = ''
    } else {
      breed = this.getData('place_name', this.state.breed, 1);
    }
    if ((this.getData('place_name', this.state.selectedSize, 1) == null) || (this.getData('place_name', this.state.selectedSize, 1) == 'Any')) {
      selectedSize = ''
    } else {
      selectedSize = this.getData('place_name', this.state.selectedSize, 1);
    }

    if ((this.getData('place_name', this.state.selectedSex, 1) == null) || (this.getData('place_name', this.state.selectedSex, 1) == 'Any')) {
      selectedSex = ''
    } else {
      selectedSex = this.getData('place_name', this.state.selectedSex, 1);
    }

    if ((this.getData('place_name', this.state.selectedAge, 1) == null) || (this.getData('place_name', this.state.selectedAge, 1) == 'Any')) {
      selectedAge = ''
    } else {
      selectedAge = this.getData('place_name', this.state.selectedAge, 1);
    }

    AsyncStorage.setItem('animalType', animalType)
    AsyncStorage.setItem('breed', breed)
    AsyncStorage.setItem('selectedSize', selectedSize)
    AsyncStorage.setItem('selectedSex', selectedSex)
    AsyncStorage.setItem('selectedAge', selectedAge)
    AsyncStorage.setItem('zipCode', zipCode, () => {this.props.navigator.pop()})
  }

  render() {
    var spinner = this.state.isLoading ?
    ( <ActivityIndicator
        size='large'/> ) :
    ( <View/>);

    return(

      <View style={styles.profileContainer}>
      <ScrollView bounces scrollsToTop height={650}>
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
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via zip code'/>
        {/* TODO: check for valid zip code */}
          <Text style={styles.searchText}>
            Animal Type
          </Text>
          <View style={styles.modalPicker}>
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

          <View style={styles.modalPicker}>

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
          Age
        </Text>
        <SegmentedControls
        options={ ["Baby", "Young", "Adult", "Senior", "Any"] }
        onSelection={ this.setSelectedAge.bind(this) }
        selectedOption={ this.state.selectedAge }
        tint={clrs.brown}
        />

        <Text style={styles.searchText}>
          Size
        </Text>
        <SegmentedControls
        options={ ["S", "M", "L", "XL", "Any"] }
        onSelection={ this.setSelectedSize.bind(this) }
        selectedOption={ this.state.selectedSize }
        tint={clrs.brown}
        />

        <Text style={styles.searchText}>
          Sex
        </Text>
        <SegmentedControls
        options={ ["F","M", "Any"] }
        onSelection={ this.setSelectedSex.bind(this) }
        selectedOption={ this.state.selectedSex }
        tint={clrs.brown}
        />
        <View style={styles.profileButton}>
          <TouchableHighlight style={{flex: 1, justifyContent: 'center'}}
          onPress={this.onSearchPressed.bind(this)}
          underlayColor={clrs.darkBrown}>
          <Text style={styles.profileButtonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
      {spinner}
      </ScrollView>
    </View>
    );
  }
}

module.exports = UserProfile;
