import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import AnimalTemplate from './AnimalTemplate';

import styles from '../utilities/stylesheet';
import clrs from '../utilities/clrs';

function getData(key, value, pageNumber) {
  var data = {
      page: pageNumber
  };
  data[key] = value;

  // var querystring = Object.keys(data)
  //   .map(key => key + '=' + encodeURIComponent(data[key]))
  //   .join('&');

  return data[key];
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '90210',
      isLoading: false
    };
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text });
  }

  _executeQuery(query) {
    this.setState({ isLoading: true });
  }

  onSearchPressed() {
    var query = getData('place_name', this.state.searchString, 1);
    this._executeQuery(query);

    AsyncStorage.setItem('zipCode', query, () => {this.props.navigator.pop()});
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
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via zip code'/>
        {/*  // TODO: check for valid zip code
          // TODO: send data to backend for query
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.profileButton}
              underlayColor={clrs.darkBrown}>
            <Text style={styles.profileButtonText}>Location</Text>
          </TouchableHighlight>
        </View> */}
        <Text style={styles.searchText}>
          Animal Type
        </Text>
        <Text style={styles.searchText}>
          Breed
        </Text>
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
        <Text style={styles.profileButtonText}>Save</Text>
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
