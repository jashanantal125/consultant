import { Text, StyleSheet, View, Pressable, Alert, TextInput, Image, Dimensions, Platform } from 'react-native';
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
import AntDesign from '@expo/vector-icons/AntDesign';

import homePageStyles from './home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomePage() {
    const images = [banner, banner, banner, banner, banner];
    const navigation = useNavigation()
    const { width } = Dimensions.get('window');
    const logo = require("../../assets/images/astrology.png");

    return (
        <View style={homePageStyles.Container}>
      <View style={homePageStyles.profileContainer}>
      <Image style={{height:35, width:35, resizeMode:'contain',marginTop: Platform.OS === 'ios' ? 35 : 0}} source={logo}/>
                <Text style={homePageStyles.mainText}>
                    Hello User!
                </Text>
                <View style={{flex:1, alignItems:'flex-end',marginTop: Platform.OS === 'ios' ? 35 : 0}}>
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate('settings')
                  }}>
                  <AntDesign name="setting" size={24} color="white" />
                  </TouchableOpacity>
                </View>
            </View>

            <View>
            <Text style={homePageStyles.subtitleText}>
                    Welcome to your dashboard! Manage your tasks, communications, and more from here.
                </Text>
            </View>

            
            {/* Custom Buttons Section with Subtitles */}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={homePageStyles.sectionSubtitle}>Manage Settings and Communication</Text>
                <View style={homePageStyles.firstIconContainer}>
                    <CustomButton
                        iconName='call'
                        title='Call'
                        onPress={() => navigation.navigate('callscreen')}
                    />
                    <CustomButton 
                        iconName='chatbox'
                        title='Chat'
                        onPress={() => navigation.navigate('chatscreen')}
                    />
                    <CustomButton 
                        iconName='settings'
                        title='Settings' 
                        onPress={() => navigation.navigate('settings')}
                    />
                </View>

                <Text style={homePageStyles.sectionSubtitle}>Your Wallet & Support</Text>
                <View style={homePageStyles.secondIconContainer}>
                    <CustomButton 
                        iconName='wallet'
                        title='Wallet'
                        onPress={() => navigation.navigate('wallet')}
                    />
                    <CustomButton  
                        iconName='star-half'
                        title='My Reviews'
                        onPress={() => navigation.navigate('reviewscreen')}
                    />
                                        <CustomButton  
                        iconName='help'
                        title='Support'
                        onPress={() => navigation.navigate('supportscreen')}
                    />
                </View>
            </View>
                        {/* Carousel Section */}
                        <View style={homePageStyles.carouselParent}>
                <Carousel
                    loop
                    width={width}  // Adjust width of the carousel
                    height={200} // Adjust height of the carousel
                    autoPlay={true}
                    data={images}
                    scrollAnimationDuration={2000}  // Optional: Adjust scroll speed
                    renderItem={({ index }) => (
                        <View style={homePageStyles.carouselItem}>
                            <Image source={images[index]} style={homePageStyles.image} />
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
