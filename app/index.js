import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing } from 'react-native-reanimated';
import { mainPageStyles } from './main';
import { Colors } from '@/constants/Colors';

const logo = require("../assets/images/krewlogo.png");

export default function Index() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation();

    // Shared value for rotation
    const rotation = useSharedValue(0);
    const logoOpacity = useSharedValue(0);
    const titleScale = useSharedValue(0.5);

    const handlePhoneNumber = (value) => setPhoneNumber(value);

    const handleSubmit = async () => {
        const d = { "usr": phoneNumber.replace(/\D/g, '').slice(-10), "pwd": "Abcd@1234" };
        const res = await fetch("http://65.0.52.105:8006/api/method/consultant.api.loginOtp", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d),
        });
        const data = await res.json();
        console.log('Data', data)
        if (data?.message?.success_key == 1) {
            console.log('OTP sent!');
            navigation.navigate('homepage');
        } else {
            Alert.alert('Sorry, you are not registered!');
        }
    };


    return (
        <View style={mainPageStyles.mainContainer}>
            <View style={mainPageStyles.topView}>
            </View>
            <View style={mainPageStyles.container}>
                <Image source={logo} style={mainPageStyles.logo}/>
            </View>
            <View style={mainPageStyles.firstChatContainer}>
                <Text style={mainPageStyles.logintitle}>Welcome Back!</Text>
                <Text style={mainPageStyles.loginsubtitle}>Log in with your mobile OTP for secure access.</Text>
            </View>
            <View style={mainPageStyles.secondContainer}>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChangePhoneNumber={handlePhoneNumber}
                    initialValue='91'
                    textStyle={{ color: Colors.tertiary, fontWeight: '500' }}
                    style={mainPageStyles.phoneContainer}
                />
                <Pressable
                    onPress={handleSubmit}
                    style={[mainPageStyles.button, { opacity: phoneNumber.length === 13 ? 1 : 0.5 }]}
                    // disabled={phoneNumber.length !== 13}
                    >
                    <Text style={mainPageStyles.textInButton}>Get OTP</Text>
                </Pressable>
            </View>
            <View style={{backgroundColor:Colors.primary, height:200, alignItems:'center', justifyContent:'center',borderTopStartRadius:20, borderTopEndRadius:20, borderColor: Colors.secondary}}>
            <View style={mainPageStyles.bottomContain}>
                <View style={{}}>
                    <Text style={mainPageStyles.numberHeading}>100%</Text>
                    <Text style={mainPageStyles.firstText2}>Privacy</Text>
                </View>
                <View style={mainPageStyles.line} />
                <View>
                    <Text style={mainPageStyles.numberHeading}>10,000+</Text>
                    <Text style={mainPageStyles.secondText2}>Top astrologers of India</Text>
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
}
