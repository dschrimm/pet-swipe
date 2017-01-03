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
  ListView,
} from 'react-native';


class Welcome extends Component {

  render() {
    let welcomeImage = {
      uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    };
    return (
      // Welcome/loading page
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>
          Welcome to Pet Swipe!
        </Text>
        <Text style={styles.instructions}>
          This is going to be fun...
        </Text>
        <Image source={welcomeImage} style={{width: 240, height: 240}}/>
      </View>
    )
  }
}

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

      // <Text>Second screen</Text>
      // Browse pets
      // https://www.petfinder.com/petdetail/37055772
      <View style={styles.container}>
        <Image source={petImage} style={{flex: 2}}>
        <View style={styles.backdrop}>
        <Text style={styles.briefDescription}>Annika, German Shepherd</Text>
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

// Favorites page
class Favorites extends Component {
  // render() {
    // let imageOne = {
    //   uri: 'https://thumbs.dreamstime.com/z/cartoon-cute-pets-animals-set-illustration-little-baby-35925102.jpg'
    // };
    // let imageTwo = {
    //   uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36618931/3/?bust=1478714805&width=632&no_scale_up=1'
  //   };
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.welcome}>
  //         Welcome to Pet Swipe!
  //       </Text>
  //       <Text style={styles.instructions}>
  //         This is going to be fun...
  //       </Text>
  //       <Image source={imageOne} style={{width: 240, height: 240}}/>
  //     </View>
  //   )
  // }
  constructor() {
    let imageOne = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37055772/1/?bust=1482790177&width=632&no_scale_up=1'
    };
    let imageTwo = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36618931/3/?bust=1478714805&width=632&no_scale_up=1'
    };
    let imageThree = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36687740/1/?bust=1478648999&width=632&no_scale_up=1'
    };
    let imageFour = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/37064665/1/?bust=1482900212&width=632&no_scale_up=1'
    };
    let imageFive = {
      uri: 'https://drpem3xzef3kf.cloudfront.net/photos/pets/36490552/1/?bust=1480459899&width=632&no_scale_up=1'
    };
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([imageOne, imageTwo, imageThree, imageFour, imageFive]),
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Image source={rowData} style={{width: 140, height: 140}}/>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#90BAAD'
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
    backgroundColor: '#90BAAD',
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
    color: 'white'
  }
});

AppRegistry.registerComponent('PetSwipe', () => Favorites);
