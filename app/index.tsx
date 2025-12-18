import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import splash from '../assets/icons/icons8-news-750.png';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        setLoggedIn(true);
        router.replace('/home'); // main tabs
      } else {
        router.replace('/login'); // auth
      }
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={splash} />
      <Text style={styles.text}>Express News</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
