import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors'; // Adjust according to your project structure
import Header from '../../components/header';
const OTPVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  console.log('OO', otp);
  const [completeOtp, setCompleteOtp] = useState();

  const handleSubmit = (otpCode) => {
    Keyboard.dismiss();
    navigation.navigate('homepage');
  };

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp); // Update state asynchronously

    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus(); // Shift to the next input
    } else if (!text && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Shift to the previous input if backspaced
    }

    // Use the updated OTP array directly
    if (newOtp.every((digit) => digit !== '') && index === 3) {
      const otpCode = newOtp.join('');
      setCompleteOtp(otpCode);
      handleSubmit(otpCode); // Submit after all fields are filled
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header with Back Button */}
      <Header title="Verify OTP" onBackPress={() => navigation.goBack()} />

      {/* OTP Input Section */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to your phone
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)} // Set input refs
              value={digit}
              onChangeText={(text) => handleInputChange(text, index)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              returnKeyType="done"
            />
          ))}
        </View>
      </View>

      {/* Submit Button */}
      <Pressable
        onPress={() => handleSubmit(completeOtp)}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
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
    paddingTop: 40,
  },
  backButton: {
    padding: 10,
    zIndex: 10,
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
    left: -20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: -20, // To avoid overlap with header
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    color: Colors.primary,
  },
  submitButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: Colors.primary,
    borderRadius: 22,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12,
  },
});

export default OTPVerification;
