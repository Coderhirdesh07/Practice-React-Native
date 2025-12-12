import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from '../../assets/icons/icons8-profile-100.png';
import authService from '../database/appwrite';
const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialFormState);

  const handleLogin = async (form: any) => {
    const { email, password } = form;
    const user = await authService.handleUserLogin(email, password);
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.img} />
      </View>
      <Text style={styles.heading}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          accessibilityRole="search"
          style={styles.input}
          onChangeText={handleOnChange}
          value={form.password}
          placeholder={'Enter Your Password'}
          keyboardType="default"
        />

        <TextInput
          accessibilityRole="search"
          style={styles.input}
          onChangeText={handleOnChange}
          value={form.email}
          placeholder={'Enter Your Email'}
          keyboardType="default"
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    margin: 5,
    height: 40,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    padding: 8,
    margin: 5,
    justifyContent: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 2,
  },
  img: {
    width: 100,
    height: 100,
  },
  container: {
    display: 'flex',
    padding: 4,
    marginTop: 12,
    alignContent: 'center',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
});
