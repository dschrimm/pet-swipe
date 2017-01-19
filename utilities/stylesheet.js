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
  responseButton: {
    paddingTop: 50
  },
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

  searchText: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },

  favoriteImages: {
    height: 145,
    width: 145,
    margin: 15,
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
    width,
    height: 420,
    // resizeMode: 'contain',
    flexDirection: 'column-reverse',
    // alignSelf: 'flex-end',
  },
  briefDescription: {
    fontSize: 18,
    // textAlign: 'center',
    backgroundColor: clrs.transparent,
    color: 'black',
    fontFamily: 'helvetica',
    lineHeight: 25
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
  swipeImageText: {
    flex: 1,
    margin: 10

    // alignSelf: 'center',
    // backgroundColor: 'pink'
  },
  imageButton: {
    marginTop: 44,
    borderRadius: 8,
    height: 450
  },
  nextPetButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // nextPetButton: {
  //   flex: 1,
  //   width: 50,
  //   height: 50,
  // },
  allImages: {
    width,
    // height: 300,
    // flex: 1,
    marginTop: 200,
    // marginRight: 10,
    // marginLeft: 10,
    marginBottom: 300,
    // alignSelf: 'center',
    // backgroundColor: 'pink'
  },
  // swipeImages: {
  //   width,
  //   // height: 300,
  //   // flex: 1,
  //   marginTop: 200,
  //   // marginRight: 10,
  //   // marginLeft: 10,
  //   marginBottom: 300,
  //   // alignSelf: 'center',
  //   // backgroundColor: 'pink'
  // },
  detailView: {
    // paddingTop: 5,
    // backgroundColor: '#90BAAD',
    flex: 1,
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

  // Profile page

  profileContainer: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },

  flowRight: {
    // flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  profileButtonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  profileButton: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: clrs.brown,
    borderColor: clrs.brown,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    // padding: 4,
    marginRight: 5,
    // flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: clrs.brown,
    borderRadius: 8,
    color: clrs.brown,
    textAlign: 'center'
  }
});

module.exports = AppStyleSheet;
