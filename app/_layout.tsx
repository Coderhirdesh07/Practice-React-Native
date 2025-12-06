import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import favourite from '../assets/icons/icons8-favourite-100.png';
import HomeIcon from '../assets/icons/icons8-home-100.png';
import SearchIcon from '../assets/icons/icons8-search-100.png';
import Profile from '../assets/icons/user.png';
import FavouriteScreen from './screens/FavouriteScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import SignUp from './screens/SignUp';

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
        component={SignUp}
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
              source={Profile}
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
        name="Favourite"
        component={FavouriteScreen}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ focused }) => (
            <Image
              source={favourite}
              style={{
                height: 24,
                width: 24,
                tintColor: focused ? '#007AFF' : '#8e8e93',
              }}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
