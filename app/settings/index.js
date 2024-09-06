import { Text, StyleSheet, View, Pressable, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ettingsPageStyles from './settingstyles'
import ActionButton from '@/components/ActionButtons';
import settingsPageStyles from './settingstyles';
import CustomButton from '../../components/ActionButtons';
// const call = require('../../assets/images/phone.png')
// const man = require('../../assets/images/man.png')



export default function SettingsPage() {

    const navigation = useNavigation()

    function handleLogOut() {
        navigation.navigate('index')
    }

    function handleEditProfile() {
        navigation.navigate('editprofile')
    }


    return (
        <View>
            <View style={settingsPageStyles.profileContainer}>
                {/* <Image source={man} style={settingsPageStyles.profileImage} /> */}
                <Text style={settingsPageStyles.profileName}>Jashan Antal</Text>
            </View>
            <View style={settingsPageStyles.iconsContainer}>
                <CustomButton
                    onPress={handleEditProfile}
                    title="Edit Profile"
                    iconName="pencil-outline"
                />
                <CustomButton
                    title="Log Out"
                    iconName="log-out-outline"
                    onPress={handleLogOut}
                />
            </View>
        </View>

    );
}
