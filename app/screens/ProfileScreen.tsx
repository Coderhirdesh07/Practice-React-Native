import React, { useState } from 'react';
import { ScrollView, Text, View, Button, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ProfileComponent from '../components/ProfileComponent';
import { country, language } from '../constants/dropdown';
import { setData } from '../utils/storage.util';

const ProfileScreen = () => {
  const [region, setregion] = useState<string>('us');
  const [lang, setLang] = useState<string>('general');

  // const handleButtonOnPress = () => {
  //   setData('country', region);
  //   setData('language', lang);
  // };

  return (
    <View>
      <Text style={styles.heading}>Profile</Text>

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
          // onChange={item => {
          //   setregion(item.value);
          // }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholder="Select Language"
          data={language}
          maxHeight={320}
          labelField="value"
          valueField="label"
          // onChange={item => {
          //   setLang(item.value);
          // }}
        />
      </ScrollView>

      <Button title="SAVE" onPress={handleButtonOnPress} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    marginTop: 25,
    gap: 5,
  },
  heading: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
    margin: 8,
  },
  dropdown: {
    height: 40,
    padding: 8,
    marginTop: 8,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 3,
  },
});
