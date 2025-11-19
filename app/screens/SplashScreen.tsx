import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect } from 'react'
import splash from "../../assets/icons/icons8-news-750.png"
import { StackActions, useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{
      const timer = setTimeout(()=>{
        navigation.dispatch(StackActions.replace("Main"));
      },2000);

      return ()=>clearTimeout(timer);
  },[]);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={splash}/>
      <Text style={styles.text}>Express News</Text>
    </View>
  )
}

export default SplashScreen

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