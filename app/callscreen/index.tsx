import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Linking, Alert} from 'react-native';

interface Chat {
  id: string;
  clientName: string;
  service: string;
  minutes: number;
  phoneNumber : string
}

const chats: Chat[] = [
  { id: '1', clientName: 'John Doe', service: 'Vedic Astrology', minutes: 5, phoneNumber: '+1234567890' },
  { id: '2', clientName: 'Jane Smith', service: 'Tarot Cards', minutes: 10, phoneNumber: '+9876543210' },
  { id: '3', clientName: 'Alice Johnson', service: 'Palmistry', minutes: 20, phoneNumber: '+1122334455' },
  { id: '4', clientName: 'John Ase Smith', service: 'Tarot Cards', minutes: 10, phoneNumber: '+2233445566' },
  { id: '5', clientName: 'Ali King', service: 'Palmistry', minutes: 20, phoneNumber: '+3344556677' },
  // Add more chats as needed
];


const CallScreen: React.FC = () => {
  const handleChatNow = (clientName: string) => {
    console.log(`Chatting with ${clientName}`);
    // Add navigation to the chat screen or chat functionality here
  };

  const renderItem = ({ item }: { item: Chat }) => {
    const handleCallNow = (phoneNumber: string) => {
      const phoneUrl = `tel:${phoneNumber}`;
      Linking.canOpenURL(phoneUrl)
        .then((supported) => {
          if (supported) {
            Linking.openURL(phoneUrl);
          } else {
            Alert.alert('Error', 'Phone calls are not supported on this device.');
          }
        })
        .catch((err) => console.error('Error checking phone call support:', err));
    };
  
    return (
      <View style={styles.chatCard}>
        <Text style={styles.clientName}>{item.clientName}</Text>
        <Text style={styles.service}>{item.service}</Text>
        <Text style={styles.minutes}>{item.minutes} minutes</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleCallNow(item.phoneNumber)}>
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Customers</Text>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chatsList: {
    paddingBottom: 16,
  },
  chatCard: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  clientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  service: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  minutes: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CallScreen;

