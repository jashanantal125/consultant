import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Alert,
  TextInput,
  Image,
  Dimensions,
  Platform,
  Switch,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '@/components/ActionButtons';
const settings = require('../../assets/images/settings.png');
const call = require('../../assets/images/phone.png');
const chat = require('../../assets/images/chat.png');
const wallet = require('../../assets/images/wallet.png');
const support = require('../../assets/images/support.png');
const reviews = require('../../assets/images/reviews.png');
const banner = require('../../assets/images/banner.jpg');
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

import homePageStyles from './home';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';
import { DrawerActions } from '@react-navigation/native';
export default function HomePage() {
  const images = [banner, banner, banner, banner, banner];
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const logo = require('../../assets/images/krewlogo.png');

  const [isChatEnabled, setChatEnabled] = useState(false);
  const [isCallEnabled, setCallEnabled] = useState(false);
  const [isBothEnabled, setBothEnabled] = useState(false);

  const toggleChat = () => setChatEnabled((prev) => !prev);
  const toggleCall = () => setCallEnabled((prev) => !prev);
  const toggleBoth = () => setBothEnabled((prev) => !prev);

  return (
    <View style={homePageStyles.Container}>
      <View style={homePageStyles.profileContainer}>
        <View
          style={{
            marginTop: Platform.OS === 'ios' ? 35 : 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            <Octicons name="three-bars" size={24} color={Colors.secondary} />
          </TouchableOpacity>
          <Image
            style={{
              height: 35,
              width: 90,
              resizeMode: 'contain',
            }}
            tintColor={'white'}
            source={logo}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            marginTop: Platform.OS === 'ios' ? 35 : 20,
          }}
        >
          <View
            style={{
              height: 40,
              width: 80,
              backgroundColor: Colors.primary,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: Colors.secondary,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: Colors.secondary,
              }}
            >
              ₹ 100
            </Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={homePageStyles.scrollContainer}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View>
          <Text style={homePageStyles.subtitleText}>
            Welcome to your dashboard! Manage your tasks, communications, and
            more from here.
          </Text>
        </View>

        {/* Switches Section */}
        <View style={homePageStyles.switchContainer}>
          <Text style={homePageStyles.switchHeading}>Availability</Text>
          <View style={homePageStyles.switchRow}>
            <Text style={homePageStyles.switchLabel}>Chats</Text>
            <Switch
              value={isChatEnabled}
              onValueChange={toggleChat}
              thumbColor={isChatEnabled ? Colors.primary : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#767577' }}
            />
          </View>
          <View style={homePageStyles.switchRow}>
            <Text style={homePageStyles.switchLabel}>Calls</Text>
            <Switch
              value={isCallEnabled}
              onValueChange={toggleCall}
              thumbColor={isCallEnabled ? Colors.primary : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#767577' }}
            />
          </View>
          <View style={homePageStyles.switchRow}>
            <Text style={homePageStyles.switchLabel}>Both</Text>
            <Switch
              value={isBothEnabled}
              onValueChange={toggleBoth}
              thumbColor={isBothEnabled ? Colors.primary : '#f4f3f4'}
              trackColor={{ false: '#767577', true: '#767577' }}
            />
          </View>
        </View>

        {/* Custom Buttons Section with Subtitles */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={homePageStyles.sectionSubtitle}>
            Manage Settings and Communication
          </Text>
          <View style={homePageStyles.firstIconContainer}>
            <CustomButton
              iconName="call"
              title="Call"
              onPress={() => navigation.navigate('callscreen')}
            />
            <CustomButton
              iconName="chatbox"
              title="Chat"
              onPress={() => navigation.navigate('chatscreen')}
            />
            <CustomButton
              iconName="settings"
              title="Settings"
              onPress={() => navigation.navigate('settings')}
            />
          </View>

          <Text style={homePageStyles.sectionSubtitle}>
            Your Wallet & Support
          </Text>
          <View style={homePageStyles.secondIconContainer}>
            <CustomButton
              iconName="wallet"
              title="Wallet"
              onPress={() => navigation.navigate('wallet')}
            />
            <CustomButton
              iconName="star-half"
              title="My Reviews"
              onPress={() => navigation.navigate('reviewscreen')}
            />
            {/* <CustomButton
            iconName="help"
            title="Support"
            onPress={() => navigation.navigate('supportscreen')}
          /> */}
          </View>
        </View>
        {/* Carousel Section */}
        {/* <View style={homePageStyles.carouselParent}>
          <Carousel
            loop
            width={width} // Adjust width of the carousel
            height={200} // Adjust height of the carousel
            autoPlay={true}
            data={images}
            scrollAnimationDuration={2000} // Optional: Adjust scroll speed
            renderItem={({ index }) => (
              <View style={homePageStyles.carouselItem}>
                <Image source={images[index]} style={homePageStyles.image} />
              </View>
            )}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}
