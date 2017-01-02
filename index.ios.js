/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS
} from 'react-native';

// class Navigator extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: Welcome,
//           title: 'Welcome',
//         }}
//       style={{flex: 1}}
//       />
//     )
//   }
// }

class PetSwipe extends Component {
  render() {
    let welcomeImage = {
      uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    };

    return (
      // <View style={{flex: 1, backgroundColor: '#8AA2A9'}}>
      //   <Text style={styles.container}>
      //     Hello?
      //   </Text>
      // </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Pet Swipe!
        </Text>
        <Text style={styles.instructions}>
          This is going to be fun...
        </Text>
        <Image source={welcomeImage} style={{width: 240, height: 240}}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  }
});

AppRegistry.registerComponent('PetSwipe', () => PetSwipe);
