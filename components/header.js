import React from 'react';
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import { Colors } from '../constants/Colors';

const Header = ({ title, onBackPress, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Pressable onPress={onBackPress} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingTop: Platform.OS == 'ios' ? 40 : 20,
    height: 80,
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
    flex: 1,
    left: -25,
  },
});

export default Header;
