import { Colors } from '@/constants/Colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const homePageStyles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  profileContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
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
});

export default homePageStyles;
