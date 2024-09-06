import { Text, StyleSheet, View, Pressable, Alert, TextInput, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '@/components/ActionButtons';
const settings = require('../../assets/images/settings.png')
const call = require('../../assets/images/phone.png')
const chat = require('../../assets/images/chat.png')
const wallet = require('../../assets/images/wallet.png')
const support = require('../../assets/images/support.png')
const reviews = require('../../assets/images/reviews.png')
const banner = require('../../assets/images/banner.jpg')
import homePageStyles from './home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {

    const navigation = useNavigation()
    
    return (
        <SafeAreaView style={homePageStyles.Container}>
            <View style={homePageStyles.profileContainer}>
                <Text style={homePageStyles.mainText}>
                    Hello Astrologer!
                </Text>
            </View>
            <Pressable style={homePageStyles.bannerContainer}>
                <Image style={homePageStyles.bannerImage} source={banner} />
            </Pressable>
           <View style={homePageStyles.firstIconContainer}>
           <CustomButton 
            iconName='settings'
            title='settings' 
            onPress={()=> navigation.navigate('settings')}
            />
            <CustomButton
            iconName='call'
            title='Call'
            onPress={()=> navigation.navigate('callscreen')}
            />
            <CustomButton 
            iconName='chatbox'
            title='Chat'
            onPress={()=> navigation.navigate('chatscreen')}
            />
            </View>
            <View style={homePageStyles.secondIconContainer}>
           <CustomButton 
            iconName='wallet'
            title='Wallet'
            onPress={()=> navigation.navigate('wallet')}
            />
            <CustomButton  
            iconName='help'
            title='Support'
            onPress={()=> navigation.navigate('supportscreen')}
            />
            <CustomButton  
            iconName='star-half'
            title='My reviews'
            onPress={()=> navigation.navigate('reviewscreen')}
            />
            </View>
        </SafeAreaView>
    );
}

