import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ProfileComponent from '../components/ProfileComponent';
import { country, language } from '../constants/dropdown';
import {
  setItemToStorage,
  deleteItemFromStorage,
  retrieveItemFromStorage,
} from '../database/storage';
import logout from '../../assets/icons/logout.png';
import { keys } from '../constants/constants';
import authService from '../database/appwrite';
const ProfileScreen = () => {
  const [userName, setUserName] = useState<string | null>('');
  const [email, setEmail] = useState<string | null>('');
  const [region, setregion] = useState<string>('us');
  const [lang, setLang] = useState<string>('general');

  const handleStoredData = async () => {
    try {
      const reg = await retrieveItemFromStorage('country');
      const lan = await retrieveItemFromStorage('language');
      const name = await retrieveItemFromStorage('fullName');
      const Email = await retrieveItemFromStorage('email');
      setregion(reg ?? 'us');
      setLang(lan ?? 'en');
      setEmail(Email);
      setUserName(name);
    } catch (error) {
      console.log(` ${error}  + cannot fetch data from local storage`);
    }
  };
  useEffect(() => {
    handleStoredData();
  });

  const handleButtonOnPress = () => {
    setItemToStorage(keys.country, region);
    setItemToStorage(keys.language, lang);
  };
  const handleOnLogout = async () => {
    await deleteItemFromStorage(keys.country);
    await deleteItemFromStorage(keys.email);
    await deleteItemFromStorage(keys.loggedIn);
    await deleteItemFromStorage(keys.language);
    await deleteItemFromStorage(keys.name);
    await authService.handleUserLogout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        bounces={false}
        contentContainerStyle={styles.container}
      >
        {/* <ProfileComponent title={'My Wallet'} />
        <ProfileComponent title={'My Post'} />
        <ProfileComponent title={'Boost Your Post'} />
        <ProfileComponent title={'Notification'} />
        <ProfileComponent title={'Terms And Conditions'} />
        <ProfileComponent title={'About'} /> */}
        <ProfileComponent title={userName || ''} />
        <ProfileComponent title={email || ''} />

        <Dropdown
          style={styles.dropdown}
          placeholder="Select Country"
          data={country}
          value={region ?? ''}
          maxHeight={300}
          labelField="value"
          valueField="label"
          onChange={item => {
            setregion(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholder="Select Language"
          value={lang ?? ''}
          data={language}
          maxHeight={320}
          labelField="value"
          valueField="label"
          onChange={item => {
            setLang(item.value);
          }}
        />

        <Pressable style={styles.logoutItem} onPress={handleOnLogout}>
          <Image style={styles.logoutImg} source={logout} />
          <Text style={styles.label}>Logout</Text>
        </Pressable>
      </ScrollView>

      <Button title="SAVE" onPress={handleButtonOnPress} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: 'semibold',
    marginHorizontal: 2,
  },
  logoutImg: {
    width: 10,
    height: 10,
    padding: 3,
  },
  logoutItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    padding: 3,
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
