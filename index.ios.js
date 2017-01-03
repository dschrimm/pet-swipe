/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

// class Navigator extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: PetSwipe,
//           title: 'Welcome',
//         }}
//       style={{flex: 1}}
//       />
//     )
//   }
// }

class PetSwipe extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired,
  // }
  //
  // constructor(props, context) {
  //   super(props, context);
  //   this._onForward = this._onForward.bind(this);
  // }
  //
  // _onForward() {
  //   this.props.navigator.push({
  //     title: 'Scene ',
  //   });
  // }

  render() {
    let welcomeImage = {
      uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    };

    let petImage = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    };

    return (
      // <View style={{flex: 1, backgroundColor: '#8AA2A9'}}>
      //   <Text style={styles.container}>
      //     Hello?
      //   </Text>
      // </View>

      // // Navigation
      // <View>
      //   <Text>Current Scene: {this.props.title}</Text>
      //   <TouchableHighlight onPress={this._onForward}>
      //     <Text>Tap me to load the next scene</Text>
      //   </TouchableHighlight>
      // </View>

      // // Welcome/loading page
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to Pet Swipe!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     This is going to be fun...
      //   </Text>
      //   <Image source={welcomeImage} style={{width: 240, height: 240}}/>
      // </View>

      // Browse pets
      <View style={styles.container}>
        <Image source={petImage} style={{flex: 2}}>
        <View style={styles.backdrop}>
        <Text style={styles.briefDescription}>Pet name, age, breed</Text>
        </View>
        </Image>
      </View>
    );
  }
}

// class Welcome extends Component {
//   render() {
//
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         <View style={styles.container}>
//           <Image source={welcomeImage} style={{width: 240, height: 240}}/>
//           // <Text style={styles.whatIsIt}>
//           //   Pet Swipe!
//           // </Text>
//         </View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignContent: 'space-between',
    // flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
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
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

AppRegistry.registerComponent('PetSwipe', () => PetSwipe);
