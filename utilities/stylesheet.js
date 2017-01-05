import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import clrs from './clrs'

const { width } = Dimensions.get('window');


const AppStyleSheet = StyleSheet.create({
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
    backgroundColor: clrs.lightGreen,
    // backgroundColor: 'white'
    // backgroundColor: '#C0CAAD'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: clrs.darkBrown,
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
    color: clrs.darkBrown,
    marginBottom: 5,
  },
  backdrop: {
    backgroundColor: clrs.transparent,
    // backgroundColor: 'white',
    width: 320,
    height: 320,
    flexDirection: 'column-reverse',
    alignSelf: 'flex-end'
  },
  briefDescription: {
    fontSize: 20,
    // textAlign: 'center',
    backgroundColor: clrs.transparent,
    color: 'black'
  },
    button: {
      height: 26,
      // flex: 1,
      flexDirection: 'row',
      backgroundColor: clrs.brown,
      borderColor: clrs.brown,
      borderWidth: 1,
      borderRadius: 8,
      margin: 20,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
      buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
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
      imageButton: {
        borderRadius: 8
      },
      allImages: {
        width,
        // flex: 1,
        marginTop: 200,
        // marginRight: 10,
        // marginLeft: 10,
        marginBottom: 300,
        // alignSelf: 'center',
        // backgroundColor: 'pink'
      },
      wrapper: {
        backgroundColor: 'pink'
      },
      menuContainer: {
        marginTop: 45,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: clrs.lightGreen,
        // backgroundColor: 'white',
        // backgroundColor: clrs.lightYellow
      },
      menuRows: {
        flex: 1,
      },
      menuText: {
        color: 'black',
        fontSize: 30,
        margin: 82,
        alignSelf: 'center'
      },
});

module.exports = AppStyleSheet;
