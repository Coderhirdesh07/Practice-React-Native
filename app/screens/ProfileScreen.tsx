import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileComponent from '../components/ProfileComponent';

const ProfileScreen = () => {
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false} 
    showsVerticalScrollIndicator={true} 
    horizontal={false}
    style={styles.container}>
      <ProfileComponent/>
      <ProfileComponent/>
      <ProfileComponent/>
      
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    gap:5
  }
});
