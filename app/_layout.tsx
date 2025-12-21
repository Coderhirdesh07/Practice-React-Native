import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { retrieveItemFromStorage } from './database/storage';
import { keys } from './constants/constants';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [user, setUser] = useState<boolean | null>(null); // null = loading

  const checkAuth = async () => {
    try {
      const isLoggedInRaw = await retrieveItemFromStorage(keys.loggedIn);
      const isLoggedIn = isLoggedInRaw === true || isLoggedInRaw === 'true';
      setUser(isLoggedIn);
      console.log(
        'Stored login value:',
        isLoggedInRaw,
        '=> Parsed:',
        isLoggedIn,
      );
    } catch (error) {
      console.error('Error checking login:', error);
      setUser(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (user === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="(tabs)/HomeScreen" />
      ) : (
        <>
          <Stack.Screen name="(auth)/Login" />
          <Stack.Screen name="(auth)/SignUp" />
        </>
      )}
    </Stack>
  );
}
