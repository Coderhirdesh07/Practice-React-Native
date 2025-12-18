import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { getUserSignup } from './database/storage';
export default function RootLayout() {
  const [user, setUser] = useState(false);
  const fakeAuthCheck = async () => {
    const isLoggedIn = await getUserSignup('isUserSigned');
    if (isLoggedIn) setUser(true);
    else setUser(false);
  };
  useEffect(() => {
    fakeAuthCheck();
  }, []);

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
