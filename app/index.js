import React, { useState } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { useNavigation } from '@react-navigation/native';
import { mainPageStyles } from './main';
import { Colors } from '@/constants/Colors';
import { sendOtp } from '../app/api/auth/auth';
import useUserStore from '../stores/userStore';

const logo = require('../assets/images/krewlogo.png');

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const handlePhoneNumber = (value) => setPhoneNumber(value);
  const { user, setUserData, clearUserData } = useUserStore((state) => state);
  // Function to handle OTP submission
  const handleSubmit = async () => {
    try {
      // Call the API function
      const data = await sendOtp(phoneNumber);
      if (data?.message?.success_key === 1) {
        console.log('Data', data?.message);
        setUserData(data?.message);
        navigation.navigate('optVerify'); // Navigate to homepage on success
      } else {
        Alert.alert(
          'User Not Registered',
          'You are not registered with Krew. If you want to register, proceed to the next step. Otherwise, you can cancel.',
          [
            {
              text: 'Cancel', // This button closes the alert and does nothing
              style: 'cancel',
            },
            {
              text: 'Proceed', // This button navigates to RegistrationStep1
              onPress: () =>
                navigation.navigate('RegistrationStep1', {
                  phoneNumber: phoneNumber,
                }),
            },
          ],
          { cancelable: false } // Disable closing the alert by tapping outside
        );
      }
    } catch (error) {
      // Handle errors
      console.error('Error in handleSubmit:', error.response || error.message);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={mainPageStyles.mainContainer}>
      {/* Top view */}
      <View style={mainPageStyles.topView} />

      {/* Logo */}
      <View style={mainPageStyles.container}>
        <Image source={logo} style={mainPageStyles.logo} />
        <Text style={mainPageStyles.consultantTitle}>CONSULTANT</Text>
      </View>

      {/* Welcome Text */}
      <View style={mainPageStyles.firstChatContainer}>
        <Text style={mainPageStyles.logintitle}>Welcome Back!</Text>
        <Text style={mainPageStyles.loginsubtitle}>
          Log in with your mobile OTP for secure access.
        </Text>
      </View>

      {/* Phone Input and Button */}
      <View style={mainPageStyles.secondContainer}>
        <PhoneInput
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangePhoneNumber={handlePhoneNumber}
          initialValue="91"
          textStyle={{ color: Colors.tertiary, fontWeight: '500' }}
          style={mainPageStyles.phoneContainer}
        />
        <Pressable
          onPress={handleSubmit}
          style={[
            mainPageStyles.button,
            { opacity: phoneNumber.length === 13 ? 1 : 0.5 },
          ]}
          disabled={phoneNumber.length !== 13} // Button enabled only if phone number length is valid
        >
          <Text style={mainPageStyles.textInButton}>Get OTP</Text>
        </Pressable>
      </View>

      <View
        style={{
          backgroundColor: Colors.primary,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></View>
    </View>
  );
};

export default Index;
