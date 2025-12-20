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
import { useRouter } from 'expo-router';
const ProfileScreen = () => {
  const [userName, setUserName] = useState<string | null>('');
  const [email, setEmail] = useState<string | null>('');
  const [region, setregion] = useState<string>('us');
  const [lang, setLang] = useState<string>('general');
  const router = useRouter();
  const handleStoredData = async () => {
    try {
      const reg = await retrieveItemFromStorage(keys.country);
      const lan = await retrieveItemFromStorage(keys.language);
      const name = await retrieveItemFromStorage(keys.name);
      const Email = await retrieveItemFromStorage(keys.email);
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
  }, []);

  const handleButtonOnPress = async () => {
    await Promise.all([
      setItemToStorage(keys.country, region),
      setItemToStorage(keys.language, lang),
    ]);
  };

  const handleOnLogout = async () => {
    await Promise.all([
      deleteItemFromStorage(keys.country),
      deleteItemFromStorage(keys.email),
      deleteItemFromStorage(keys.loggedIn),
      deleteItemFromStorage(keys.language),
      deleteItemFromStorage(keys.name),
    ]);
    await authService.handleUserLogout();
    router.replace('/(auth)/Login');
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
        <ProfileComponent title={userName || 'UserName will Appear'} />
        <ProfileComponent title={email || 'Email will appear'} />

        <Dropdown
          style={styles.dropdown}
          placeholder="Select Country"
          data={country}
          value={region ?? ''}
          maxHeight={320}
          labelField="label"
          valueField="value"
          onChange={item => {
            setregion(item.value);
          }}
        />

        <Dropdown
          style={styles.dropdown}
          placeholder="Select Language"
          data={language}
          value={lang}
          maxHeight={320}
          labelField="label" // displays 'Hebrew'
          valueField="value" // sets lang = 'he'
          placeholderStyle={{ color: '#888', fontSize: 16 }}
          selectedTextStyle={{ fontSize: 16, color: '#333' }}
          onChange={item => setLang(item.value)}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  logoutImg: {
    width: 30,
    height: 30,
    padding: 10,
  },
  logoutItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    padding: 10,
  },
  container: {
    padding: 10,
    margin: 10,
    gap: 12,
  },
  heading: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 5,
    margin: 8,
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc', // important!
    paddingHorizontal: 12,
    backgroundColor: '#fff', // makes it visible
    marginBottom: 15,
    justifyContent: 'center',
  },
});
