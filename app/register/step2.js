import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import Header from '@/components/header';

const RegistrationStep2 = ({ route, navigation }) => {
  const { formData } = route.params;

  const [step2Data, setStep2Data] = useState({
    category: 'Astrologer',
    allSkills: [],
    primarySkill: '',
    experience: '',
    dailyHours: '',
    additionalInfo: '',
    interviewTime: '',
    currentCity: '',
    mainSourceBusiness: '',
  });

  const [errors, setErrors] = useState({});

  const allSkillOptions = [
    'Vastu',
    'Numerology',
    'Prashana Kundli',
    'Tarot Card',
    'Nadi Nakshatra',
    'Lal Kitab',
    'Vedic',
  ];

  const handleInputChange = (key, value) => {
    setStep2Data({ ...step2Data, [key]: value });
  };

  const handleAllSkillsChange = (skill) => {
    setStep2Data((prevState) => {
      const updatedAllSkills = prevState.allSkills.includes(skill)
        ? prevState.allSkills.filter((s) => s !== skill)
        : [...prevState.allSkills, skill];
      return { ...prevState, allSkills: updatedAllSkills };
    });
  };

  const handlePrimarySkillChange = (skill) => {
    setStep2Data({ ...step2Data, primarySkill: skill });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!step2Data.experience) formErrors.experience = 'Experience is required';
    if (!step2Data.dailyHours)
      formErrors.dailyHours = 'Daily hours are required';
    if (!step2Data.additionalInfo)
      formErrors.additionalInfo = 'Additional information is required';
    if (!step2Data.interviewTime)
      formErrors.interviewTime = 'Interview time is required';
    if (!step2Data.currentCity) formErrors.currentCity = 'City is required';
    if (!step2Data.mainSourceBusiness)
      formErrors.mainSourceBusiness = 'Source of business is required';

    if (step2Data.category === 'Astrologer') {
      if (!step2Data.primarySkill)
        formErrors.primarySkill = 'Primary skill is required';
      if (step2Data.allSkills.length === 0)
        formErrors.allSkills = 'At least one skill is required';
    }

    return formErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const fullData = { ...formData, ...step2Data };
      console.log(fullData);
      navigation.navigate('review', { fullData });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Professional Details"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Professional Category</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={(value) => handleInputChange('category', value)}
            value={step2Data.category}
          >
            <View style={styles.radioOption}>
              <RadioButton value="Astrologer" color={Colors.primary} />
              <Text style={styles.radioText}>Astrologer</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Legal Advisor" color={Colors.primary} />
              <Text style={styles.radioText}>Legal Advisor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Finance Advisor" color={Colors.primary} />
              <Text style={styles.radioText}>Finance Advisor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="Career Counsellor" color={Colors.primary} />
              <Text style={styles.radioText}>Career Counsellor</Text>
            </View>
          </RadioButton.Group>
        </View>

        {/* All Skills and Primary Skill Section only visible when Professional Category is Astrologer */}
        {step2Data.category === 'Astrologer' && (
          <>
            {/* All Skills Section */}
            <Text style={styles.label}>All Skills</Text>
            <View style={styles.radioGroup}>
              {allSkillOptions.map((skill) => (
                <View key={skill} style={styles.radioOption}>
                  <Checkbox
                    status={
                      step2Data.allSkills.includes(skill)
                        ? 'checked'
                        : 'unchecked'
                    }
                    onPress={() => handleAllSkillsChange(skill)}
                    color={Colors.primary}
                  />
                  <Text style={styles.radioText}>{skill}</Text>
                </View>
              ))}
            </View>
            {errors.allSkills && (
              <Text style={styles.errorText}>{errors.allSkills}</Text>
            )}

            {/* Primary Skill Section */}
            <Text style={styles.label}>Primary Skill</Text>
            <View style={styles.radioGroup}>
              {step2Data.allSkills.map((skill) => (
                <View key={skill} style={styles.radioOption}>
                  <RadioButton
                    value={skill}
                    color={Colors.primary}
                    status={
                      step2Data.primarySkill === skill ? 'checked' : 'unchecked'
                    }
                    onPress={() => handlePrimarySkillChange(skill)}
                  />
                  <Text style={styles.radioText}>{skill}</Text>
                </View>
              ))}
            </View>
            {errors.primarySkill && (
              <Text style={styles.errorText}>{errors.primarySkill}</Text>
            )}
          </>
        )}

        <Text style={styles.label}>Experience (in years)</Text>
        <TextInput
          style={[styles.input, errors.experience && styles.inputError]}
          placeholder="Describe your work experience"
          value={step2Data.experience}
          onChangeText={(text) => handleInputChange('experience', text)}
        />
        {errors.experience && (
          <Text style={styles.errorText}>{errors.experience}</Text>
        )}

        <Text style={styles.label}>Daily Contribution Hours</Text>
        <TextInput
          style={[styles.input, errors.dailyHours && styles.inputError]}
          placeholder="Enter daily hours"
          keyboardType="numeric"
          value={step2Data.dailyHours}
          onChangeText={(text) => handleInputChange('dailyHours', text)}
        />
        {errors.dailyHours && (
          <Text style={styles.errorText}>{errors.dailyHours}</Text>
        )}

        <Text style={styles.label}>Additional Information</Text>
        <TextInput
          style={[styles.input, errors.additionalInfo && styles.inputError]}
          placeholder="Why should we onboard you?"
          value={step2Data.additionalInfo}
          onChangeText={(text) => handleInputChange('additionalInfo', text)}
        />
        {errors.additionalInfo && (
          <Text style={styles.errorText}>{errors.additionalInfo}</Text>
        )}

        <Text style={styles.label}>Time for Interview</Text>
        <TextInput
          style={[styles.input, errors.interviewTime && styles.inputError]}
          placeholder="Specify a convenient time"
          value={step2Data.interviewTime}
          onChangeText={(text) => handleInputChange('interviewTime', text)}
        />
        {errors.interviewTime && (
          <Text style={styles.errorText}>{errors.interviewTime}</Text>
        )}

        <Text style={styles.label}>Current City You Live In</Text>
        <TextInput
          style={[styles.input, errors.currentCity && styles.inputError]}
          placeholder="Enter your city"
          value={step2Data.currentCity}
          onChangeText={(text) => handleInputChange('currentCity', text)}
        />
        {errors.currentCity && (
          <Text style={styles.errorText}>{errors.currentCity}</Text>
        )}

        <Text style={styles.label}>Main Source of Business</Text>
        <TextInput
          style={[styles.input, errors.mainSourceBusiness && styles.inputError]}
          placeholder="Other channels contributing to your business"
          value={step2Data.mainSourceBusiness}
          onChangeText={(text) => handleInputChange('mainSourceBusiness', text)}
        />
        {errors.mainSourceBusiness && (
          <Text style={styles.errorText}>{errors.mainSourceBusiness}</Text>
        )}
      </ScrollView>

      {/* Submit Button */}
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.textInButton}>Submit</Text>
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
    paddingTop: 50,
    paddingBottom: 100,
    marginTop: Platform.OS == 'ios' ? 0 : 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    color: Colors.tertiary,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  radioGroup: {
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  radioText: {
    color: Colors.primary,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default RegistrationStep2;
