import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, Alert, Image } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing } from 'react-native-reanimated';
import { mainPageStyles } from './main';

const logo = require("../assets/images/astrology.png");

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
        // navigation.navigate('homepage');
    };

    useEffect(() => {
        // Logo fade-in effect
        logoOpacity.value = withTiming(1, { duration: 5000, easing: Easing.out(Easing.exp) });

        // Title scale animation with looping pulsing effect
        titleScale.value = withRepeat(
            withTiming(1.2, { duration: 9000, easing: Easing.out(Easing.ease) }),
            -1, // Loop indefinitely
            true // Reverse direction on each loop for a pulsing effect
        );

        // Continuous rotation of the logo (360 degrees per loop)
        rotation.value = withRepeat(
            withTiming(360, {
                duration: 9000, // Time for one full rotation
                easing: Easing.linear,
            }),
            -1, // Loop indefinitely
            false // Do not reverse, just keep rotating
        );
    }, []);

    const logoStyle = useAnimatedStyle(() => ({
        opacity: logoOpacity.value,
        transform: [{ rotate: `${rotation.value}deg` }] // Apply the rotation
    }));

    const titleStyle = useAnimatedStyle(() => ({
        transform: [{ scale: titleScale.value }] // Apply the pulsing effect on the title
    }));

    return (
        <View style={mainPageStyles.mainContainer}>
            <View style={mainPageStyles.container}>
                <View style={mainPageStyles.titlecontainer}>
                    <Animated.Image style={[mainPageStyles.logo, logoStyle]} source={logo} />
                    <Animated.Text style={[mainPageStyles.title, titleStyle]}>KREW</Animated.Text>
                </View>
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
                    textStyle={{ color: 'white', fontWeight: '700' }}
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
            <View style={mainPageStyles.bottomContain}>
                <View>
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
    );
}
