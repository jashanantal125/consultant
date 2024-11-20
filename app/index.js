import React, { useState } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { useNavigation } from '@react-navigation/native';
import { mainPageStyles } from './main';
import { Colors } from '@/constants/Colors';
import { sendOtp } from '../app/api/auth/auth';

const logo = require('../assets/images/krewlogo.png');

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handlePhoneNumber = (value) => setPhoneNumber(value);

  // Function to handle OTP submission
  const handleSubmit = async () => {
    try {
      // Call the API function
      const data = await sendOtp(phoneNumber);

      // Handle the response
      if (data?.message?.success_key === 1) {
        Alert.alert('Success', 'OTP sent!');
        navigation.navigate('homepage'); // Navigate to homepage on success
      } else {
        Alert.alert('Error', 'Sorry, you are not registered!');
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

      {/* Bottom Info Section */}
      <View
        style={{
          backgroundColor: Colors.primary,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View style={mainPageStyles.bottomContain}>
          <View>
            <Text style={mainPageStyles.numberHeading}>100%</Text>
            <Text style={mainPageStyles.firstText2}>Privacy</Text>
          </View>
          <View style={mainPageStyles.line} />
          <View>
            <Text style={mainPageStyles.numberHeading}>10,000+</Text>
            <Text style={mainPageStyles.secondText2}>
              Top astrologers of India
            </Text>
          </View>
          <View style={mainPageStyles.line} />
          <View>
            <Text style={mainPageStyles.numberHeading}>3cr+</Text>
            <Text style={mainPageStyles.thirdText2}>Happy Customers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;
