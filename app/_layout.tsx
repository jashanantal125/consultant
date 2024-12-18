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
import RegistrationStep1 from './register/step1'
import RegistrationStep2 from './register/step2'
import ApplicationUnderReview from './register/review'
import OTPVerification from './register/optVerify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createDrawerNavigator } from '@react-navigation/drawer';  // Import DrawerNavigator

const queryClient = new QueryClient();


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
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

  function HomeDrawer() {
    return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Chat Order Management" component={ChatScreen} />
        <Drawer.Screen name="Call Order Management" component={CallScreen} />
        <Drawer.Screen name="Earnings & Payouts" component={Wallet} />
        <Drawer.Screen name="Chat History" component={ChatScreen} />
        <Drawer.Screen name="My Profile" component={EditProfile} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    );
  }

  return (
  
    <GestureHandlerRootView style={{ flex: 1 }}>
  <QueryClientProvider client={queryClient}>
<NavigationContainer independent={true}>
  <Stack.Navigator initialRouteName="homepage" screenOptions={{ headerBackTitle: '', headerTitleAlign: 'center' }}>
    <Stack.Screen 
      name="index" 
      component={Index}  
      options={{ headerShown: false }} 
    />
        <Stack.Screen 
      name="RegistrationStep1" 
      component={RegistrationStep1}  
      options={{ headerShown: false }} 
    />
      <Stack.Screen 
      name="RegistrationStep2" 
      component={RegistrationStep2}  
      options={{ headerShown: false }} 
    />

    <Stack.Screen 
      name="optVerify" 
      component={OTPVerification}  
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="review" 
      component={ApplicationUnderReview}  
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="homepage" 
      component={HomeDrawer} 
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
    </QueryClientProvider>
    </GestureHandlerRootView>  //check now
  );
}
