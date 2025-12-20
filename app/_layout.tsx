import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { getUserSignup } from './database/storage';
import { keys } from './constants/constants';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [user, setUser] = useState<boolean | null>(null); // null = loading

  // Check login status
  const checkAuth = async () => {
    try {
      const isLoggedIn = await getUserSignup(keys.loggedIn);
      setUser(!!isLoggedIn); // convert to boolean
    } catch (error) {
      console.error('Error checking login:', error);
      setUser(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Show a loader while checking storage
  if (user === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="tabs/home" />
      ) : (
        <>
          <Stack.Screen name="auth/login" />
          <Stack.Screen name="auth/signup" />
        </>
      )}
    </Stack>
  );
}
