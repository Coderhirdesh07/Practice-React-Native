import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import HomeIcon from '../assets/icons/icons8-home-100.png';
import SearchIcon from '../assets/icons/icons8-search-100.png';
import ProfileIcon from '../assets/icons/icons8-profile-100.png';

const Tab = createBottomTabNavigator();

export default function RootLayout() {
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
  );
}
