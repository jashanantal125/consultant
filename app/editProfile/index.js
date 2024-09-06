import { Form, FormItem, Picker } from 'react-native-form-component';
import { Text, StyleSheet, View, Pressable, Alert, TextInput, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import editProfileStyles from './editStyle'
import ActionButton from '@/components/ActionButtons';


export default function EditProfile() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState();
    const [language, setLanguage] = useState('');
    const [phone, setPhone] = useState('');
    const [experience, setExperience] = useState(false);
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');
    const [chatAmount, setChatAmount] = useState('');
    const [callAmount, setCallAmount] = useState('');
    const [payout, setPayout] = useState('');
    const [profile, setProfile] = useState('');



    const handleSubmit = () => {
        Alert.alert('Your details have been saved!')
    };

    return (
        <ScrollView>
            <View style={editProfileStyles.formContainer}>
                <Form buttonStyle={editProfileStyles.button} onButtonPress={handleSubmit}>
                    <FormItem
                        label="Full Name"
                        isRequired
                        value={firstName}
                        onChangeText={setFirstName}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />


                    <FormItem
                        label="Email ID"
                        isRequired
                        value={email}
                        onChangeText={setEmail}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />
                    <FormItem
                        label="Language"
                        isRequired
                        value={language}
                        onChangeText={setLanguage}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />

                    <FormItem
                        label="Phone Number"
                        isRequired
                        value={phone}
                        onChangeText={setPhone}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />

                    <FormItem
                        label="Experience (in Years)"
                        isRequired
                        value={experience}
                        onChangeText={setExperience}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />

                    <FormItem
                        label="Current City"
                        isRequired
                        value={city}
                        onChangeText={setCity}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />

                    <FormItem
                        label="Bio"
                        isRequired
                        value={bio}
                        onChangeText={setBio}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />
                    <FormItem
                        label="Chat Amount/Minute"
                        isRequired
                        value={chatAmount}
                        onChangeText={setChatAmount}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />
                    <FormItem
                        label="Call Amount/Minute"
                        isRequired
                        value={callAmount}
                        onChangeText={setCallAmount}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />
                    <FormItem
                        label="Consultant Payout Price"
                        isRequired
                        value={payout}
                        onChangeText={setPayout}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />
                    <FormItem
                        label="Profile Photo"
                        isRequired
                        value={profile}
                        onChangeText={setProfile}
                        asterik
                        errorBorderColor="#5cbdb9"
                    />




                </Form>
            </View>
        </ScrollView>
    );
}

