import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icon from '../../assets/icons/icons8-profile-100.png';
import { useForm, Controller } from 'react-hook-form';
import authService from '../database/appwrite';
import { useRouter } from 'expo-router';

const Login = () => {
  const { handleSubmit, control } = useForm();
  const router = useRouter();
  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await authService.handleUserLogin(data.email, data.password);
      router.replace('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={icon} style={styles.img} />
      </View>
      <Text style={styles.heading}>Login</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={value}
              onChangeText={onChange}
              keyboardType="email-address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              secureTextEntry
              onChangeText={onChange}
              value={value}
              placeholder={'Enter Your Password'}
            />
          )}
        />
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
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
