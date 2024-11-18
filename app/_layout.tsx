import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import Index from './index'
import HomePage from './homepage'
import ReviewsScreen from './reviewscreen'
import SettingsPage from './settings'
import SupportScreen from './supportscreen'
import Wallet from './wallet'
import EditProfile from './editProfile'
import ChatsScreen from './chatscreen' 
import CallScreen from './callscreen'
import ChatScreen from './chat'


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

<NavigationContainer independent={true}>
  <Stack.Navigator initialRouteName="index" screenOptions={{ headerBackTitle: '', headerTitleAlign: 'center' }}>
    <Stack.Screen 
      name="index" 
      component={Index}  
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="homepage" 
      component={HomePage} 
      options={{ 
        headerTitle: "Home Page", // Set the custom title here
        headerBackTitleVisible: false, 
        headerShown: false 
      }} 
    />
    <Stack.Screen 
      name="reviewscreen" 
      component={ReviewsScreen} 
      options={{ 
        headerTitle: "My Reviews", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="settings" 
      component={SettingsPage} 
      options={{ 
        headerTitle: "Settings", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="supportscreen" 
      component={SupportScreen} 
      options={{ 
        headerTitle: "Support", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="wallet" 
      component={Wallet} 
      options={{ 
        headerTitle: "My Wallet", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="chatscreen" 
      component={ChatsScreen} 
      options={{ 
        headerTitle: "Chat", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="editprofile" 
      component={EditProfile} 
      options={{ 
        headerTitle: "Edit Profile", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="callscreen" 
      component={CallScreen} 
      options={{ 
        headerTitle: "Call", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
    <Stack.Screen 
      name="chat" 
      component={ChatScreen} 
      options={{ 
        headerTitle: "Chat Room", // Custom title
        headerBackTitleVisible: false, 
        headerShown: true 
      }} 
    />
  </Stack.Navigator>
</NavigationContainer>

    </GestureHandlerRootView>  //check now
  );
}
