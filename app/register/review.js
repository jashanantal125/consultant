import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors'; // Adjust according to your color constants
import Header from '@/components/header';

const ApplicationUnderReview = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Application Status"
        onBackPress={() => navigation.goBack()}
      />

      {/* Content */}
      <View style={styles.content}>
        {/* You can add an image or icon here if needed */}
        <Image
          source={require('../../assets/images/loading.gif')} // Example path to image
          style={styles.image}
        />

        <Text style={styles.title2}>Application Under Review</Text>
        <Text style={styles.subtitle}>
          Our admin will review your application and notify you once the process
          is complete.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: Colors.primary,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 40, // Ensure the header is positioned correctly
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  title2: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.tertiary,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    textAlign: 'center',
    marginTop: 100, // Adjust the margin to avoid overlap with the header
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
});

export default ApplicationUnderReview;
