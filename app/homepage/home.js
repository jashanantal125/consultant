import { StyleSheet } from 'react-native';

const homePageStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background color
    // paddingHorizontal: 20,
    // paddingTop: 40,
  },
  profileContainer: {
    backgroundColor: '#4CAF50', // Background color beneath the text
    paddingVertical: 20,
    paddingHorizontal: 20,
    
    alignItems: 'center', // Center align the text
    marginBottom: '10%', // Space between the profile container and buttons
  },
  mainText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  firstIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between the three buttons
    marginBottom: '10%', // Space between the first row and second row of buttons
    paddingHorizontal: '10%',
},
  secondIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between the three buttons
    paddingHorizontal: '10%',
  },

  bannerContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
   },

   bannerImage: {
    alignContent: 'center',
    width: '95%',
    height: 180,
    borderWidth: 0,
    borderRadius: 15,
   },
});

export default homePageStyles;
