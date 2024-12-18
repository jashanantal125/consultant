import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import Header from '@/components/header';
import { useRoute } from '@react-navigation/native';

const RegistrationStep1 = ({ navigation }) => {
  const params = useRoute().params;
  const phoneNumber = params?.phoneNumber;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    language: 'English',
    phone: phoneNumber,
    gender: 'Male',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    let validationErrors = {};

    // Validate each field except phone number
    if (!formData.name.trim()) validationErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      validationErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password.trim())
      validationErrors.password = 'Password is required.';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigation.navigate('RegistrationStep2', { formData });
      // } else {
      //   Alert.alert(
      //     'Registration Error',
      //     'Please fix the errors before proceeding.'
      //   );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Personal Details"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[styles.input, errors.name && styles.errorBorder]}
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, errors.email && styles.errorBorder]}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, errors.password && styles.errorBorder]}
          placeholder="Set a password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <Text style={styles.label}>Language Preference</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={(value) => handleInputChange('language', value)}
            value={formData.language}
          >
            <View style={styles.radioOption}>
              <RadioButton value="English" color={Colors.primary} />
              <Text style={styles.radioText}>English</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Hindi" color={Colors.primary} />
              <Text style={styles.radioText}>Hindi</Text>
            </View>
          </RadioButton.Group>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          editable={false}
          selectTextOnFocus={false}
        />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={(value) => handleInputChange('gender', value)}
            value={formData.gender}
          >
            <View style={styles.radioOption}>
              <RadioButton value="Male" color={Colors.primary} />
              <Text style={styles.radioText}>Male</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Female" color={Colors.primary} />
              <Text style={styles.radioText}>Female</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Other" color={Colors.primary} />
              <Text style={styles.radioText}>Other</Text>
            </View>
          </RadioButton.Group>
        </View>
      </ScrollView>

      <Pressable onPress={handleNext} style={styles.button}>
        <Text style={styles.textInButton}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: Colors.tertiary,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 8,
  },
  radioGroup: {
    marginBottom: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioText: {
    fontSize: 16,
    marginLeft: 8,
    color: Colors.primary,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: Colors.primary,
    borderRadius: 22,
  },
  textInButton: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 12,
  },
});

export default RegistrationStep1;
