import { Colors } from '@/constants/Colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const homePageStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    paddingBottom: 200,
    flexGrow: 1,
  },
  profileContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10, // Space below profile section
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  mainText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: Platform.OS == 'ios' ? 35 : 0,
  },
  subtitleText: {
    fontSize: 18,
    color: Colors.primary,
    marginTop: 8,
    paddingHorizontal: 20,
    fontWeight: '600',
    paddingRight: 40,
  },
  bannerContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 20, // Adds vertical spacing around the carousel
    zIndex: 1,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  firstIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondIconContainer: {
    flexDirection: 'row',
    gap: 18,
  },
  carouselParent: {
    height: 200,
    marginTop: 20,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 15,
    color: '#333',
  },
  switchContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: Colors.secondary,
    padding: 20,
    borderRadius: 14,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    // Elevation for Android
    elevation: 4,
  },
  switchRow: {
    flexDirection: 'row', // Row alignment for text and switch
    justifyContent: 'space-between', // Space between text and switch
    alignItems: 'center', // Align items vertically in the center
    marginVertical: 5, // Add spacing between rows
  },
  switchLabel: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
  switchHeading: {
    color: Colors.tertiary,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default homePageStyles;
