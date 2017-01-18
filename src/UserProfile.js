import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

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
          Search by zip code or find avaialble pets near your location.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via zip code'/>
          <TouchableHighlight style={styles.profileButton}
              onPress={this.onSearchPressed.bind(this)}
              underlayColor='#99d9f4'>
            <Text style={styles.profileButtonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.profileButton}
              underlayColor={clrs.darkBrown}>
            <Text style={styles.profileButtonText}>Location</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.searchText}>
          Animal Type
        </Text>
        <Text style={styles.searchText}>
          Breed
        </Text>
        {spinner}
      </View>
    );
  }
}

module.exports = UserProfile;
