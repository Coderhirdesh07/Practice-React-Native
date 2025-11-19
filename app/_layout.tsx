import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import HomeIcon from '../assets/icons/icons8-home-100.png';
import SearchIcon from '../assets/icons/icons8-search-100.png';
import ProfileIcon from '../assets/icons/icons8-profile-100.png';
import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  SplashScreen  from '../app/screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabsScreen(){
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={HomeIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <Image
              source={SearchIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={ProfileIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function RootLayout() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Splash'
          screenOptions={{headerShown:false}}>
          <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{headerShown:false}}
          >
          </Stack.Screen>

          <Stack.Screen
          name="Main"
          component={BottomTabsScreen}
          options={{headerShown:false}}
          >
          </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
