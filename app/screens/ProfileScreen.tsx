import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileComponent from '../components/ProfileComponent';

const ProfileScreen = () => {
  return (
    <ScrollView 
     showsHorizontalScrollIndicator={false} 
     showsVerticalScrollIndicator={false} 
     horizontal={false}
     bounces={false}
     style={styles.container}>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>

      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>
      <ProfileComponent title={"hello"}/>
      <ProfileComponent title={"world"}/>
      <ProfileComponent title={"cup"}/>

      
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    padding:5,
    marginTop:15,
    gap:5
  }
});
