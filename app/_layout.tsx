import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, View } from 'react-native';
import favourite from '../assets/icons/icons8-favourite-100.png';
import HomeIcon from '../assets/icons/icons8-home-100.png';
import SearchIcon from '../assets/icons/icons8-search-100.png';
import Profile from '../assets/icons/user.png';
import FavouriteScreen from './screens/FavouriteScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 6,
                borderRadius: 20,
                backgroundColor: focused ? '#007AFF' : 'transparent',
              }}
            >
              <Image
                source={HomeIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : '#8e8e93',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 6,
                borderRadius: 20,
                backgroundColor: focused ? '#007AFF' : 'transparent',
              }}
            >
              <Image
                source={SearchIcon}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : '#8e8e93',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 6,
                borderRadius: 20,
                backgroundColor: focused ? '#007AFF' : 'transparent',
              }}
            >
              <Image
                source={Profile}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : '#8e8e93',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                padding: 6,
                borderRadius: 20,
                backgroundColor: focused ? '#007AFF' : 'transparent',
              }}
            >
              <Image
                source={favourite}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'white' : '#8e8e93',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
