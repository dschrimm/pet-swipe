import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import clrs from './clrs';

const { width } = Dimensions.get('window');


const AppStyleSheet = StyleSheet.create({

  // -------------Navigation------------------
  navigationContainer: {
    paddingTop: 25,
    flex: 1,
  },

  // -------------Favorites Page------------------
  favoriteImages: {
    height: 145,
    width: 145,
    margin: 15,
  },

  // -------------Image View Filler------------------
  backdrop: {
    backgroundColor: clrs.transparent,
    width,
    height: 420,
    flexDirection: 'column-reverse',
  },

  // -------------Animal Template Page------------------
  briefDescription: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: clrs.transparent,
    color: clrs.menuOne,
    fontFamily: 'helvetica',
    lineHeight: 25,
    fontWeight: 'bold'
  },
  breedList: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: clrs.transparent,
    color: clrs.menuOne,
    fontFamily: 'helvetica',
    lineHeight: 25,
  },
  learnMoreButtonText: {
    fontSize: 18,
    color: 'white',
  },
  learnMoreButton: {
    height: 46,
    flexDirection: 'row',
    backgroundColor: clrs.menuOne,
    borderColor: clrs.menuOne,
    borderWidth: 1,
    borderRadius: 8,
    margin: 15,
    marginBottom: 22,
    paddingTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  // -------------Animal Details Page------------------
  description: {
    fontSize: 16,
    backgroundColor: clrs.transparent,
    color: clrs.menuOne,
    fontFamily: 'helvetica',
    lineHeight: 25,
  },
  swipeImageText: {
    flex: 1,
    margin: 10
  },
  detailView: {
    flex: 1,
  },
  removeButton: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: clrs.red,
    borderColor: clrs.red,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 20
  },

  // -------------Menu------------------
  menuContainer: {
    marginTop: 45,
    flex: 1,
    justifyContent: 'center',
  },
  menuRows: {
    flex: 1,
  },
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuText: {
    color: 'white',
    fontSize: 30,
    marginTop: 82,
    marginBottom: 82,
  },
  menuIcon: {
    height: 40,
    width: 40,
    marginTop: 80,
    marginLeft: 15,
    resizeMode: "contain",
  },


  // Profile page
  searchText: {
    marginBottom: 10,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: clrs.grey
  },
  profileContainer: {
    padding: 10
  },
  flowRight: {
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
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    marginRight: 5,
    fontSize: 18,
    borderWidth: 1,
    borderColor: clrs.brown,
    borderRadius: 8,
    color: clrs.brown,
    textAlign: 'center'
  },
  modalPicker: {
    flex:1,
    justifyContent:'space-around',
    alignSelf: 'stretch',
  },

  // -------------Welcome page------------------
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: clrs.lightGreen,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: clrs.darkBrown,
    fontWeight: 'bold'
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    color: clrs.darkBrown,
    marginBottom: 5,
  },
  button: {
    height: 26,
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
});

module.exports = AppStyleSheet;
