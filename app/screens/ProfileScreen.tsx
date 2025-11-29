import React from 'react';
import { ScrollView,View,Button, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ProfileComponent from '../components/ProfileComponent';
import { country, language } from '../constants/dropdown';

const ProfileScreen = () => {
  const handleButtonOnPress = () =>{
    
  }
  return (
    <View>
       <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      bounces={false}
      style={styles.container}
    >
      <ProfileComponent title={'Profile'} />
      {/* <ProfileComponent title={'My Wallet'} />
      <ProfileComponent title={'My Post'} />
      <ProfileComponent title={'Boost Your Post'} />
      <ProfileComponent title={'Notification'} />
      <ProfileComponent title={'Terms And Conditions'} />
      <ProfileComponent title={'About'} />
      <ProfileComponent title={'Watch Ads And Earn'} />
      <ProfileComponent title={'Refer and Earn'} />
      <ProfileComponent title={'Logout'} /> */}
      <Dropdown 
       style={styles.dropdown}
       placeholder="Select Country"
       data={country}
       maxHeight={300}
       labelField="value"
       valueField="label"
       />

      <Dropdown 
       style={styles.dropdown}
       placeholder="Select Language"
       data={language}
       maxHeight={300}
       labelField="value"
       valueField="label"
       />
    </ScrollView> 

  
    <Button title="SAVE" onPress={handleButtonOnPress}/>
    
    </View>
   

  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    marginTop: 15,
    gap: 5,
  },
  dropdown: {
    height: 35,
    padding: 8,
    marginTop:5,
    marginBottom:5,
    borderRadius: 5,
    borderWidth: 3,
  },
});
